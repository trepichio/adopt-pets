export default {
  addPet: ({ commit }, payload) => {
    // commit method comes from 'context' and payload is 'pet'
    commit('appendPet', payload)
  }
}
