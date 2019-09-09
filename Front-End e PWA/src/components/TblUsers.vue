<template>
<b-row>
  <div class="form-group">
    <h4>Gestão de Utilizadores</h4>
    <div id="tblUtilizadores">
    </div>
    <div class="form-group">
      <label for="inputLive">Nome:</label>
      <b-form-input v-model="name" class="mr-sm-2" type="text" placeholder="Nome" disabled></b-form-input>
      <label for="inputLive">Email:</label>
      <b-form-input v-model="email" id="mail" class="mr-sm-2" type="email" placeholder="Email"></b-form-input>
      <b-button class="my-2 my-sm-0" type="submit" @click="editar()">Editar</b-button>
    </div>
  </div>
</b-row>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  data () {
    return{
    }
  },
  methods: {
    createTblUsers() {
       async function fetchAsync() {
        const renderTabela = document.getElementById("tblUtilizadores");
        let txt = "";
        const response = await fetch('https://parque-de-estacionamento-cdaves.c9users.io/utilizadores');
        const utilizadores = await response.json();
        
        //criação de uma tabela para demonstração dos resultados recebidos
        txt += "<table class='table table-bordered table-hover'style='border: 1px solid #333'>";
        txt += "<thead style='background-color:#333; color: white; text-align:center; font-family: 'Avenir', Helvetica, sans-serif;'>";
        txt += "<tr><th>Nome</th><th>Email</th><th>Ações</th></tr></thead><tbody style='background-color:white; color: black'>";
        //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
        for (const utilizador of utilizadores) {
         txt += "<tr><td>" + utilizador.name + "</td><td>"+ utilizador.email + 
         "</td><td><b-button class='my-2 my-sm-0' type='button' @click='removeUser(" + utilizador._id + ")'><i class='fas fa-trash-alt'></i></button></td></tr>"
        }
         txt += "</tbody></table>";
         /*txt += "<br>"
         txt += "<nav><ul class='pagination'><li class='page-item'><a class='page-link href='#'>Anterior</a></li>"
        for(var i = 1; i < (utilizadores.length); i++){
          txt += "<li class='page-item'><a class='page-link href='#'>" + i + "</a></li>"
        }
        txt += "<li class='page-item'><a class='page-link href='#'>Próximo</a></li></ul></nav>"*/
        //envia a tabela construida para a view e mostra no object com ID result
        renderTabela.innerHTML = txt;
      }
      //chama a função fetchAsync()
      fetchAsync().then(data => console.log("Fetching...")).catch(reason => console.log(reason.message));
    },
    removeUser(id) {
      console.log("chama-me por favor")
      fetch("https://parque-de-estacionamento-cdaves.c9users.io/utilizadores/" + id, {
        method: "delete" // opcional
      })
      .then(function(response) {
      response
          .text() // devolve uma Promise
          .then(function(result) {
            alert("deleted with success");
            createTblUsers()
          });
      })
      .catch(function(err) {
        console.error(err);
      });
    }
  },
  mounted () {
    this.createTblUsers();
  }
}
</script>

<style lang="scss" scoped>
.table{
  background-color:black;
}
.form-group{
  margin-left:auto;
  margin-right:auto;
}
#mail{
  margin-bottom:15px;
}
h4{
  text-align:center;
  margin-top:50px;
  margin-bottom:15px;
  color:black;
  font-family: "Avenir", Helvetica, sans-serif;
}
.form-control{
  border: 1.5px solid #333;
  font-family: "Avenir", Helvetica, sans-serif;
  font-size: 16px;
  color: black;
  width: 100%;
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