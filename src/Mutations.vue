<template>
  <div>
    <button @click="handle">Button</button>
  </div>
</template>

<script>
  export default {
    name: 'Mutations',

    data () {
      return {
        val: 'val'
      }
    },

    methods: {
      handle () {
        this.$store.commit('MUTATION', { val: this.val })
      }
    }
  }
</script>

<style scoped>
</style>
