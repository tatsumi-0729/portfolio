<template>
  <div id="app">
    <div class="container">
      <div class="navbar">
        <p class="name">Tatsumi Tamura</p>
        <div class="slash">/</div>
        <br />
        <div class="line">----</div>
        <router-link :to="{ name: 'Profile' }" class="profile">Profile</router-link>
        <router-link :to="{ name: 'Blog' }" class="blog">Blog</router-link>
        <router-link :to="{ name: 'Archive' }" class="archive">Archive</router-link>
        <router-link :to="{ name: 'Contact' }" class="contact">Contact</router-link>
        <br />
        <div class="line">----</div>
      </div>

      <div class="router_width">
        <router-view />
      </div>

      <div class="humberger">
        <input type="checkbox" id="checkbox" class="checkbox" />
        <label for="checkbox" class="open">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
        <label for="checkbox" class="back"></label>

        <aside>
          <router-link :to="{ name: 'Profile' }" class="profile_aside">Profile</router-link>
          <router-link :to="{ name: 'Blog' }" class="blog_aside">Blog</router-link>
          <router-link :to="{ name: 'Archive' }" class="archive_aside">Archive</router-link>
          <router-link :to="{ name: 'Contact' }" class="contact_aside">Contact</router-link>
          <label for="checkbox" class="close">×</label>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin font {
  font-family: serif;
  text-decoration: none;
  color: #333333;
  margin-bottom: 6px;
}

// PC
.container {
  display: flex;

  .humberger {
    display: none;
  }

  .navbar {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 15%;
    margin: 90px 0px 0px 100px;
    font-size: 15px;
    .line {
      @include font;
    }
    .name {
      @include font;
    }
    .slash {
      display: none;
    }
    .profile {
      @include font;
    }
    .blog {
      @include font;
    }
    .archive {
      @include font;
    }
    .contact {
      @include font;
    }
    .profile:hover {
      cursor: pointer;
      filter: alpha(opacity=30);
      -ms-filter: "alpha(opacity=60)";
      -moz-opacity: 0.6;
      -khtml-opacity: 0.6;
      opacity: 0.6;
      zoom: 1;
    }
    .blog:hover {
      cursor: pointer;
      filter: alpha(opacity=30);
      -ms-filter: "alpha(opacity=60)";
      -moz-opacity: 0.6;
      -khtml-opacity: 0.6;
      opacity: 0.6;
      zoom: 1;
    }
    .archive:hover {
      cursor: pointer;
      filter: alpha(opacity=30);
      -ms-filter: "alpha(opacity=60)";
      -moz-opacity: 0.6;
      -khtml-opacity: 0.6;
      opacity: 0.6;
      zoom: 1;
    }
    .contact:hover {
      cursor: pointer;
      filter: alpha(opacity=30);
      -ms-filter: "alpha(opacity=60)";
      -moz-opacity: 0.6;
      -khtml-opacity: 0.6;
      opacity: 0.6;
      zoom: 1;
    }

    // .profile:visited {
    //   color: lightgray;
    // }

    // .blog:visited {
    //   color: lightgray;
    // }

    // .archive:visited {
    //   color: lightgray;
    // }

    // .contact:visited {
    //   color: lightgray;
    // }
  }

  .router_width {
    width: 70%;
    position: relative;
    left: 325px;
  }
}

// タブレット
@media screen and (max-width: 959px) {
  @mixin nav_position_tb {
    position: relative;
    bottom: 40px;
    z-index: 1;
  }

  .container {
    display: flex;
    flex-direction: column;
    // 余分な右余白を消す
    overflow: hidden;

    .humberger {
      display: none;
    }

    .line {
      display: none;
    }

    .navbar {
      display: flex;
      flex-direction: row;
      position: relative;
      width: 100%;
      font-size: 15px;

      .name {
        @include font;
        position: relative;
        bottom: 55px;
        right: 10px;
      }
      .slash {
        @include font;
        display: block;
        position: relative;
        bottom: 42px;
      }
      .profile {
        @include font;
        @include nav_position_tb();
        left: 15px;
      }
      .blog {
        @include font;
        @include nav_position_tb();
        left: 25px;
      }
      .archive {
        @include font;
        @include nav_position_tb();
        left: 35px;
      }
      .contact {
        @include font;
        @include nav_position_tb();
        left: 45px;
      }
    }
    .router_width {
      width: 100%;
      position: relative;
      bottom: 115px;
      left: 80px;
    }
  }
}

