import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios'
import router from '@/router'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    listProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        url: '/login',
        method: 'post',
        data: {
          email,
          password
        }
      })
        .then(response => {
          const accessToken = response.data.access_token
          localStorage.setItem('access_token', accessToken)
          router.push('/')
          swal('Log In', 'You have successfully Log In!', 'success')
        })
        .catch(err => {
          const errorMessage = err.response.data.message
          swal('Failed to Log In!', `${errorMessage}!`, 'error')
        })
    },
    logout () {
      localStorage.removeItem('access_token')
      router.push('/login')
      swal('Log Out', 'You have successfully Log Out!', 'success')
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(products => {
          const listProducts = products.data
          if (localStorage.category) {
            const categoryProducts = []
            listProducts.forEach(el => {
              if (el.category.toLowerCase() === localStorage.category) {
                categoryProducts.push(el)
              }
            })
            context.commit('listProducts', categoryProducts)
            localStorage.removeItem('category')
          } else context.commit('listProducts', listProducts)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const { name, imageUrl, price, stock, category } = payload
      axios({
        url: '/products',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name,
          image_url: imageUrl,
          price,
          stock,
          category
        }
      })
        .then(() => {
          swal(
            'Add Product',
            'You have successfully add some product!',
            'success'
          )
          router.push('/product')
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          if (Array.isArray(err.response.data.message)) {
            const errorMessage = err.response.data.message.join('!\n')
            swal('Failed to Edit Product!', `${errorMessage}!`, 'error')
          } else swal(`${err.response.data.message}!`, '', 'error')
        })
    },
    deleteProduct (context, id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this product!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          return axios({
            url: `/products/${id}`,
            method: 'delete',
            headers: {
              access_token: localStorage.access_token
            }
          })
            .then(() => {
              swal('Poof! Your product has been deleted!', {
                icon: 'success'
              })
              context.dispatch('fetchProducts')
            })
            .catch(() => {
              swal(
                'Cannot access this features, this is for admin only!',
                '',
                'error'
              )
            })
        }
      })
    },
    getProduct (context, id) {
      return axios({
        url: `/products/${id}`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editProduct (context, payload) {
      const { name, imageUrl, price, stock, category, id } = payload
      axios({
        url: `/products/${id}`,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name,
          image_url: imageUrl,
          price,
          stock,
          category
        }
      })
        .then(() => {
          swal(
            'Edit Task',
            'You have successfully edit this product!',
            'success'
          )
          router.push('/product')
        })
        .catch(err => {
          if (Array.isArray(err.response.data.message)) {
            const errorMessage = err.response.data.message.join('!\n')
            swal('Failed to Edit Product!', `${errorMessage}!`, 'error')
          } else swal(`${err.response.data.message}!`, '', 'error')
        })
    }
  },
  modules: {}
})
