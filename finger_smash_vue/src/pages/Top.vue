<template>
  <div id="top" class="wrapper">
    <Header />
    <div class="kv">
        <div class="kv_image">
          <div class="main_logo"><img src="./../assets/img/top/logo.png" alt="" /></div>
          <div class="links_block none">
            <div class="links">
              <router-link to="/sign_in">
                <div class="sign_in_btn button">
                  <p>ログイン</p>
                </div>
              </router-link>
              <router-link to="/sign_up">
                <div class="sign_up_btn button">
                  <p>新規登録</p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="start_block none">
            <div class="start">
              <a href="./room_list.html">
                <div class="sign_in_btn button">
                  <p>はじめる</p>
                </div>
              </a>
            </div>
          </div>
        </div>
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
    return {
      // msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Header
  },
  mounted:function(){
    var userEmail = sessionStorage.getItem("user");
    if (userEmail) {
      $(".start_block").show();
      this.login = true;
    } else {
      $(".links_block").show();
    }
    this.$axios
      .get(url)
      .then((response) => {
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
