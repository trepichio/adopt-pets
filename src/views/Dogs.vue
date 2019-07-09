<template>
  <div>
    <h1>Dogs for adoption</h1>
    <b-table striped hover :items="dogs">
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
import dogs from '@/data/dogs'

export default {

  name: 'Dogs',

  data () {
    return {
      dogs
    }
  }
}
</script>

<style scoped>
</style>
