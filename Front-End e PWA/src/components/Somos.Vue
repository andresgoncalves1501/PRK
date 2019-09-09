<template>
    <b-row>
        <b-col>
            <img src="@/assets/ESMAD.png">
        </b-col>
        <b-col>
            <div id="desc"> 
                <h4>Quem somos?</h4>
                <p>Para o âmbito da Unidade Curricular de Sistemas Distribuidos, da Licenciatura 
                de Tecnologias e Sistemas de Informação para Web na ESMAD, um grupo de alunos do 
                3ºano organizou-se para criar esta plataforma web.</p>
                <p>Nesta plataforma o utilizador poderá aceder ás informação de número de lugares,
                quer disponíveis ou ocupados, nos parques de estacionamento que aderiram ao Prk!</p>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {};
</script>

<style lang="scss" scoped>
#desc{
  margin-top: 100px;
  margin-left: auto;
  margin-right: 50px;
  font-family: "Avenir", Helvetica, sans-serif;
  font-size: 16px;
  color:black;
}
img{
  display: block;
  margin-top:50px;
  margin-left: auto;
  margin-right: auto;
  width:450px;
  height:300px;
}
</style>