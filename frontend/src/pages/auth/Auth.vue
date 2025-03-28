<template>
  <div class="flex min-h-screen">
    <!-- Left: conteúdo da página (login/signup/etc) -->
    <div class="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
      <router-view />
    </div>

    <!-- Right: painel fixo reaproveitável -->
    <div class="hidden md:flex w-1/2 bg-[#0f172a] text-white items-center justify-center p-12 relative">
      <div>
        <h2 class="text-3xl font-bold mb-4">
          Welcome to
          <br />
          our community
        </h2>
        <p class="text-sm text-gray-300 max-w-sm mb-4">
          Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules.
        </p>
        <div class="flex items-center gap-2">
          <img src="" class="w-8 h-8 rounded-full" />
          <img src="" class="w-8 h-8 rounded-full" />
          <img src="" class="w-8 h-8 rounded-full" />
          <span class="text-sm text-gray-400">More than 17k people joined us, it's your turn</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
