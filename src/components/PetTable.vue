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
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array,
    amount: Number
  },
  data () {
    return {
      fields: ['name', 'breed', 'gender', 'age', 'color', 'weight', 'location', 'notes']
    }
  },
  methods: {
    toTitleCase (s) {
      return s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase();
    },
    isSingular (n) {
      return n <= 1 ? this.species.slice(0, -1) : this.species;
    }
  }
}
</script>
