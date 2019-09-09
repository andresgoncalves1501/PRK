<template>
  <b-row>
    <b-col>
      <div class="form-group">
        <h4>Ainda não tens conta?</h4>
        <h5>Cria uma aqui!</h5>
        <label for="inputLive">Username:</label>
        <b-form-input v-model="name" class="mr-sm-2" type="text" placeholder="Username"></b-form-input>
        <label for="inputLive">Email:</label>
        <b-form-input v-model="email" class="mr-sm-2" type="email" placeholder="Email"></b-form-input>
        <label for="inputLive">Password:</label>
        <b-form-input v-model="password" class="mr-sm-2" type="password" placeholder="Password"></b-form-input>
        <small id="pwHelp" class="form-text text-muted">A password deverá conter entre 8 a 11 caracters!</small>
        <b-button class="my-2 my-sm-0" type="submit" @click="registo()">Registar</b-button>
      </div>
    </b-col>
    <b-col>
      <img src="@/assets/lol.png">
    </b-col>
  </b-row>
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
      name:'',
      email: '',
      password: ''
    }
  },
  methods: {
    registo () {
      axios.post('https://parque-de-estacionamento-cdaves.c9users.io/users', {
        "name":this.name,
        "email": this.email,
        "password": this.password
      }).then(response => {
        localStorage.setItem('usertoken', response.data)
        this.name = ''
        this.email = ''
        this.password = ''
        this.emitMethod()
        router.push({ name: 'Profile' })
        console.log()
      }).catch(err => {
        console.log(err)
        alert("Cumpra os requisitos obrigatórios!")
      })
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    },
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
};
</script>

<style lang="scss" scoped>
#pwHelp{
    margin-bottom:10px;
}
.form-group{
  margin-top:50px;
  margin-left:50px;
  margin-right:auto;
  float: none;
  color:black;
}
.form-control{
  border: 1.5px solid #333;
  font-family: "Avenir", Helvetica, sans-serif;
  font-size: 16px;
  color: black;
  width: 75%;
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
img{
  display: block;
    margin-top: 75px;
    margin-bottom: auto;
  width:450px;
  height:300px;
}
</style>