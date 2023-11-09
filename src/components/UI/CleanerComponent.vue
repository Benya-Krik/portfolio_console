<template>
    <section class="clear">
      <nick-name @typingEnd="clearConsole" :initialValue="initialLogoValue" />
    </section>
  </template>

  <script>
import NickName from '@/components/UI/NickName.vue';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';


export default {
  name: "CleanerComponent",
  components: {
    NickName,
  },
  data() {
    return {
      initialLogoValue: {
        text: '~$ clear',
        content:'',
        speed: 30,
        caretPosition: 0
      },
    }
  },
  computed: {
    ...mapGetters(['GET_LOADED_CONTENT', 'GET_SHOW_CLEANER'])
  },
  methods: {
    ...mapMutations(['SET_LOADED_CONTENT', 'SET_SHOW_CLEANER']),
    clearConsole() {
        this.SET_SHOW_CLEANER(true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .clear{
    padding: 20px 0;
  }
</style>