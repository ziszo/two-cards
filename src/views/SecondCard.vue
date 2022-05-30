<template>
  <div class="card-2 card-container flex-end">
    <div
      ref="card"
      class="card swipeable flex-center"
      v-hammer:swipe.vertical="onPan"
      v-hammer:pan="onPan"
      v-hammer:panstart="onPanStart"
      v-hammer:panend="onPanEnd"
      :style="floatingCardStyles"
    >
      <h3>Try to drag me.</h3>
      <!-- <button class="v-btn" @click="goToNext">Next Page</button> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SecondCard",
  data() {
    return {
      floatingCardStyles: {},
    };
  },
  mounted() {
    this.$refs.card.hammer.set({ touchAction: "pan-y" });
  },
  methods: {
    goToNext() {
      console.log("Going to next page...");
      // this.$router.push({ name: "home" });
      this.$store.dispatch("toggle");
    },
    onPan(e) {
      e.preventDefault();
      if (this.isOpen && e.deltaY > 0) {
        this.$store.dispatch("updateDeltaY", e.deltaY);
        this.floatingCardStyles = {
          transform: "translateY(calc(" + e.deltaY + "px - 95vh))",
        };
      }
    },
    onPanStart() {
      console.log("onPanStart()");
    },
    onPanEnd(e) {
      if (this.isOpen) {
        if (e.deltaY > this.threshold) this.$store.dispatch("toggle");
        else this.transitionOpen();
      }
    },
    transitionOpen() {
      this.$store.dispatch("updateDeltaY", 0);
      this.floatingCardStyles = {
        transform: "translateY(-95vh)",
        transition: "0.3s",
      };
    },
    transitionClose() {
      this.$store.dispatch("updateDeltaY", 0);
      this.floatingCardStyles = {
        transform: "translateY(0)",
        transition: "0.3s",
      };
    },
  },
  computed: {
    ...mapGetters(["isOpen", "threshold"]),
  },
  watch: {
    isOpen(isOpen) {
      if (isOpen) {
        this.transitionOpen();
      } else {
        this.transitionClose();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-2 {
  position: absolute;
  bottom: 0;
  height: 0;
  width: 100%;
  z-index: 10;

  .card {
    height: 95vh;
    background: #084861;
    color: white;
    border-radius: 10px 10px 0 0;
    cursor: grab;
    touch-action: auto !important;
  }
}
</style>
