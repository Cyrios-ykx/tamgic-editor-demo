<template>
  <main-container class="main-container" :config="config"></main-container>
</template>

<script lang="ts" setup>
import type { MPage } from '@tmagic/core'

import mainContainer from './main-container.vue'

defineProps<{
  config: MPage
}>()

defineExpose({
  reload() {
    window.location.reload()
  },
})
</script>

<style scoped>
.main-container {
  height: 700px;
  background-color: skyblue;
}
</style>
