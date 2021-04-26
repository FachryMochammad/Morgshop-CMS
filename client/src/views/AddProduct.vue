<template>
  <div class="container-fluid">
    <Navbar />
    <div class="mt-5 text-center">
      <span
        class="bi-bag-plus"
        style="font-size: 30px; font-weight: 700; color: goldenrod"
      >
        Add Product to Catalog</span
      >
      <form class="mt-4" style="width: 550px; position:absolute; left:30%">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">Name</span>
          <input
            type="text"
            class="form-control"
            aria-label="Name"
            aria-describedby="addon-wrapping"
            v-model="name"
          />
        </div>
        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">Image URL</span>
          <input
            type="text"
            class="form-control"
            aria-label="ImageURl"
            aria-describedby="addon-wrapping"
            v-model="image_url"
          />
        </div>
        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">Price</span>
          <input
            type="text"
            class="form-control"
            aria-label="Price"
            aria-describedby="addon-wrapping"
            v-model="price"
          />
        </div>
        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">Stock</span>
          <input
            type="text"
            class="form-control"
            aria-label="Stock"
            aria-describedby="addon-wrapping"
            v-model="stock"
          />
        </div>
        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">Category</span>
          <select
            class="form-select"
            aria-label="Category"
            style="width: 500px"
            v-model="category"
          >
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div class="input-group flex-nowrap mt-3">
          <button
            class="btn btn-warning"
            style="width: 600px; color: white;"
            @click.prevent="addProduct"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      category: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        imageUrl: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category
      }
      this.$store.dispatch('addProduct', payload)
      this.name = ''
      this.image_url = ''
      this.price = ''
      this.stock = ''
      this.category = ''
    }
  }
}
</script>

<style></style>
