<template>
    <div>
        <router-link class="navlink" to="/">Home</router-link>
        <router-link class="navlink" to="/about">About</router-link>
        <slot>Slot</slot>
        <slot name='H3'></slot>
        <h1>I am footer</h1>
    </div>
</template>

<script>
export default {
    name: 'MainLayout',

}
</script>

<style scoped>
.navlink {
    margin-left: 10px;
    text-decoration: none;
    font-size: 20px;
}

.navlink:hover {
    
    text-decoration: underline;
    
}


</style>