<template>
    <div>
        <Header/>
        <transition name="fade">
            <slot>Slot</slot>
            <slot name='H3'></slot>
        </transition>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
export default {
    name: 'MainLayout',
    components: {
        Header,
        Footer,
    }

}
</script>

<style scoped>

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