<template>
  <div class="w-full">
    <!-- Left side - Login form -->
    <div class="flex items-center justify-center bg-white p-8">
      <div class="w-full max-w-md">
        <div class="flex justify-center mb-6">
          <img :src="vueLogo" alt="Logo" class="h-8 w-8" />
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-1">Sign in</h2>
        <p class="text-sm text-gray-500 mb-4">
          Don't have an account?
          <routerLink to="/signup"><a href="#" class="text-blue-600 hover:underline">Sign up</a></routerLink>
        </p>

        <p v-if="error" class="text-red-600 text-sm bg-red-200 p-3 rounded-lg mb-3">{{ error }}</p>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email address*</label>
            <input type="email" v-model="form.email" class="mt-1 w-full border rounded px-3 py-2" required />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Password*</label>
            <div class="relative">
              <input
                :type="form.showPassword ? 'text' : 'password'"
                v-model="form.password"
                class="mt-1 w-full border rounded px-3 py-2 pr-10"
                required
              />
              <button type="button" class="absolute right-2 top-2 text-gray-400" @click="form.showPassword = !form.showPassword">👁️</button>
            </div>
          </div>

          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" v-model="form.rememberMe" />
              <span class="text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <button type="submit" :disabled="!isFormValid" class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Sign in
          </button>
        </form>

        <div class="my-6 text-center text-sm text-gray-500">Or continue with</div>
        <div class="flex justify-center gap-4">
          <button class="border p-2 rounded-full hover:bg-gray-100">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button class="border p-2 rounded-full hover:bg-gray-100">
            <i class="fab fa-twitter"></i>
          </button>
          <button class="border p-2 rounded-full hover:bg-gray-100">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import vueLogo from '@/assets/vue.svg'
  import { computed, reactive, ref } from 'vue'
  import { login } from '../services/auth'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const form = reactive({
    email: 'jpbs2@email.com',
    password: 'Admin@1234',
    rememberMe: false,
    showPassword: false,
  })
  const error = ref('')
  const loading = ref(false)

  const isFormValid = computed(() => form.email.trim() && form.password.trim())

  const handleLogin = async () => {
    try {
      loading.value = true
      error.value = ''
      const { email, password } = form
      const { token, user } = await login({ email, password })
      localStorage.setItem('authToken', token)

      router.push({ name: 'clients' })
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Erro ao fazer login'
    } finally {
      loading.value = false
    }
  }
</script>
