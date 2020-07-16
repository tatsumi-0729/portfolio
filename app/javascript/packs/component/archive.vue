<template>
  <div id="app">
    <div class="container">
      <p>{{ Top }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      Top: "Archive"
    };
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
}
</style>
