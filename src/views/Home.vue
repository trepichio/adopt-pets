<template>
  <div class="home">
    <h1>Adopt a new Best friend</h1>
    <h3>We have {{ animalsAmount }} adorable pets for you to choose one!</h3>
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>
    <div>
       <b-form id="petForm" @submit.prevent="handleSubmit" v-if="showPetForm">
         <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
           <b-form-input
             id="input-1"
             v-model="formData.name"
             type="text"
             required
             placeholder="Enter name"
           ></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
           <b-form-input
             id="input-2"
             v-model="formData.age"
             type="number"
             required
             placeholder="Enter age"
           ></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-3" label="Species:" label-for="input-3">
           <b-form-select
             id="input-3"
             v-model="formData.species"
             :options="['cats','dogs']"
             required
           ></b-form-select>
         </b-form-group>

         <b-button type="submit" variant="primary">Submit</b-button>
         <b-button type="reset" variant="danger">Reset</b-button>
       </b-form>
     </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    };
  },
  computed: {
    ...mapGetters([
      'animalsAmount',
    ])
  },
  methods: {
    ...mapActions ([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age,
          species
        }
      }
      this.addPet(payload)

      // reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>

<style lang="css" scoped>
  #petForm {
    margin-top: 1rem;
  }

  [type="submit"] {
    margin-right: 1rem;
  }
</style>
