<template>
  <div class="card-1 card-container flex-center">
    <div class="card flex-center" :style="cardStyles">
      <h3>You can't drag me.</h3>
      <!-- <button class="v-btn" @click="goToNext">Next Page</button> -->
      <button class="v-btn" @click="goToNext">Open Second Page</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FirstCard",
  data() {
    return {
      cardStyles: {},
    };
  },
  methods: {
    goToNext() {
      console.log("Going to next page...");
      // this.$router.push("gesture");
      this.$store.dispatch("toggle");
    },
  },
  computed: {
    ...mapGetters(["isOpen", "deltaY", "threshold"]),
  },
  watch: {
    isOpen(isOpen) {
      if (isOpen) {
        this.cardStyles = {
          transform: "scale(0.95)",
          transition: "0.3s",
          "border-radius": "20px",
        };
      } else {
        this.cardStyles = {
          transition: "0.3s",
        };
      }
    },
    deltaY(deltaY) {
      if (this.isOpen) {
        if (deltaY > 0) {
          if (deltaY <= this.threshold) {
            this.cardStyles = {
              transform:
                // "scale(" + 0.95 + (deltaY * 0.05) / this.threshold + ")",
                "scale(calc(0.95 + " +
                deltaY +
                " * 0.05 / " +
                this.threshold +
                "))",
              "border-radius": (1 + deltaY / this.threshold) * 20 + "px",
            };
          } else {
            this.cardStyles = {
              "border-radius": "40px",
            };
          }
        } else {
          this.cardStyles = {
            transform: "scale(0.95)",
            transition: "0.3s",
            "border-radius": "20px",
          };
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-1 {
  position: absolute;

  .card {
    height: 100vh;
    background: #454b55;
    color: white;
  }
}
</style>
