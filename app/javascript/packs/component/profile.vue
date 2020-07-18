<template>
  <div id="app">
    <div class="container">
      <div class="image_container">
        <img :src="TopImage" class="topImage" />
      </div>
      <div class="text_area">
        <p class="introduce_text">
          Tatsumi Tamura was born in Yamaguchi Prefecture in 1995,
          <br />He played tennis ball in High School,
          <br />And has got the right for National Convention and has lost second round,
          <br />But that experience a lot of influence for him aspect a lot,
          <br />Now he is working as a Engineer to make web system for B to B and B to C,
          <br />Usually, he using Java and Ruby, JavaScript of programing language,
          <br />The most favorite programing language of his is Vue.js,
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
  color: #333333;
  margin-bottom: 6px;
}

.container {
  margin: 105px 0px 0px 15px;
  width: 70%;

  .image_container {
    position: relative;

    .topImage {
      height: 200px;
      width: 325px;
      // モノクロにする
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      //
    }
    .topImage:hover {
      -webkit-filter: grayscale(0);
      -moz-filter: grayscale(0);
      -ms-filter: grayscale(0);
      -o-filter: grayscale(0);
      filter: grayscale(0);
    }
  }

  // 枠をぼやけさせる
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
}

@media screen and (max-width: 959px) {
}

@media screen and (max-width: 559px) {
}
</style>
