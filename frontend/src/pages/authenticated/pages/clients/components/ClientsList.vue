<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex items-center justify-between mb-10">
      <h2 class="text-xl font-semibold mb-4">Clientes</h2>
      <router-link :to="{ name: 'client-form' }">
        <button class="p-3 rounded-lg bg-lime-600 cursor-pointer text-white hover:bg-lime-800 transition-colors">
          Adicionar cliente +
        </button>
      </router-link>
    </div>

    <table class="min-w-full text-sm text-left">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3 cursor-pointer" @click="sortBy('fullName')">
            Nome
            <span v-if="sortKey === 'fullName'">{{ sortDirection === 'asc' ? '▲' : '▼' }}</span>
          </th>
          <th class="p-3">Tipo</th>
          <th class="p-3">CPF/CNPJ</th>
          <th class="p-3">E-mail</th>
          <th class="p-3 cursor-pointer" @click="sortBy('createdAt')">
            Criado em
            <span v-if="sortKey === 'createdAt'">{{ sortDirection === 'asc' ? '▲' : '▼' }}</span>
          </th>
          <th class="p-3">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in paginatedClients" :key="client.id" class="border-b hover:bg-gray-50">
          <td class="p-3">{{ client.fullName }}</td>
          <td class="p-3">{{ client.type }}</td>
          <td class="p-3">{{ formatDocument(client.document) }}</td>
          <td class="p-3">{{ client.email }}</td>
          <td class="p-3">{{ formatDate(client.createdAt) }}</td>
          <td class="p-3 flex gap-2">
            <button class="text-blue-600 hover:underline">Ver</button>
            <button class="text-yellow-600 hover:underline">Editar</button>
            <button class="text-red-600 hover:underline">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Paginação -->
    <div class="flex justify-end items-center mt-4 gap-2">
      <button class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" :disabled="currentPage === 1" @click="currentPage--">
        Anterior
      </button>
      <span class="text-sm">Página {{ currentPage }} de {{ totalPages }}</span>
      <button class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" :disabled="currentPage === totalPages" @click="currentPage++">
        Próxima
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, watch, onMounted } from 'vue'
  import type { Client } from '../../../../../models/User'
  import { retriveClients } from '../client.api'

  const clients = ref<Client[]>([])

  const currentPage = ref(1)
  const pageSize = 10

  const sortKey = ref<keyof Client>('createdAt')
  const sortDirection = ref<'asc' | 'desc'>('desc')

  const sortedClients = computed(() => {
    return [...clients.value].sort((a, b) => {
      const dir = sortDirection.value === 'asc' ? 1 : -1
      return a[sortKey.value]! > b[sortKey.value]! ? dir : -dir
    })
  })

  const paginatedClients = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    return sortedClients.value.slice(start, start + pageSize)
  })

  async function fetchClients() {
    const response = await retriveClients()
    clients.value = response
  }

  const totalPages = computed(() => Math.ceil(clients.value.length / pageSize))

  function sortBy(key: keyof Client) {
    if (sortKey.value === key) {
      sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortKey.value = key
      sortDirection.value = 'asc'
    }
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('pt-BR')
  }

  function formatDocument(value: string): string {
    if (!value) return ''

    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }

    if (value.length === 14) {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
    }

    return value
  }

  onMounted(async () => {
    await fetchClients()
  })
</script>

<style scoped></style>
