<template>
<b-row>
    <b-col>
        <b-card class="mb-2">
            <h5>Responsável Arduinos e PWA</h5><br>
            <img src="@/assets/pedro.png">
            <h6>Pedro Miguel</h6>
        </b-card>
        
    </b-col>
     <b-col>
        <b-card class="mb-2">
            <h5>Responsável BackEnd</h5><br><br>
            <img src="@/assets/joao.png">
            <h6>João Martins</h6>
            
        </b-card>
    </b-col>
     <b-col>
        <b-card class="mb-2">
            <h5>Responsável FrontEnd e PWA</h5><br>
            <img src="@/assets/andre.png">
            <h6>André Gonçalves</h6>
        </b-card>
    </b-col>
     <b-col>
        <b-card class="mb-2">
            <h5>Responsável Testes</h5><br><br>
            <img src="@/assets/alex.png">
            <h6>Alexandre Silva</h6>
            
        </b-card>
    </b-col>
</b-row>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {};
</script>

<style lang="scss" scoped>
.row{
    padding-top: 50px;
}
h6{
    padding-top:10px;
}
.card{
    text-align:center;
    margin:10px;
    background-color: #2d2c2c;
    font-family: "Avenir", Helvetica, sans-serif;
    font-size: 16px;
    color:white;
}
img{
    width:60%;
    height:40%;
}
</style>