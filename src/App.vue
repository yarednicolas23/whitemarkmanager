<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import './assets/css/styles.css'
import 'material-design-icons/iconfont/material-icons.css'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
