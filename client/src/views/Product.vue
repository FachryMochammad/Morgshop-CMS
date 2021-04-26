<template>
  <div class="container-fluid">
    <Navbar />
    <div class="mt-4 text-center">
      <router-link
        to="/product/add"
        style="text-decoration: none; color: black"
      >
        <div class="btn btn-warning">
          <span class="bi-bag-plus" style="font-size: 17px; color: white">
            Add Product to Catalog</span
          >
        </div></router-link
      >
    </div>
    <div class="row mt-2">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import { mapState } from 'vuex'

export default {
  name: 'Product',
  components: {
    Navbar,
    ProductCard
  },
  computed: {
    ...mapState(['products'])
  },
  mounted () {
    if (!this.$route.params.category) {
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style></style>
