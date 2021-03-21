<template>
  <div class="card">
    <h1>{{title}}</h1>
    ...
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    'title': String
  }
  
}
</script>

<style>
.card {
  width: 200px;
  height: 300px;
  border: 2px solid black;
  margin-left: 10px;
}

</style>