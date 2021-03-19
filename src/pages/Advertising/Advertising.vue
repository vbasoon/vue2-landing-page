<template>
  <div>
  <h1>Advert</h1>
  <main-layout>
    <Card/>
  </main-layout>
</div> 
</template>

<script>
import Card from  '@/components/Card/Card.vue'
import MainLayout from '@/layouts/MainLayout'  
export default {
  components: {
  MainLayout,
  Card
}
}
</script>

<style>

</style>