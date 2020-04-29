<template>
  <div id="sign_in" class="wrapper">
    <Header />
    <div class="title_block tac navy bold"><h2>新規会員登録</h2></div>
    <div class="form_block navy">
      <div class="input">
        <span class="bold">メールアドレス：</span><input type="email" />
      </div>
      <div class="input">
        <span class="bold">パスワード：</span><input type="password" />
      </div>
      <div class="input">
        <span class="bold">ニックネーム：</span><input type="text" />
      </div>
      <div class="input">
        <button type="button" class="form_btn bg_navy bold">
          登録
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import "./../assets/css/top.css";
var url = "http://localhost:3000/api/v1/tops";

export default {
  name: "top",
  data() {
    return {};
  },
  components: {
    Header
  },
  mounted: function() {}
};
</script>

<style scoped></style>
