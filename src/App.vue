<template>
  <svg-sprite />
  <header-component />
  <main class="container">
    <router-view v-if="GET_LOADED_HEADER" />
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SvgSprite from './components/modules/SvgSprite.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SvgSprite
  },
  computed: {
    ...mapGetters(['GET_LOADED_HEADER'])
  }
}
</script>

<style lang="scss">
@import './assets/styles/utility/reset.scss';
@import './assets/styles/common.scss';
</style>
