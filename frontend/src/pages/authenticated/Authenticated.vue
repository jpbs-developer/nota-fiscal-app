<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-[#0f172a] text-white flex flex-col">
      <div class="px-6 py-4 text-xl font-bold border-b border-white/10">
        <span>Nota Fiscal App</span>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-2">
        <router-link to="clients" class="flex items-center gap-3 px-4 py-2 rounded hover:bg-white/10" active-class="bg-white/10">
          <i class="fas fa-users"></i>
          <span>Clientes</span>
        </router-link>
      </nav>
    </aside>

    <!-- Main content -->
    <div class="flex-1 overflow-y-auto p-6">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
  // Nada aqui por enquanto, só renderiza layout autenticado
</script>

<style scoped>
  /**** Estilo opcional para scroll ou responsividade ****/
</style>
