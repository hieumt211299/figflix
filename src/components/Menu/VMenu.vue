<script setup lang="ts"></script>
<template>
  <div class="header_menu" @click="handleClickMenu" :class="{ menu: !isShowMenu }">
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
