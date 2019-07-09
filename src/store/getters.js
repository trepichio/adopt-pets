export default {
  animalsAmount: (state, getters) => {
    return getters.getAllCats + getters.getAllDogs
  },
  getAllCats: (state) => {
    return state.pets.filter(pet => pet.species === 'cats').length
  },
  getAllDogs: (state) => {
    return state.pets.filter(pet => pet.species === 'dogs').length
  }
}
