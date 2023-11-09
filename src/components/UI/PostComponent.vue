<template>
    <section class="post">
      <nick-name @typingEnd="showResponse" :initialValue="initialLogoValue" />
      <p class="post__response" v-if="isShowResponse"><span class="post__prefix">HTTP/1.1</span> 200 OK</p>
    </section>
  </template>

  <script>
import NickName from '@/components/UI/NickName.vue';

export default {
  name: "PostComponent",
  components: {
    NickName,
  },
  data() {
    return {
      initialLogoValue: {
        text: '~$ curl -d "param1=value1&param2=value2" -X POST http://benyakrik.com/contacts',
        content:'',
        speed: 30,
        caretPosition: 0
      },
      isShowResponse: false
    }
  },
  computed: {
  },
  methods: {
    showResponse() {
        this.isShowResponse = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styles/utility/vars';

.post{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__prefix {
      color: #ff97a0;
  }
  &__response {
      color: #00FF00;
      font-size: 14px;

  }
}

@media screen and (min-width: $desktop) {
  .post {
    &__response {
      font-size: 20px;
    }
  }
}
</style>