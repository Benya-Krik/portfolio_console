<template>
  <section class="skills">
    <nick-name @typingEnd="showContent" :initialValue="initialLogoValue" />
    <div class="skills__wrapper" v-if="GET_LOADED_CONTENT">
      <card-component v-for="category in skills" :content="category">
        <ul class="skills__list">
          <li class="skills__item" :class="`skills__item--${category.color}`" v-for="item in category.list">{{ item }}</li>
        </ul>
      </card-component>
    </div>
    <cleaner-component v-if="GET_SHOW_CLEANER"/>
  </section>
</template>

<script>
import { STATIC_DATA } from '@/modules/staticData';

import NickName from '@/components/UI/NickName.vue';
import CleanerComponent from '../components/UI/CleanerComponent.vue'
import CardComponent from '../components/blocks/CardComponent.vue'

import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  name: "SkillsView",
  components: {
    NickName,
    CleanerComponent,
    CardComponent,
  },
  data() {
    return {
      initialLogoValue: {
        text: '~$ skp-md-viewer skills.md',
        content:'',
        speed: 30,
        caretPosition: 0
      },
      skills: STATIC_DATA.skills
    }
  },
  mounted() {
    this.SET_SHOW_CLEANER(false);
    this.SET_LOADED_CONTENT(false);
  },
  computed: {
    ...mapGetters(['GET_LOADED_CONTENT', 'GET_SHOW_CLEANER'])
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

.skills{

  &__wrapper {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    overflow-x: auto;
    padding: 12px;
  }
  &__list{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__item {
      font-size: 14px;
      font-family: courier, monospace;
      color: $main-font-color;

      &--blue {
        &:hover{
          color: lightblue;
        }
      }
      &--green {
        &:hover{
          color: #A3BE8C;
        }
      }
      &--orange {
        &:hover{
          color: #d08770;
        }
      }
  }
}

@media screen and (min-width: $tablet-min) {
  .skills{
    margin-top: 20px;
    &__wrapper {
      gap: 40px;
      padding: 0;
      overflow: inherit;
      margin-top: 30px;
    }
  }
}
</style>
