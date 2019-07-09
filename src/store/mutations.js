export default {
  /**
   * add a new pet to store
   * @param  {object} state           state object
   * @param  {string} payload.species species of the pet
   * @param  {object} payload.pet     the pet itself
   * @return {[type]}                 [description]
   */
  appendPet: (state, { species, pet }) => {
    state[species] = [...state[species], pet]
    state.pets = [...state.pets, pet]
  },

  deletePet: (state, { species, id }) => {
    state[species] = state[species].filter((pet, index, arr) => index != id )
  },

  updatePets: state => {
    state.pets = [...state.cats, ...state.dogs]
  }
}
