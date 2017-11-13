<template>
  <div>
    <div class="state-1">
      {{ $store.state.value_1 }}
    </div>

    <div class="state-2">
      {{ value_2 }}
    </div>

    <div class="state-3">
      {{ value_3 }}
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'State',

    computed: {
      value_2 () {
        return this.$store.state.value_2
      },

      ...mapState({
        value_3: state => state.value_3
      })
    }
  }
</script>

<style scoped>
</style>
