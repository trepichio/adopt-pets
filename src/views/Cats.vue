<template>
  <div>
    <h1>Cats for adoption</h1>
    <b-table striped hover :items="cats">
      <template slot="name" slot-scope="data">
         <!-- `data.value` is the value after formatted by the Formatter -->
         <router-link :to="`/pets/cats/${data.index}`">
           {{ data.value }}
         </router-link>
       </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'Cats',

  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>

<style scoped>
</style>
