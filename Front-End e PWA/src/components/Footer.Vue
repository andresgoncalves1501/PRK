<template>
    <b-row>
        <div class="container form-inline">
            <h4>Contacto</h4>
        </div>
        <div class="container form-inline">
            <img src="@/assets/envelope.png"><p>E. geral@esmad.ipp.pt</p>
        </div>
        <div class="container form-inline">
            <img src="@/assets/phone.png"><p>T. +351 252 291 700</p>
        </div>
        <div class="container form-inline">
            <img src="@/assets/location.png"><p>Rua D. Sancho I, n.º 981 <br> 4480-876 Vila do Conde</p>
        </div>
    </b-row>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {};
</script>

<style lang="scss" scoped>
.form-inline{
  font-family: "Avenir", Helvetica, sans-serif;
  font-size: 16px;
  color: black;
  margin-bottom:15px;
}
.form-inline p{
    margin-left: 10px;
    margin-top:auto;
    margin-bottom:auto;
}
.form-inline h4{
    margin-top: 50px;
    text-align:center;
    margin-bottom: 30px;
}
</style>