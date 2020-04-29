<template>
  <header id="header">
    <div class="header_logo">
      <img src="./../assets/img/top/logo_blue.png" alt />
    </div>
    <div class="header_user_name white flex"></div>
    <div class="header_logout flex bold">
      <button type="button">ログアウト</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      // msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped></style>
