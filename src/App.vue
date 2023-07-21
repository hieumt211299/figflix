<script setup lang="ts">
import { RouterView } from 'vue-router'

// import HelloWorld from './components/HelloWorld.vue'
import './style.css'
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>
.el-text {
  &.el-text--danger {
    color: #d62d30 !important;
  }
}
</style>
