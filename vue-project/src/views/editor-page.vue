<script setup lang="ts">
import { ref } from 'vue'

const value = ref({
  type: 'app',
  id: 1,
  items: [],
})

const runtimeUrl = 'http://localhost:8087/'

const componentGroupList = ref([
  {
    title: '组件列表',
    items: [
      {
        icon: 'https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png',
        text: 'HelloWorld',
        type: 'hello-world',
      },
    ],
  },
])
</script>

<template>
  <div>
    <m-editor
      v-model="value"
      :runtime-url="runtimeUrl"
      :component-group-list="componentGroupList"
    />
  </div>
</template>

<style scoped>
.m-editor {
  height: 100vh;
  width: 100vw;
}
</style>
