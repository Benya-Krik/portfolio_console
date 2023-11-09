<template>
  <article class="card">
    <h4 class="card__title" :class="`card__title--${content.color}`">{{content.title}}</h4>
    <slot></slot>
  </article>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
      content: {
        type: Object,
        required: true
      },
    }
}
</script>

<style lang="scss" scoped>
.card{
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,10), 0 6px 20px 0 rgba(0,0,0,10);
    background-color: #343d46;
    gap: 16px;
    max-width: 360px;
    flex-shrink: 0;
    &__title {
        padding: 12px 28px;
        text-align: center;
        font-size: 14px;
        font-family: courier, monospace;
        font-weight: bolder;
        outline: 1px solid #fff;
        color: #000;

        &--blue {
          background-color: lightblue;
        }
        &--green {
          background-color: #A3BE8C;
        }
        &--orange {
          background-color: #d08770;
        }
    }
  }
  
</style>