<template>
  <el-button
    v-bind="$attrs"
    @click="handleUpload">
    <slot />
    <input
      type="file"
      ref="file"
      :accept="accept"
      style="visibility: hidden; width: 1px; height: 1px; vertical-align: middle;"
      @change="handleFile"
    >
  </el-button>
</template>

<script>
export default {
  props: {
    accept: { type: String }
  },
  methods: {
    handleUpload () {
      this.$refs.file.click()
    },
    handleFile (e) {
      const file = e.target.files[0] // 获得文件对象
      e.target.value = '' // 重置 input 的 value，否则下次选择同一个文件时不会触发 change 事件。
      // do upload
      // 为了组件的通用，本组件不负责上传，交由上层处理
      this.$emit('upload', file)
    }
  }
}
</script>
