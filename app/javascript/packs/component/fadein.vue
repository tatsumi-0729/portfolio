<template>
  <div class="fadeIn">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      scrollCount: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollCount = window.scrollY;
      if (this.scrollCount > 110) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fadeIn {
  animation: fadeIn 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
