<template>
  <div id="app">
    <router-view v-transition/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
};
</script>

<style>
  body,html{
    width: 100%;
    height: auto;
    margin:0;
    padding:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: honeydew;
}
</style>
