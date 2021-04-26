<template>
  <nav class="navbar navbar-expand-lg shadow navbar-dark">
    <div class="nav-left">
      <router-link to="/" class="logo">
        <img src="@/assets/images/morgyFix.png" alt="logo" />
      </router-link>
    </div>
    <div class="nav-right navbar-collapse">
      <ul class="navbar-nav">
        <li>
          <router-link to="/"><i class="bi bi-house mr-2"></i>Home</router-link>
        </li>
        <li>
          <router-link to="/product"
            ><i class="bi bi-bag mr-2"></i>Product</router-link
          >
          <div class="sub-product">
            <ul>
              <li>
                <a href="/product" @click.prevent="toCategory()"
                  >All Products</a
                >
              </li>
              <li>
                <a href="/category/tops" @click.prevent="toCategory('tops')"
                  >Tops</a
                >
              </li>
              <li>
                <a
                  href="/category/bottoms"
                  @click.prevent="toCategory('bottoms')"
                  >Bottoms</a
                >
              </li>
              <li>
                <a href="/category/shoes" @click.prevent="toCategory('shoes')"
                  >Shoes</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/logout" @click.prevent="logout"
            ><i class="bi bi-box-arrow-right mr-2"></i>Log Out</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    toCategory (category) {
      if (category) {
        this.$router.push(`/product/${category}`)
        localStorage.setItem('category', category)
      } else {
        this.$router.push('/product')
      }
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style></style>
