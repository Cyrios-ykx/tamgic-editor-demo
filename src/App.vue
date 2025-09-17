<script setup lang="ts">
import { routesArray } from '@/router'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <div class="nav-bar">
      <div v-for="route in routesArray" :key="route.path">
        <RouterLink :to="route.path">{{ route.meta.title }}</RouterLink>
      </div>
    </div>
    <div class="router-view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
}
</style>
