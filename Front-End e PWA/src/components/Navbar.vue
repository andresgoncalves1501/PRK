<template>
<b-navbar toggleable="md" class="navigation">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">
    <img src="@/assets/logoMin.png">
  </b-navbar-brand>
  <b-navbar-item v-if="auth==''">Bem-vindo ao Prk!</b-navbar-item>
  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
        <b-nav-form v-if="auth==''" class="form-signin">
          <b-form-input v-model="email" class="mr-sm-2" type="email" placeholder="Email"></b-form-input>
          <b-form-input v-model="password" class="mr-sm-2" type="password" placeholder="Password"></b-form-input>
          <b-button class="my-2 my-sm-0" type="submit" @click="login()">Entrar</b-button>
        </b-nav-form>
        <b-nav-item href="#">
        <div id="log_out">
          <b-button v-if="auth=='loggedin'" class="my-2 my-sm-0" @click="logout">Sair</b-button>
          </div>
        </b-nav-item>
       
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from 'axios';

import EventBus from './EventBus';
import router from '../router';

EventBus.$on('logged-in', test => {
  console.log(test)
})

export default {
 data () {
    return {
      auth:'',
      email: '',
      password: ''
    }
  },
  
  methods: {
    login () {
      axios.post('https://parque-de-estacionamento-cdaves.c9users.io/login', {
        "email": this.email,
        "password": this.password
      }).then(response => {
        localStorage.setItem('usertoken', response.data)
        this.email = ''
        this.password = ''
        this.emitMethod()
        router.push({ name: 'Profile' })
      }).catch(err => {
        console.log(err)
        alert("Username ou Pasword incorretos")
      })
    },
    emitMethod () {
      if(this.email == "andresg@gmail.com" && this.password == "123456789"){
        EventBus.$emit('logged-in', 'AdminLoggedin')
      } else {
        EventBus.$emit('logged-in', 'loggedin')
      }
    },
    //////   Log out  ///////
    logout: function (event) {
      var txt;
     
      // `this` inside methods points to the Vue instance
       var r=confirm("Deseja Efetuar o log out ?")
      // `event` is the native DOM event
      if(r==true ){
     if (event) {
        // Clear all items
localStorage.clear();
        EventBus.$emit('logged-out','')

      }
      }
      else{
        alert('Log Out cancelado')
      }
 
    }
   
  
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })

      EventBus.$off('logged-out', status => {
      this.auth = status
    })
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  overflow: hidden;
  top: 0;
  width: 100%;
  background-color: #333;
  color:#ad9d34;
}
.navbar-brand {
  margin-left: 25px;
}
.form-control{
  border: 1.5px solid rgb(38, 38, 38);
  font-family: "Avenir", Helvetica, sans-serif;
  font-size: 16px;
  margin: -5px;
  color: black;
}
.form-control:focus{
  border: 1.5px solid #ad9d34;
}
.btn {
  background-color: rgb(38, 38, 38);
  color: white;
  border:none;
}
.btn:hover{
  background-color:#ad9d34;
  color: white;
}
</style>
