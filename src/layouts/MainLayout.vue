<template>
    <div>
        
        <transition name="fade">
            <slot>Slot</slot>
            <slot name='H3'></slot>
        </transition>
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