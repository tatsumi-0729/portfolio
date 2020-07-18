<template>
  <div id="app">
    <div class="container">
      <h2 class="reference">Reference</h2>
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
  margin: 100px 0px 10px 0px;
  width: 100%;

  .reference {
    @include font();
  }
}

@media screen and (max-width: 959px) {
}

@media screen and (max-width: 559px) {
}
</style>
