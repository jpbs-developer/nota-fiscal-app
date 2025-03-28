<template>
  <form @submit.prevent="handleSignup" class="w-full max-w-md">
    <div class="flex justify-center mb-6">
      <img :src="logo" alt="Logo" class="h-8 w-8" />
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mb-1">Sign up</h2>
    <p class="text-sm text-gray-500 mb-4">
      Already have an account?
      <router-link to="/login" class="text-blue-600 hover:underline">Sign in</router-link>
    </p>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700">Full name*</label>
      <input v-model="form.fullName" type="text" class="mt-1 w-full border rounded px-3 py-2" required />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700">Email address*</label>
      <input v-model="form.email" type="email" class="mt-1 w-full border rounded px-3 py-2" required />
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

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700">Company</label>
      <input v-model="form.company" type="text" class="mt-1 w-full border rounded px-3 py-2" />
    </div>

    <div class="flex items-start mb-6">
      <input type="checkbox" v-model="form.termsAccepted" class="mt-1 mr-2" />
      <label class="text-sm text-gray-700">
        I agree with
        <a href="#" class="text-blue-600 hover:underline">Terms</a>
        and
        <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
      </label>
    </div>

    <button
      type="submit"
      :disabled="!isFormValid"
      class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
    >
      Create your free account
    </button>
  </form>
</template>

<script setup lang="ts">
  import logo from '@/assets/vue.svg'
  import { computed, reactive } from 'vue'

  const form = reactive({
    fullName: '',
    email: '',
    password: '',
    company: '',
    showPassword: false,
    termsAccepted: true,
  })

  function isEmailValid(email: string) {
    return email.includes('@') && email.includes('.')
  }

  const isFormValid = computed(() => {
    const isNameValid = form.fullName.trim().length > 0
    const isPasswordValid = form.password.length >= 6
    const isCompanyValid = form.company.length && form.company.length >= 6
    const isTermsAccepted = form.termsAccepted
    return isNameValid && isEmailValid(form.email) && isPasswordValid && isTermsAccepted && isCompanyValid
  })

  const handleSignup = () => {
    console.log('Signup')
  }
</script>
