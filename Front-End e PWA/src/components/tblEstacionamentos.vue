<template>
<b-row>  
  <div class="form-ingroup">
    <h4>Gestão de Estacionamentos</h4>
    <div id="tblEstacionamentos">
    </div>
    <div class="form-group">
      <label for="inputLive">Nome:</label>
      <b-form-input v-model="name" class="mr-sm-2" type="text" placeholder="Nome"></b-form-input>
      <label for="inputLive">Local:</label>
      <b-form-input v-model="local" class="mr-sm-2" type="text" placeholder="Local"></b-form-input>
      <label for="inputLive">Limite:</label>
      <b-form-input v-model="limit" class="mr-sm-2" type="text" placeholder="Limite"></b-form-input>
      <label for="inputLive">Arduino:</label>
      <b-form-input v-model="arduino" id="arduino" class="mr-sm-2" type="text" placeholder="Arduino"></b-form-input>
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
    return{}
  },
  methods: {
    createTblEstacionamentos() {
        console.log('teste')
        async function fetchAsync() {
        const renderTabela = document.getElementById("tblEstacionamentos");
        let txt = "";
        const response = await fetch('https://parque-de-estacionamento-cdaves.c9users.io/estacionamento');
        const estacionamentos = await response.json();
        
        //criação de uma tabela para demonstração dos resultados recebidos
        txt += "<table class='table table-bordered table-hover'style='border: 1px solid #333'>";
        txt += "<thead style='background-color:#333; color: white; text-align:center; font-family: 'Avenir', Helvetica, sans-serif;'>";
        txt += "<tr><th>Nome</th><th>Local</th><th>Limite</th><th>Arduino</th><th>Ações</th></tr></thead><tbody style='background-color:white; color: black; font-family: 'Avenir', Helvetica, sans-serif'>";
        //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
        for (const estacionamento of estacionamentos) {
         txt += "<tr><td>" + estacionamento.name + "</td><td>"+ estacionamento.local + "</td><td>"+ estacionamento.limit + "</td><td>"+ estacionamento.arduino + "</td><td><a id='" + estacionamento._id + "' class='edit'><img src='@/assets/upload.png'></a><a id='" + estacionamento._id + "' class='remove'><img src='@/assets/garbage.png'></a></td></tr>"
        }
         txt += "</tbody></table>";
        //envia a tabela construida para a view e mostra no object com ID result
        renderTabela.innerHTML = txt;
      }
      //chama a função fetchAsync()
      fetchAsync().then(data => console.log("Fetching...")).catch(reason => console.log(reason.message));
      }
  },
  mounted () {
    this.createTblEstacionamentos();
  }
}
</script>

<style lang="scss" scoped>
#arduino{
  margin-bottom:15px;
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
.form-ingroup{
  margin-left:auto;
  margin-right:auto;
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
h4{
  text-align:center;
  margin-top:50px;
  color:black;
  margin-bottom:15px;
  font-family: "Avenir", Helvetica, sans-serif;
}
</style>