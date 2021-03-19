<template>
  <div class="header">
      <div class="logo">Logo</div>
      <nav class="header-nav">
      <router-link class="navlink" to="/">Home</router-link>
      <router-link class="navlink" to="/about">About</router-link>
      <router-link class="navlink" to="/advert">Adveritising</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style >
.navlink {
    margin-left: 10px;
    text-decoration: none;
    font-size: 20px;
}

.navlink:hover {
    
    text-decoration: underline;
    
}
</style>