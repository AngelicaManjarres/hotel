import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log("User has logged in:", state.user)
    }
  },
  actions: {
    async onLogin(context, { username, password }) {
      const res = await axios.post('http://localhost:4200/', { username, password })
      if(res.data) {
        context.commit('setUser', res.data)
        router.push('/booking')
        
      } else {
        console.log("Usuario no encontrado")
      }

    }
  },
  modules: {
  }
})
