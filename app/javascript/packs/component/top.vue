<template>
  <div id="app">
    <div class="container">
      <div class="image_container">
        <img :src="TopImage" class="topImage" />
      </div>
      <div class="text_area">
        <p class="introduce_text">
          Tatsumi Tamura was born in Yamaguchi Prefecture in 1995,
          <br />He plays tennis ball in High School Students,
          <br />And got the right for National convention and lost second round,
          <br />But that experience a lot of influence for him aspect a lot,
          <br />Now he working as a engineer to make web system for B to B and B to C,
        </p>
      </div>
    </div>
    <!-- <router-link :to="{ name: 'Contact' }">連絡先へ</router-link> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      TopImage: require("../../../static/images/profile_image.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin font {
  font-family: serif;
  text-decoration: none;
  color: #000000;
  margin-bottom: 6px;
}

.container {
  margin: 100px 0px 0px 0px;
}

.image_container {
  position: relative;

  .topImage {
    height: 260px;
    width: 370px;
  }
}

// .image_container::after {
//   position: absolute;
//   content: "";
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   box-shadow: inset 0px 0px 4px 4px #eeeeee;
// }

.text_area {
  margin: 25px 0px 0px 0px;
  .introduce_text {
    @include font();
  }
}

@media screen and (max-width: 960px) {
}

@media screen and (max-width: 560px) {
}
</style>
