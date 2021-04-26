<template>
  <section id="login-page">
    <div class="outter-container">
      <div class="inner-container">
        <div class="box">
          <h1>Log in to</h1>
          <h1 class="title">Morgshop</h1>
          <h1>As Admin</h1>
          <form>
            <input
              type="text"
              placeholder="Email"
              id="email-login"
              required="required"
              v-model="email"
            />
            <input
              type="password"
              placeholder="Password"
              id="password-login"
              required="required"
              v-model="password"
            />
            <button id="btn-submit-login" @click.prevent="login">Log In</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = { email: this.email, password: this.password }
      this.$store.dispatch('login', payload)
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style></style>
