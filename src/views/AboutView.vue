<template>
  <section class="about">
    <nick-name @typingEnd="showContent" :initialValue="initialLogoValue" />
    <div class="about__wrapper" v-if="GET_LOADED_CONTENT">
      <p class="about__item" > {{ aboutMe.intro }} </p>
      <p class="about__item" > {{ aboutMe.experience }} </p>
      <p class="about__item" > {{ aboutMe.goals }} </p>
      <p class="about__item" > {{ aboutMe.hobby }} </p>
      <p class="about__item" > {{ aboutMe.conclusion }} </p>

    </div>
    <cleaner-component v-if="GET_SHOW_CLEANER"/>
  </section>
</template>

<script>
import { STATIC_DATA } from '@/modules/staticData';
import NickName from '@/components/UI/NickName.vue';
import CleanerComponent from '../components/UI/CleanerComponent.vue'

import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';


export default {
  name: "AboutView",
  components: {
    NickName,
    CleanerComponent
  },
  data() {
    return {
      initialLogoValue: {
        text: '~$ cat about-me.txt',
        content:'',
        speed: 30,
        caretPosition: 0
      },
      aboutMe: STATIC_DATA.aboutMe
    }
  },
  mounted() {
    this.SET_SHOW_CLEANER(false);
    this.SET_LOADED_CONTENT(false)
  },
  computed: {
    ...mapGetters(['GET_SHOW_CLEANER', 'GET_LOADED_CONTENT'])
  },
  methods: {
    ...mapMutations(['SET_LOADED_CONTENT', 'SET_SHOW_CLEANER']),
    showContent(){
      this.SET_LOADED_CONTENT(true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styles/utility/vars';

.about{

  &__wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 12px;
  }
  &__item {
    font-family: $secondaryFont;
    color: #FFFFFF;
    font-size: 14px;
  }

  @media screen and (min-width: $tablet-min){
    margin-top: 20px;
  }
  @media screen and (min-width: $desktop) {
    &__wrapper {
      margin-top: 40px;
    }
    &__item {
      font-size: 20px;
    }
  }
}
</style>
