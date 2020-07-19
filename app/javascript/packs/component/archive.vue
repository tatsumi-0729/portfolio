<template>
  <div id="app">
    <div class="container">
      <h2 class="coming_soon">Coming soon</h2>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@mixin font {
  font-family: serif;
  text-decoration: none;
  color: #333333;
}
.container {
  margin: 100px 0px 0px 0px;
  width: 100%;

  .coming_soon {
    @include font();
  }
}

@media screen and (max-width: 959px) {
  .container {
    margin: 100px 0px 0px 15px;
    width: 100%;
  }
}

@media screen and (max-width: 559px) {
}
</style>