// スマートフォン
@media screen and (max-width: 559px) {
  @mixin font_sp {
    font-family: serif;
    text-decoration: none;
    color: #333333;
    margin-bottom: 6px;
    font-size: 13px;
  }

  @mixin font_aside {
    font-family: serif;
    text-decoration: none;
    color: #f5f5f5;
    width: 35px;
    position: relative;
    left: 10px;
    margin-top: 20px;
  }

  @mixin nav_position_sp {
    position: relative;
    margin-left: 1%;
    bottom: 20px;
    z-index: 1;
  }
  .container {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .line {
      display: none;
    }

    .navbar {
      display: flex;
      flex-direction: row;
      position: relative;
      width: 100%;
      font-size: 15px;

      .name {
        @include font_sp;
        position: relative;
        bottom: 55px;
        right: 10px;
      }
      .slash {
        @include font_sp;
        display: block;
        position: relative;
        left: 7px;
        bottom: 42px;
      }
      .profile {
        @include font_sp;
        @include nav_position_sp();
      }
      .blog {
        @include font_sp;
        @include nav_position_sp();
      }
      .archive {
        @include font_sp;
        @include nav_position_sp();
      }
      .contact {
        @include font_sp;
        @include nav_position_sp();
      }
    }
    .router_width {
      width: 100%;
      position: relative;
      bottom: 115px;
      left: 75px;
    }

    .humberger {
      display: block;

      .checkbox {
        position: fixed;
        top: 650px;
        left: -50vw;
      }

      .open {
        position: fixed;
        width: 50px;
        height: 50px;
        left: 25px;
        top: 650px;

        /* 三本線のスタイルを決める */
        div {
          display: block;
          border-radius: 20px;
          width: 30px;
          height: 2px;
          background: #444;
          position: absolute;
          left: 10px;
          // transition: all 0.5s ease;
        }

        /* 線の縦位置の調整 */
        .bar1 {
          top: 6px;
          background-color: #444;
        }
        .bar2 {
          top: 15px;
          background-color: #444;
        }
        .bar3 {
          top: 24px;
          background-color: #444;
        }
      }

      aside {
        position: fixed;
        top: 0;
        left: -250px;
        width: 30%;
        height: 100%;
        min-width: 150px;
        display: flex;
        flex-direction: column;
        background: rgb(44, 44, 44);
        opacity: 0.9;
        transition: all 0.3s;

        .profile_aside {
          @include font_aside;
          top: 450px;
        }
        .blog_aside {
          @include font_aside;
          top: 455px;
        }
        .archive_aside {
          @include font_aside;
          top: 460px;
        }
        .contact_aside {
          @include font_aside;
          top: 465px;
        }
        .profile_aside:hover {
          cursor: pointer;
          filter: alpha(opacity=30);
          -ms-filter: "alpha(opacity=60)";
          -moz-opacity: 0.6;
          -khtml-opacity: 0.6;
          opacity: 0.6;
          zoom: 1;
        }
        .blog_aside:hover {
          cursor: pointer;
          filter: alpha(opacity=30);
          -ms-filter: "alpha(opacity=60)";
          -moz-opacity: 0.6;
          -khtml-opacity: 0.6;
          opacity: 0.6;
          zoom: 1;
        }
        .archive_aside:hover {
          cursor: pointer;
          filter: alpha(opacity=30);
          -ms-filter: "alpha(opacity=60)";
          -moz-opacity: 0.6;
          -khtml-opacity: 0.6;
          opacity: 0.6;
          zoom: 1;
        }
        .contact_aside:hover {
          cursor: pointer;
          filter: alpha(opacity=30);
          -ms-filter: "alpha(opacity=60)";
          -moz-opacity: 0.6;
          -khtml-opacity: 0.6;
          opacity: 0.6;
          zoom: 1;
        }

        .close {
          font-size: 15px;
          color: #f5f5f5;
          position: relative;
          top: 520px;
          left: 10px;
        }
      }

      .checkbox:checked ~ aside {
        left: 0;
      }
      .checkbox:checked ~ .open div {
        left: -250px;
      }
    }
  }
}
</style>
