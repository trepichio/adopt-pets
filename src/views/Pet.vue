<template>
  <div>
    <h1>{{ pet.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ pet.age }}</p>
    <p>Breed: {{ pet.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'Pet',

  data () {
    return {
      pet: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted() {
      const animal = this[this.$route.params.species][this.$route.params.id]
      this.pet = animal
  }
}
</script>

<style scoped>
</style>
