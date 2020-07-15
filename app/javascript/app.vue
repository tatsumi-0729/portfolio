<template>
  <div id="app">
    <div class="whole">
      <div class="navbar">
        <p class="name">Tatsumi Tamura</p>
        <br />
        <div class="line">----</div>
        <router-link :to="{ name: 'Contact' }" class="profile">Profile</router-link>
        <router-link :to="{ name: 'Top' }" class="blog">Blog</router-link>
        <router-link :to="{ name: 'Contact' }" class="archive">Archive</router-link>
        <router-link :to="{ name: 'Top' }" class="contact">Contact</router-link>
        <br />
        <div class="line">----</div>
      </div>
      <router-view />
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
  color: #000000;
  margin-bottom: 6px;
}

.whole {
  display: flex;
  justify-content: flex-start;
}

.navbar {
  width: 15%;
  margin: 90px 0px 0px 100px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  .name {
    @include font;
  }
  .line {
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
}
</style>
