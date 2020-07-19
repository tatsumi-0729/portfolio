<template>
  <div id="app">
    <div class="container">
      <div class="contact_container">
        <h3 class="contact">Contact</h3>
        <label for="_title" class="title_text">Title</label>
        <input id="_title" class="title" type="text" />
        <label for="_email" class="email_text">Email</label>
        <input id="_email" class="email" type="text" />
        <label for="_content" class="content_text">Content</label>
        <textarea id="_content" class="content" />
        <button class="send_button">Send</button>
      </div>
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
  margin-top: 100px;
  margin-left: 17%;
  width: 40%;

  .contact_container {
    display: flex;
    flex-direction: column;

    .contact {
      @include font();
      margin: 0px 0px 30px 0px;
    }

    .title {
      width: 55%;
      height: 20px;
      margin: 3px 0px 20px 0px;
    }

    .title_text {
      @include font();
    }

    .email {
      width: 55%;
      height: 20px;
      margin: 3px 0px 20px 0px;
    }

    .email_text {
      @include font();
    }

    .content {
      width: 85%;
      height: 150px;
      margin: 3px 0px 20px 0px;
    }

    textarea {
      resize: vertical;
    }

    .send_button {
      width: 15%;
      height: 25px;
    }

    .content_text {
      @include font();
    }
  }
}

@media screen and (max-width: 959px) {
  .container {
    margin-top: 110px;
    margin-left: 25%;
    width: 40%;
  }
}

@media screen and (max-width: 559px) {
  .container {
    margin-left: 10%;
    width: 60%;
  }
}
</style>
