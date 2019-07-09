<template>
  <div>
    <h1>Dogs for adoption</h1>
    <h6>We have {{ getAllDogs }} dogs waiting to meet you!</h6>
    <b-table striped hover :items="dogs" :fields="fields">
      <template slot="name" slot-scope="data">
         <!-- `data.value` is the value after formatted by the Formatter -->
         <router-link :to="`/pets/dogs/${data.index}`">
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

  name: 'Dogs',

  data () {
    return {
      fields: ['name', 'breed', 'gender', 'age', 'color', 'weight', 'location', 'notes']
    }
  },
  computed: {
    ...mapState ([
      'dogs',
    ]),
    ...mapGetters ([
      'getAllDogs'
    ])
  }
}
</script>

<style scoped>
</style>
