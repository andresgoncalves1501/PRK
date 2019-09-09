<template>
    <b-row>
    <div id="pop_sel">
    </div>
      <b-row id="lugs">
        <b-col>
          <b-card title="Disponiveis">
            <div id="disps">
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Ocupados">
            <div id="ocups">
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-row>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    onchange: function(){
      console.log("boas")
    },
    getParques(){
       async function fetchAsync() {
        const renderSelect = document.getElementById("pop_sel");
        let txt = "";
        const response = await fetch('https://parque-de-estacionamento-cdaves.c9users.io/estacionamento');
        const estacionamentos = await response.json();
        //criação de uma tabela para demonstração dos resultados recebidos
        txt += "<select @change='onchange()' v-model='selected' style='border: border: 1.5px solid #333; font-family: 'Avenir', Helvetica, sans-serif; font-size: 16px; color: black;'>"
        //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
        for (const estacionamento of estacionamentos) {
          txt += "<option v-for='option in options' v-bind:value='" + estacionamento.arduino + "'>" + estacionamento.name + "</option>";
        }

        txt += "</select>";
        //envia a tabela construida para a view e mostra no object com ID result
        renderSelect.innerHTML = txt;
      }
      //chama a função fetchAsync()
      fetchAsync().then(data => console.log("Fetching...")).catch(reason => console.log(reason.message));
    },
    getValores(){
      setInterval(function(){ 
       async function fetchAsync() {
        
        const renderDisps = document.getElementById("disps");
        const renderOcups = document.getElementById("ocups");
        let txt = "";
        let txt1 = "";
        const response = await fetch('https://parque-de-estacionamento-cdaves.c9users.io/parques/3.234.243.234.123');
        const arduinos = await response.json();
        console.log(arduinos)
        txt += "<h1>" + arduinos.disponiveis + "</h1>";
        txt1 += "<h1>" + arduinos.ocupados + "</h1>";
        renderDisps.innerHTML = txt;
        renderOcups.innerHTML = txt1;
        
       }
       fetchAsync().then(data => console.log("Fetching...")).catch(reason => console.log(reason.message));
     }, 1000);
    }
  },
  mounted () {
    this.getParques();
    this.getValores();
  }

  //falta route bro

  /*data() {
    return {
      post: null,
      error: null
    }
  },
  watch: {
    $route: "fetchData"
  },
  // Fetches posts when the component is created.
  created() {
    axios
      .get('https://parque-de-estacionamento-cdaves.c9users.io/utilizadores')

      .then(response => {
        // JSON responses are automatically parsed.
        if (response.data > 0) {
          let tempo = 0;

          this.post = response.data;
          tempo = response.data * 0.6;
          this.tempo = Math.round(tempo);

          setTimeout(function() {
            window.location.reload(1);
            
            var timeleft = 10;
            var downloadTimer = setInterval(function() {
             this.countdown = 10 - --timeleft;
              if (timeleft <= 0) clearInterval(downloadTimer);
            }, 1000);
          }, 10000);
        }

        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  })*/


//lixo do vue para consultar mais tarde 
/* 

<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.name">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
*/ 
};
//<script type="text/javascript" src="https://unpkg.com/default-passive-events"> 
</script>

<style lang="scss" scoped>
// @font-face {
//   font-family: 'digital-7';
//   src: font-url('@/assets/digital-7.ttf') format('truetype');
//   font-weight: normal;
//   font-style: normal;
// }
h1{
  font-family: Impact;
}
.card{
  font-family: sans-serif;
  margin-top:75px;
  margin-left:auto;
  margin-right:auto;
  padding: 50px;
  background-color: black;
  color: white;
  border: 2px solid #ad9d34;
  text-align: center;
}
#pop_sel{
  padding-top:30px;
  padding-right:15px;
  padding-left:100px;
}
#lugs{
  padding-top:30px;
}
</style>