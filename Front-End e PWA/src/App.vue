<template>
  <div id="app">
    <navbar></navbar>
    <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <index></index>
        </div>
        <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
import index from "./components/Main";

export default {
  components: {
    navbar,
    index
  }
};
</script>

<style>
#app{
  background-image: url("./assets/bg.png");
  background-size: 900px 450px;
  background-repeat: repeat;
  background-attachment: fixed;
}
</style>
