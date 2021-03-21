<template>
<div>
 <main-layout>
   <h1>Home Page</h1>
    <h2>Main Slot</h2>
    <h3 slot='H3'>H3</h3>
    </main-layout> 
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
export default {
components: {
  MainLayout
}
}
</script>

<style>

</style>