<template>
  <div class="whole">
    <div id="app">
      <p>{{ HelloVue }}</p>
      <img :src="TopImage" />
      <router-link :to="{ name: 'Contact' }">連絡先へ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      HelloVue: "Hello Vue!",
      TopImage: require("../../../static/images/myImage.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.whole {
  width: 100%;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>
