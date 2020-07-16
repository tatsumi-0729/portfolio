<template>
  <div id="app">
    <div class="container">
      <div class="navbar">
        <p class="name">Tatsumi Tamura</p>
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

.container {
  display: flex;
  justify-content: flex-start;
}

.navbar {
  width: 15%;
  margin: 90px 0px 0px 100px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  .line {
    @include font;
  }
  .name {
    @include font;
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
}

.router_width {
  width: 70%;
}
</style>
