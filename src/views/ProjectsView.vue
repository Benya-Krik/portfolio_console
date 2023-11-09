<template>
  <section class="projects">
    <nick-name @typingEnd="showContent" :initialValue="initialLogoValue" />
    <div class="projects__wrapper" v-if="GET_LOADED_CONTENT">
      <card-component v-for="project in projects" :content="project">
        <div class="projects__item">
          <p class="projects__description">{{ project.description }}</p>
          <div class="projects__links">
            <a target="_blank" :href="`${project.github}`">
              <inline-svg class="projects__link" :id="'github'" :width="28" :height="28"/>
            </a>
            <a target="_blank" :href="`${project.deploy}`">
              <inline-svg class="projects__link" :id="'link'" :width="28" :height="28"/>
            </a>
          </div>
        </div>
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
import InlineSvg from '../components/modules/InlineSvg.vue'

import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';


export default {
  name: "ProjectsView",
  components: {
    NickName,
    CleanerComponent,
    CardComponent,
    InlineSvg
  },
  data() {
    return {
      initialLogoValue: {
        text: '~$ skp-md-viewer personal-projects.md',
        content:'',
        speed: 30,
        caretPosition: 0
      },
      projects: STATIC_DATA.projects
    }
  },
  mounted() {
    this.SET_SHOW_CLEANER(false);
    this.SET_LOADED_CONTENT(false)
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

.projects{

  &__wrapper {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    overflow-x: auto;
    padding: 12px;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__description {
      font-size: 14px;
      font-family: courier, monospace;
      color: $main-font-color;
  }
  &__link {
    opacity: .5;
    transition: .3s;
    &:hover{
      cursor: pointer;
      opacity: 1;
    }
  }
}

@media screen and (min-width: $tablet-min) {
  .projects {
    margin-top: 20px;
  }
}

@media screen and (min-width: $desktop) {
  .projects{
  
    &__wrapper {
      gap: 40px;
      padding: 0;
      overflow: inherit;
      margin-top: 30px;
    }
  }
}
</style>
