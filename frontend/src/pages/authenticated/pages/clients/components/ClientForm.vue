<template>
  <div class="bg-white p-6 rounded-lg shadow mx-auto">
    <h2 class="text-xl font-semibold mb-4">
      {{ isEditMode ? 'Editar Cliente' : 'Cadastrar Cliente' }}
    </h2>

    <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Nome -->
      <div class="col-span-2">
        <label class="block text-sm font-medium text-gray-700">Nome completo</label>
        <input type="text" v-model="form.fullName" class="mt-1 block p-3 w-full rounded border-gray-300 border" required />
      </div>

      <!-- Tipo -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Tipo</label>
        <select v-model="form.type" class="mt-1 block p-3 w-full rounded border-gray-300 border">
          <option value="FISIC">Pessoa Física</option>
          <option value="JURIDIC">Pessoa Jurídica</option>
        </select>
      </div>

      <!-- CPF/CNPJ -->
      <div>
        <label class="block text-sm font-medium text-gray-700">CPF/CNPJ</label>
        <input
          type="text"
          v-model="form.document"
          v-maska="form.type === 'FISIC' ? '###.###.###-##' : '##.###.###/####-##'"
          class="mt-1 block p-3 w-full rounded border-gray-300 border"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-gray-700">E-mail</label>
        <input type="email" v-model="form.email" class="mt-1 block p-3 w-full rounded border-gray-300 border" required />
      </div>

      <!-- Telefone -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Telefone</label>
        <input type="text" v-model="form.phone" v-maska="'(##) #####-####'" class="mt-1 block p-3 w-full rounded border-gray-300 border" />
      </div>

      <!-- Botão -->
      <div class="col-span-2 flex justify-end mt-4">
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          {{ isEditMode ? 'Atualizar' : 'Cadastrar' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { createClient } from '../client.api'

  interface ClientForm {
    fullName: string
    type: 'FISIC' | 'JURIDIC'
    document: string
    email: string
    phone: string
  }

  const route = useRoute()
  const isEditMode = ref(false)
  const form = ref<ClientForm>({
    fullName: '',
    type: 'FISIC',
    document: '',
    email: '',
    phone: '',
  })

  watch(
    () => route.params.id,
    id => {
      if (id) {
        isEditMode.value = true
        // Aqui você pode buscar os dados do cliente via API e popular o form
        // ex: fetchClient(id).then(data => Object.assign(form.value, data))
      }
    },
    { immediate: true }
  )

  async function handleSubmit() {
    if (isEditMode.value) {
      console.log('Atualizando cliente:', form.value)
    } else {
      await createClient(form.value)
      clearForm()
      alert('Cliente cadastrado com sucesso!')
    }
  }

  function clearForm() {
    form.value = {
      fullName: '',
      type: 'FISIC',
      document: '',
      email: '',
      phone: '',
    }
  }
</script>

<style scoped></style>
