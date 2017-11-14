<template>
  <div>
    <div class="map-getters">
      {{ getter_1 }}
    </div>
    <div class="computed-getters">
      {{ getter_2 }}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Getters',

    computed: {
      ...mapGetters({
        getter_1: 'getter_1'
      }),
      getter_2 () {
        return this.$store.getters['getter_2']('value_2')
      }
    }
  }
</script>

<style scoped>
</style>
