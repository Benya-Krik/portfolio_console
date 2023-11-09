<template>
    <header class="header">
        <div class="header__wrapper container">
            <nick-name @typingEnd="showContent" :initialValue="initialLogoValue" />
            <nav v-if="GET_LOADED_LOGO" class="header__navigation">
                <router-link class="header__navigation-item" to="/">about-me.txt</router-link>
                <router-link class="header__navigation-item" to="/skills">skills.md</router-link>
                <router-link class="header__navigation-item" to="/projects">personal-projects.md</router-link>
                <router-link class="header__navigation-item" to="/contacts">contacts.md</router-link>
            </nav>
            <div class="header__socials">
                <a class="header__link" target="_blank" href="https://github.com/Benya-Krik"> <inline-svg :id="'github'" :width="28" :height="28"/> </a>
                <a class="header__link" target="_blank" href="https://www.linkedin.com/in/ilya-ovechkin-928095237"> <inline-svg :id="'linkedin'" :width="28" :height="28"/> </a>
                <a class="header__link" target="_blank" href="https://t.me/moartyler"> <inline-svg :id="'telegram'" :width="28" :height="28"/> </a>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import InlineSvg from './modules/InlineSvg.vue'
import NickName from './UI/NickName.vue'

export default {
    name: "HeaderComponent",
    components: {
        InlineSvg,
        NickName
    },
    data() {
        return {
            initialLogoValue: {
                text: '~$ ls',
                content:'',
                speed: 100,
                caretPosition: 0
            },
        }
    },
    computed: {
        ...mapGetters(['GET_LOADED_LOGO'])
    },
    methods: {
        ...mapMutations(['SET_LOADED_LOGO', 'SET_LOADED_HEADER']),
        showContent() {
            this.SET_LOADED_LOGO(true);
            setTimeout(()=> this.SET_LOADED_HEADER(true), 1000)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styles/utility/vars';

.header {
    padding: 20px 0;

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    &__navigation {
        display: flex;
        flex-direction: column;
        gap: 12px;
        &-item{
            color: $main-font-color;
            font-size: 14px;
            position: relative;
            transition: all .3s;
        }
    }
    &__socials {
        position: fixed;
        right: 12px;
        top: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__link {
        opacity: .5;
    }

    @media screen and (min-width: $tablet-min) {
        
        &__wrapper {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        &__navigation {
            flex-direction: row;
            gap: 30px;
        }
        &__socials {
            right: 12px;
            top:auto;
            bottom: 12px;
        }
    }
    @media screen and (min-width: $tablet-max) {
        &__socials {
            position: static;
            display: flex;
            flex-direction: row;
            gap: 12px;

        }
        &__link {
            display: flex;
            gap: 30px;
            opacity: .5;
            transition: all .2s;
            &:hover {
                opacity: 1;
            }
        }
    }
    @media screen and (min-width: $desktop) {
        padding: 20px 0;
        &__wrapper {
            justify-content: space-between;
            align-items: center;
        }
        &__socials {
            display: flex;
            gap: 12px;
        }
        &__navigation {
            flex-direction: row;
            gap: 60px;
            &-item {
                font-size: 20px;
                &:hover {
                    opacity: .5;
                }
            }
        }
        &__link {
            transition: all .2s;
            &:hover {
                opacity: 1;
            }
        }
    }

    
}
.router-link-active {
    &:before {
        content: '>';
        display: block;
        position: absolute;
        left: -6px;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    @media screen and (min-width: $desktop){
        &:before {
            left: -12px;
        }
    }
}
</style>