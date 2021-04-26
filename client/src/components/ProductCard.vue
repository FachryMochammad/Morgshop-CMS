<template>
  <!-- Card 1 -->
  <div class="col-md-3">
    <div
      class="card m-3 shadow"
      style="background: white;"
      @mouseover="show = true"
      @mouseout="show = false"
    >
      <div class="product align-items-center p2 text-center m-2">
        <span
          v-show="show"
          class="edit-delete"
          style="position: absolute; right: 0"
          ><i
            class="bi bi-pencil"
            style="margin-right: 10px; font-size: 15px"
            @click.prevent="toEditProduct(product.id)"
          ></i
          ><i
            class="bi bi-trash"
            style="margin-right: 10px; font-size: 15px"
            @click.prevent="deleteProduct(product.id)"
          ></i
        ></span>
        <img
          :src="product.image_url"
          alt="logo"
          class="rounded"
          width="200"
          height="200"
          style="margin: 20px 0; object-fit: contain;"
        />
        <h5 class="product-title">{{ product.name }}</h5>
        <!-- Card Info -->
        <div class="cost mt-3">
          <span
            >Rp<span style="color: tomato">{{ product.price }}</span></span
          >
        </div>
        <div class="mt-3 info">
          <span>Stock : {{ product.stock }}</span
          ><br />
        </div>
      </div>
    </div>
  </div>
  <!-- End Card -->
</template>

<script>
export default {
  name: 'ProductCard',
  data () {
    return {
      show: false
    }
  },
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    toEditProduct (id) {
      this.$router.push(`/product/edit/${id}`)
    }
  }
}
</script>

<style></style>
