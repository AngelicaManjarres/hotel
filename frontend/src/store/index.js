import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

export default createStore({
  state: {
<<<<<<< HEAD
    user:{
      user:"Aleja",
      role:"admin",
    }
=======
    user: null,
    bookings: [
      {id: 1, content: 'Juan Lopez', start: '2023-01-03', end: '2023-01-05', group:0, style: 'background: pink'},
      {id: 2, content: 'Ana Torres', start: '2023-01-04', end: '2023-01-09', group:1, style: 'background: cyan'},
      {id: 3, content: 'Mark Torres', start: '2023-01-05', end: '2023-01-08', group:1, style: 'background: #75B2EA'},
      {id: 4, content: 'Carlos Miguel', start: '2023-01-14', end: '2023-01-17', group:2}
      ],
    groups: [
      {id: 0, content: 'Hab 101', style: 'border-bottom: 3px solid #0D22D7; font-size: 13px'},
      {id: 1, content: 'Hab 102', style: 'border-bottom: 3px solid #0D22D7; font-size: 13px'},
      {id: 2, content: 'Hab 103', style: 'border-bottom: 3px solid #0D22D7; font-size: 13px'},
      {id: 3, content: 'Hab 104', style: 'border-bottom: 3px solid #0D22D7; font-size: 13px'},
      {id: 4, content: 'Hab 105', style: 'border-bottom: 3px solid #0D22D7; font-size: 13px'},
      {id: 5, content: 'Hab 106', style: 'border-bottom: 3px solid #0D22D7; font-size: 13px'}
  ]
>>>>>>> 06f93201a24959be6c32411ddbd2d8abc4edef7a
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
