<template>
  <div>
    <h1>Cats for adoption</h1>
    <h6>We have {{ getAllCats }} cats waiting to meet you!</h6>
    <b-table striped hover :items="cats" :fields="fields">
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
import { mapGetters } from 'vuex'

export default {

  name: 'Cats',

  data () {
    return {
      fields: ['name', 'breed', 'gender', 'age', 'color', 'weight', 'location', 'notes']
    }
  },
  computed: {
    ...mapState([
      'cats'
    ]),
    ...mapGetters([
      'getAllCats'
    ])
  }
}
</script>

<style scoped>
</style>
