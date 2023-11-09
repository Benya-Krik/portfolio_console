<template>
    <form 
        class="form" 
        autocomplete="off" 
        @submit.prevent="submitForm"
        novalidate
    >

        <label>
        <input 
            class="form__input"
            name="message"
            type="text"
            v-model="name"
            placeholder="*Name"
        >
        </label>

        <label> 
        <input
            class="form__input" 
            name="email"
            type="email"
            v-model="email"
            placeholder="*E-mail"
        >
        </label>

        <label> 
        <textarea
            class="form__area"
            v-model="question"
            cols="30" rows="10"
            name="question" 
            placeholder="*Your question"
        />
        </label>

        <button type="submit" class="form__button">Submit</button>
    </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { mapMutations } from 'vuex';


export default {
    name: "FormComponent",
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            name: '',
            email: '',
            question: '',
        }
    },
    validations () {
        return {
            name: { required },
            email: { required, email },
            question: { required }
        }
    },
    methods: {
        ...mapMutations(['SET_ERRORS', 'SET_SHOW_POSTER']),

        submitForm() {
            this.SET_ERRORS(this.v$.$silentErrors)
            this.SET_SHOW_POSTER(false)

            if(this.v$.$silentErrors.length === 0) {
                this.SET_SHOW_POSTER(true)
                this.resetForm() 
            }
            else {
                this.isError = true
            }
        },
        resetForm() {
            this.name = ''
            this.email = ''
            this.question = ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styles/utility/vars';

.form {
    margin-top: 20px;
    display: flex;
    max-width: 100%;
    flex-direction: column;
    gap: 16px;
    & label {
        position: relative;
        display: flex;
    }
    &__input {
        width: 100%;
        background-color: #343d46;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,10), 0 2px 4px 0 rgba(0,0,0,10);
        padding: 12px 36px;
        font-family: courier, monospace;
        color: $main-font-color;
        transition: .3s;
        max-width: 100%;
        &:focus{
            &::placeholder{
                color: transparent;
            }
        }
        &::placeholder {
            font-size: 14px;
            font-family: courier, monospace;
            color: $main-font-color;
            transition: .3s;
        }
        &:hover {
            box-shadow: 0 4px 6px 0 rgba(0,0,0,10), 0 4px 6px 0 rgba(0,0,0,10);
        }
    }
    &__area {
        resize: none;
        transition: .3s;
        background-color: #343d46;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,10), 0 2px 4px 0 rgba(0,0,0,10);
        padding: 12px 36px;
        font-family: courier, monospace;
        color: $main-font-color;
        box-sizing: border-box;
        outline: none;
        border: none;
        &:focus {
            outline: none;
            &::placeholder{
                color: transparent;
            }
        }
        &::placeholder {
            font-size: 14px;
            font-family: courier, monospace;
            color: $main-font-color;
            transition: .3s;
        }
        &:hover {
            box-shadow: 0 4px 6px 0 rgba(0,0,0,10), 0 4px 6px 0 rgba(0,0,0,10);
        }
    }
    &__button {
        padding: 12px 28px;
        text-align: center;
        font-size: 14px;
        font-family: courier, monospace;
        font-weight: bolder;
        outline: 1px solid $main-font-color;
        color: $secondary-font-color;
        background-color: #d08770;
        transition: .3s;
    }
}
@media screen and (min-width: $tablet-min){
    .form {
        margin-top: 40px;
    }
}
</style>