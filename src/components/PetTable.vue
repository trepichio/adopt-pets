<template>
  <div>
    <h1>{{ toTitleCase(species) }} for adoption</h1>
    <h6>We have {{ amount }} {{ isSingular(amount) }} waiting to meet you!</h6>
    <b-table striped hover :items="pets" :fields="fields">
      <template slot="name" slot-scope="data">
         <!-- `data.value` is the value after formatted by the Formatter -->
         <router-link :to="`/pets/${species}/${data.index}`">
           {{ data.value }}
         </router-link>
       </template>
       <template slot="adopt" slot-scope="data">
        <b-button size="sm" @click.prevent="adoptPet(`${species}`,`${data.index}`)" class="mr-2">
          This one!
        </b-button>
       </template>
    </b-table>
    <div v-if="amount <= 0">
     <h2>We're very happy to say all our pets have a home now!</h2>
     <h1>🐕<strong>BUT, PLEASE</strong>🐈</h1>
     <h5>come back later because for sure there will be one specially happy to be adopted by YOU!</h5>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    species: String,
    pets: Array,
    amount: Number
  },
  data () {
    return {
      fields: ['name', 'breed', 'gender', 'age', 'color', 'weight', 'location', 'notes', 'adopt']
    }
  },
  methods: {
    toTitleCase (s) {
      return s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase();
    },
    isSingular (n) {
      return n <= 1 ? this.species.slice(0, -1) : this.species;
    },
    ...mapActions([
      'removePet'
    ]),
    adoptPet(species, id) {
      const payload = { species, id }
      this.removePet(payload)
    }
  }
}
</script>
