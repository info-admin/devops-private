<template>
  <div id="app">
    <MainVue />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import MainVue from './components/MainVue.vue'
//ok here first test
export default {
  name: 'App',
  components: {
    MainVue
  }
}
</script>

<style>
  @import './assets/styles/global.css';
</style>
