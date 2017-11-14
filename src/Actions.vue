<template>
  <div>
    <button @click="go" />
  </div>
</template>

<script>
  export default {
    name: 'Actions',

    data () {
      return {
        val: 1
      }
    },

    methods: {
      go () {
        this.$store.dispatch('someAction', { val: this.val })
      }
    },

    watch: {
      'val' (val, oldVal) {
        this.$store.dispatch('someAction', { val })
      }
    }
  }
</script>

<style scoped>
</style>
