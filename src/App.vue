<script setup lang="ts">
import { RouterView } from 'vue-router'

import './style.css'
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style lang="scss">
.el-text {
  color: white !important;
  &.el-text--danger {
    color: #d62d30 !important;
  }
  &.el-text--primary {
    color: #606266 !important;
  }
}
</style>
