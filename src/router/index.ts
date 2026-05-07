import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import ProductDetail from "../views/ProductDetail.vue"
import Cart from "../views/Cart.vue"
import Admin from "../views/admin/AdminDashboard.vue"

const routes = [
  { path: "/", component: Home },

  { path: "/product/:id", component: ProductDetail },

  {
    path: "/cart",
    component: Cart,
    meta: { requiresAuth: true }
  },

  {
    path: "/admin",
    component: Admin,
    meta: { requiresAdmin: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 GUARDS (OBRIGATÓRIO)
router.beforeEach((to) => {

  const isAuthenticated = localStorage.getItem("auth") === "true"
  const isAdmin = localStorage.getItem("role") === "admin"

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert("Faça login para acessar o checkout")
    return "/"
  }

  if (to.meta.requiresAdmin && !isAdmin) {
    alert("Acesso negado (Admin)")
    return "/"
  }

  return true
})

export default router