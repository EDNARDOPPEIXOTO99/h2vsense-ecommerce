<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">

    <!-- NAVBAR -->
    <Menubar :model="items">
      <template #end>
        <div class="flex items-center gap-2">
          <Button icon="pi pi-moon" text @click="toggleDark" />

          <Button
            v-if="!isAuth"
            label="Login"
            icon="pi pi-user"
            @click="login"
          />

          <Button
            v-else
            label="Logout"
            icon="pi pi-sign-out"
            severity="danger"
            @click="logout"
          />
        </div>
      </template>
    </Menubar>

    <div class="p-6">
      <router-view />
    </div>

  </div>
</template>

<script lang="ts">
import Menubar from "primevue/menubar"
import Button from "primevue/button"

export default {
  components: { Menubar, Button },

  data() {
    return {
      isAuth: false,
      items: [
        { label: "Home", icon: "pi pi-home", command: () => this.$router.push("/") },
        { label: "Carrinho", icon: "pi pi-shopping-cart", command: () => this.$router.push("/cart") },
        { label: "Admin", icon: "pi pi-cog", command: () => this.$router.push("/admin") }
      ]
    }
  },

  mounted() {
    this.isAuth = localStorage.getItem("auth") === "true"
  },

  methods: {
    login() {
      localStorage.setItem("auth", "true")
      localStorage.setItem("role", "admin")
      location.reload()
    },

    logout() {
      localStorage.clear()
      location.reload()
    },

    toggleDark() {
      document.documentElement.classList.toggle("dark")
    }
  }
}
</script>