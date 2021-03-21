<template>
  <div>
  <main-layout> 
    
    <div class="card__body">
      <div class='row'>
        <h1 class="card__title">Advert</h1>
      </div>
    <div class="cards">  
    <Card 
      v-for="card in cards"
      :key="card.id"
      :title="card.title"
    />
    </div>
  </div>
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
        {id: 6, title: "1blablalala"},
        {id: 7, title: "2blablalala"},
        {id: 8, title: "3blablalala"},
        {id: 9, title: "4blablalala"},
        {id: 10, title: "5blablalala"},
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
  .card__body {
    display: flex;
    flex-direction: column;
  }
  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>