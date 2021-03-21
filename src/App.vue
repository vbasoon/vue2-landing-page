<template>
  <div id="app">
    <div class="container">
    <transition name="fade">
    <router-view/>
    </transition>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

.container {
  max-width: 1160px;
  margin: 60px auto;
  padding: auto 20px;
  

} 

.fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
}

.fade-enter-active {
    transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>
