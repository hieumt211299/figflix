<script setup lang="ts">
import router from '@/router'

const handleClick = () => {
  router.push('/')
}
</script>
<template>
  <div class="h-screen w-screen bg-black grid grid-cols-1 content-between">
    <v-header></v-header>
    <div class="flex flex-col justify-center items-center gap-5">
      <el-text type="large" tag="b" style="color: white; font-size: 36px">Page not found</el-text>
      <v-button class="w-40" @click="handleClick">Back Home</v-button>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<style lang="scss"></style>
