<template>
  <section class="container-fluid home-page">
    <Navbar />
    <div class="container">
      <div class="content" style="color: white">
        <h2>Welcome to <span>Morgshop</span></h2>
        <p>Fulfill your daily dose of Shopping!</p>
        <router-link to="/product">
          <a href="/product" class="btn btn-warning" style="color: white"
            >Our Product</a
          >
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
