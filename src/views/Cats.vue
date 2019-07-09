<template>
  <PetTable
    species="cats"
    :pets="cats"
    :amount="getAllCats"
  />
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {

  name: 'Cats',
  components: {
    PetTable
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
