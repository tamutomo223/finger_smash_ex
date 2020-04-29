<template>
  <div id="sign_in" class="wrapper">
    <Header />
    <div class="title_block tac navy bold"><h2>ログイン</h2></div>
      <div class="form_block navy">
        <div class="input">
          <span class="bold">メールアドレス：</span
          ><input type="email" v-model="email"/>
        </div>
        <div class="input">
          <span class="bold">パスワード：</span
          ><input type="password" v-model="password"/>
        </div>
        <div class="input">
          <button type="button" class="form_btn bg_navy bold" @click="submit">ログイン</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import "./../assets/css/top.css";

export default {
  name: "sign_in",
  data() {
    return {
      email:"",
      password:"" 
    };
  },
  components: {
    Header
  },
  methods:{
    submit:function(){
      this.$axios
      .post("http://localhost:3000/auth/sign_in",{email: this.email,password: this.password})
      .then((response) => {
            console.log(response.status)
              if (response.status == 200){
                sendData();
                this.$router.push({ path: '/' })
              }
            })
      .catch(
            (error) => {
              console.log(error)
            }
          )
    },
    sendData:function(){
      this.$emit("send-data",this.email)
    }
  }
};
</script>

<style scoped></style>
