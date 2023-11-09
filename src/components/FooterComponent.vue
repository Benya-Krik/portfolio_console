<template>
    <footer class="footer">
        <div class="header__wrapper container">
            <div class="footer__socials">
                <a class="footer__link" href=""> <inline-svg :id="'github'" :width="28" :height="28"/> </a>
                <a class="footer__link" href=""> <inline-svg :id="'linkedin'" :width="28" :height="28"/> </a>
                <a class="footer__link" href=""> <inline-svg :id="'telegram'" :width="28" :height="28"/> </a>
            </div>
        </div>
    </footer>
</template>

<script>
import InlineSvg from './modules/InlineSvg.vue'

export default {
    name: "FooterComponent",
    components: {
        InlineSvg,
    },
}
</script>

<style lang="scss" scoped>
    .footer {
        position: fixed;
        top: 12px;
        right: 0;
        &__socials {
            display: flex;
            flex-direction: column;
            gap: 8px;
            flex-shrink: 0;
        }
        &__link {
            opacity: .5;
            transition: all .2s;
        }
    }
</style>