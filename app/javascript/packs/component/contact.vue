<template>
  <div id="app">
    <p>{{ HelloVue }}</p>
    <p>{{ Top }}</p>
    <router-link :to="{ name: 'Top' }">Topへ</router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      HelloVue: "Hello Vue!",
      Top: "contactです!",
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
