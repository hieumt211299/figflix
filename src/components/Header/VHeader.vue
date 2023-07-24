<script setup lang="ts">
import router from '@/router'
import { ref, watch } from 'vue'

interface Emits {
  (event: 'handleClickMenu'): void
  (event: 'handleClickLanguage'): void
  (event: 'handleClickSignIn'): void
}
interface Props {
  isShowMenu: boolean
}
const props = defineProps<Props>()
const showMenu = ref<boolean>(false)
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
watch(props, () => {
  showMenu.value = props.isShowMenu
})
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
          <el-text type="primary" tag="b">Sign in</el-text>
          <v-user></v-user>
        </template>
      </v-button>
    </div>
  </div>
  <div class="header_menu" @click="handleClickMenu" :class="{ menu: !showMenu }">
    <el-text @click.stop="handleClickSignIn">LOGIN</el-text>
    <el-text @click.stop="handleClickLanguage">LANGUAGE</el-text>
  </div>
</template>

<style lang="scss">
.header_menu.menu {
  display: none;
}
.header_menu {
  position: absolute;
  top: 0px;

  background-color: rgba(0, 0, 0, 0.521);
  height: 100vh;
  width: 100vw;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  .el-text {
    font-size: 36px;
  }
}
</style>
