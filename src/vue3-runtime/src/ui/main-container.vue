<template>
  <item-component :config="config">
    <item-component v-for="item in config.items" :key="item.id" :config="item"></item-component>
  </item-component>
</template>

<script lang="ts" setup>
import type { MContainer } from '@tmagic/core'

import itemComponent from './item-component.vue'

defineProps<{
  config: MContainer
}>()
</script>
