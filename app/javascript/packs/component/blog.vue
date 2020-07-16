<template>
  <div id="app">
    <div class="container">
      <div class="card_container">
        <!-- card1 -->
        <div class="card card-skin">
          <div class="card_imgframe"></div>
          <div class="card_textbox">
            <div class="card_title">My First Post</div>
            <div class="card_content">
              My First Post.
              <br />please see in.
            </div>
            <div class="card_post_day">Jul. 2020</div>
          </div>
        </div>
        <!-- card2 -->
        <div class="card card-skin">
          <div class="card_imgframe"></div>
          <div class="card_textbox">
            <div class="card_title">My Second Post</div>
            <div class="card_content">
              My Second Post.
              <br />please see in.
            </div>
            <div class="card_post_day">Jun. 2020</div>
          </div>
        </div>
        <!-- card3 -->
        <div class="card card-skin">
          <div class="card_imgframe"></div>
          <div class="card_textbox">
            <div class="card_title">My Third Post</div>
            <div class="card_content">
              My Third Post.
              <br />please see in.
            </div>
            <div class="card_post_day">May. 2020</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      Top: "Blog"
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
  margin: 90px 0px 10px 0px;
  width: 110%;
}

.card_container {
  display: flex;
  flex-direction: row;
  width: 100%;

  .card {
    width: 27%;
    height: auto;
    margin: 15px;

    .card_imgframe {
      width: 100%;
      height: auto;
      padding-top: 56.25%;
      background: url(https://placehold.jp/360x640.png) no-repeat center;
      background-size: cover;
      box-sizing: border-box;
    }

    .card_textbox {
      width: 100%;
      height: auto;
      padding: 20px 18px;
      background: #ffffff;
      box-sizing: border-box;
    }

    .card_textbox > * + * {
      margin-top: 10px;
    }

    .card_title {
      @include font();
      font-weight: bold;
    }

    .card_content {
      @include font();
      font-size: 7px;
    }

    .card_post_day {
      padding-top: 3px;
      font-family: serif;
      text-decoration: none;
      color: #d0d0d0;
      font-size: 7px;
    }
  }
  // hoverで半透明に
  // 将来的にはデフォルトモノクロでホバーで色を付与に変えるかも
  .card:hover {
    cursor: pointer;
    filter: alpha(opacity=40); /* ie lt 8 */
    -ms-filter: "alpha(opacity=60)"; /* ie 8 */
    -moz-opacity: 0.6; /* FF lt 1.5, Netscape */
    -khtml-opacity: 0.6; /* Safari 1.x */
    opacity: 0.6;
    zoom: 1;
  }
}
</style>
