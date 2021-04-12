import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: '',

  },
  getters: {
    counterSquared(state) { // we want to grab something from the state and modify it, getters return something
      return state.counter * state.counter
    }
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter+= randomNumber
    },
    decreaseCounter(state, randomNumber) {
      state.counter-= randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    async increaseCounter({ commit }) { // in order to commit a mutation from an action, we need to pass an object into the action with the commit method, this is an example
      const res = await axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      commit('increaseCounter', res.data) // commit the name of the mutation and the payload to be passed to the mutation

    },
    async decreaseCounter({ commit }) { 
      const res = await axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      commit('decreaseCounter', res.data) 

    },
    setColorCode({ commit }, newValue){
      commit('setColorCode', newValue)
    }
  },
  modules: {
  }
})
