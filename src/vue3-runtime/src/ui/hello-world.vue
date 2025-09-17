<template>
  <div class="hello-world">hello-world</div>
</template>

<script lang="ts" setup>
import type { MNode } from '@tmagic/core'

defineProps<{
  config: MNode
}>()
</script>

<style scoped>
.hello-world {
  background-color: orange;
}
</style>
