<template>
    <div class="errors">
        <h3 class="errors__title">
            ERROR: Failed to compile with {{errors.length}} error 
        </h3>

        <div v-for="(error, index) in errors" :key="index" class="errors__item">
            <p class="error__name">
                <span class="errors__prefix">ERROR</span>
                in /{{error.$property}}
            </p>
            <p class="errors__description">{{error.$message}}</p>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "ErrorComponent",
    props: {
        errors: []
    }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styles/utility/vars';

.errors {
    color: $main-font-color;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__title {
        color: $error-color;
        font-size: 14px;
    }
    &__item {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 14px;
    }
    &__prefix {
        padding: 2px 12px;
        background-color: $error-color;
        color: $main-font-color;
    }
}

@media screen and (min-width: $desktop) {
    .errors{
        margin-top: 40px;
        &__title {
            font-size: 20px;
        }
        &__item {
            font-size: 16px;
        }
    }
}
</style>