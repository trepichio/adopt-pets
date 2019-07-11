export default {
  animalsAmount: (state, getters) => {
    return getters.getAllCats + getters.getAllDogs
  },
  getAllCats: (state) => {
    return state['cats'].length
  },
  getAllDogs: (state) => {
    return state['dogs'].length
  }
}
