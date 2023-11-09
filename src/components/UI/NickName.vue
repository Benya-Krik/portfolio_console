<template>
    <h1 class="logo">Benya@Krik:<span class="logo__command">{{logoContent}}</span></h1>
</template>

<script>
import typeWriter from '@/modules/typeWriter'

export default {
    name: "NickName",
    props: {
        initialValue: {},
    },
    data() {
        return {
            logoContent: '',
            isFinished: false,
        }
    },
    mounted() {
        typeWriter(this.initialValue, this.updateContent, this.callback);
    },
    methods: {
        callback(result){
            setTimeout(()=> this.showHeader(result), 300)
        },
        showHeader(result){
            this.$emit('typingEnd', result)
        },
        updateContent(value){
            this.logoContent = value;
            
        },
    },
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styles/utility/vars';

.logo {
    color: $accent-font-color;
    font-size: 16px;
    &__command {
        color: $main-font-color;
    }
    @media screen and (min-width: $desktop) {
        font-size: 20px;
    }
    
}
</style>