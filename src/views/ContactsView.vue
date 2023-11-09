<template>
  <section class="contacts">
    <nick-name @typingEnd="showContent" :initialValue="initialLogoValue" />
    <form-component class="contacts__form" v-if="GET_LOADED_CONTENT" />
    <error-component v-if="GET_ERRORS.length > 0" :errors="GET_ERRORS"/>
    <post-component v-if="GET_SHOW_POSTER" />
    <cleaner-component v-if="GET_SHOW_CLEANER"/>
  </section>
</template>

<script>
import NickName from '@/components/UI/NickName.vue';
import CleanerComponent from '../components/UI/CleanerComponent.vue'
import FormComponent from '@/components/blocks/FormComponent.vue';
import ErrorComponent from '@/components/UI/ErrorComponent.vue'
import PostComponent from '@/components/UI/PostComponent.vue';

import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';


export default {
  name: "ContactsView",
  components: {
    NickName,
    CleanerComponent,
    FormComponent,
    ErrorComponent,
    PostComponent
  },
  data() {
    return {
      initialLogoValue: {
        text: '~$ skp-md-viewer contacts.md',
        content:'',
        speed: 30,
        caretPosition: 0
      },
    }
  },
  mounted() {
    this.SET_SHOW_CLEANER(false);
    this.SET_LOADED_CONTENT(false)
  },
  unmounted() {
    this.SET_ERRORS([])
    this.SET_SHOW_POSTER(false)
  },
  computed: {
    ...mapGetters(['GET_LOADED_CONTENT', 'GET_SHOW_CLEANER', 'GET_SHOW_POSTER', 'GET_ERRORS'])
  },
  methods: {
    ...mapMutations(['SET_LOADED_CONTENT', 'SET_SHOW_CLEANER', 'SET_SHOW_POSTER', 'SET_ERRORS']),
    showContent(){
      this.SET_LOADED_CONTENT(true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styles/utility/vars';
.contacts{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
@media screen and (min-width: $tablet-min){
  .contacts {
      margin-top: 20px;
  }
}
</style>
