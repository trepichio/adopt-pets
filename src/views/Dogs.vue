<template>
  <PetTable
    species="dogs"
    :pets="dogs"
    :amount="getAllDogs"
  />
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {

  name: 'Dogs',
  components: {
    PetTable
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
