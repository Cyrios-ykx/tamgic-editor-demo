<script setup lang="ts">
import { ref, watch } from 'vue'

const editorValue = ref({
  type: 'app',
  id: 1,
  items: [],
})

const menu = ref({
  left: [
    // 顶部左侧菜单按钮
    {
      type: 'text',
      text: 'Cyrios',
    },
  ],
  center: ['delete', 'undo', 'redo', 'guides', 'rule', 'zoom'],
  right: [
    // 顶部右侧菜单按钮
    {
      type: 'button',
      text: '保存',
      // icon: Coin,
      handler: () => {
        alert('保存')
        // save()
        // ElMessage.success('保存成功')
      },
    },
  ],
})

const runtimeUrl = 'http://localhost:8088/'

const componentGroupList = ref([
  {
    title: '默认组件列表',
    items: [
      {
        icon: 'https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png',
        text: 'HelloWorld',
        type: 'hello-world',
      },
    ],
  },
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

// 画布大小
// https://tencent.github.io/tmagic-editor/docs/api/editor/props.html#stagerect
const stageRect = ref({
  width: 375,
  height: 817,
})

watch(
  () => editorValue.value,
  (newValue) => {
    console.log(newValue)
  },
)
</script>

<template>
  <div>
    <m-editor
      v-model="editorValue"
      :menu="menu"
      :runtime-url="runtimeUrl"
      :component-group-list="componentGroupList"
      :stage-rect="stageRect"
    />
  </div>
</template>

<style scoped>
.m-editor {
  height: 100vh;
  width: 100vw;
}
</style>
