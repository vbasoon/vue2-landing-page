<template>
  <div>
  <h1>Advert</h1>
  <main-layout>
    <Card/>
  </main-layout>
</div> 
</template>

<script>
import MainLayout from '@/layouts/MainLayout'  
import Card from  '@/components/Card/Card.vue'

export default {
  name: "Advetrising",
  data() {
    return {
      cards: [
        {id: 1, title: "1blablalala"},
        {id: 2, title: "2blablalala"},
        {id: 3, title: "3blablalala"},
        {id: 4, title: "4blablalala"},
        {id: 5, title: "5blablalala"},
        
      ]
    }
  },
  components: {
  MainLayout,
  Card
  }
}
</script>

<style>

</style>