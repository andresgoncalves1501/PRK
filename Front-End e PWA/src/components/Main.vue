<template>
  <div class="index">
   <user v-if="auth=='loggedin'"></user>
    <b-row>
      <somos v-if="auth==''"></somos>
    </b-row>
    <registo v-if="auth==''"></registo>
    <equipa v-if="auth==''"></equipa>
    <tblUsers v-if="auth=='loggedin'"></tblUsers>
    <tblEstacionamentos v-if="auth=='loggedin'"></tblEstacionamentos>
    <fundo></fundo>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import EventBus from './EventBus'

import user from './User';
import somos from "./Somos";
import registo from "./Registo";
import tblUsers from "./TblUsers";
import tblEstacionamentos from "./tblEstacionamentos";
import equipa from "./Equipa";
import fundo from "./Footer";

EventBus.$on('logged-in', test => {
  console.log(test)
})

export default {
  components: {
    user,
    somos,
    registo,
    tblUsers,
    tblEstacionamentos,
    equipa,
    fundo
  },
  data () {
    return {
      auth: '',
      user: ''
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
    },
    onchange: function(){
      console.log("boas ")
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
};
//<script type="text/javascript" src="https://unpkg.com/default-passive-events"> 

</script>

<style lang="scss" scoped>
.index {
  background-color: #EFEDED;
}
</style>

