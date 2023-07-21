<script setup lang="ts">
import router from '@/router'

interface Emits {
  (event: 'handleClickMenu'): void
  (event: 'handleClickLanguage'): void
  (event: 'handleClickSignIn'): void
}
const emit = defineEmits<Emits>()
const handleClickMenu = () => {
  emit('handleClickMenu')
}
const handleClickLanguage = () => {
  emit('handleClickLanguage')
}
const handleClickSignIn = () => {
  emit('handleClickSignIn')
}
const handleClickLogo = () => {
  router.push('/')
}
</script>
<template>
  <div class="menu flex justify-between px-5 pt-5 pb-5">
    <div class="menu-logo flex g-3 h-14" @click="handleClickLogo"><v-logo> </v-logo></div>
    <div class="menu-list_button flex gap-3 md:hidden">
      <v-menu @click="handleClickMenu"></v-menu>
    </div>
    <div class="hidden gap-5 md:flex">
      <v-button @click="handleClickLanguage" type="info">
        <template #prefix>
          <v-language></v-language>
        </template>
        English
      </v-button>
      <v-button @click="handleClickSignIn">
        <template #prefix>
          <el-text style="color: black" tag="b">Sign in</el-text>
          <v-user></v-user>
        </template>
      </v-button>
    </div>
  </div>
</template>

<style></style>
