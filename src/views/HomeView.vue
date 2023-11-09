<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { ElNotification } from 'element-plus'

const search = ref<string | number>('')
const isShowMenu = ref(false)

const handleChangeSearch = (data: string | number) => {
  search.value = data
  router.push({ name: 'search-movie', params: { inputText: data } })
}
const handleClickMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
const handleClickSignIn = () => {
  ElNotification({
    title: 'Warning',
    message: 'In progress',
    type: 'warning'
  })
}
const handleClickLanguage = () => {
  ElNotification({
    title: 'Warning',
    message: 'In progress',
    type: 'warning'
  })
}
</script>

<template>
  <div class="v-home-screen h-screen relative">
    <v-header
      :isShowMenu="isShowMenu"
      @handleClickMenu="handleClickMenu"
      @handleClickLanguage="handleClickLanguage"
      @handleClickSignIn="handleClickSignIn"
    ></v-header>
    <!-- <div class="header_menu" @click="handleClickMenu" :class="{ menu: !isShowMenu }">
      <el-text @click.stop="handleClickSignIn">LOGIN</el-text>
      <el-text @click.stop="handleClickLanguage">LANGUAGE</el-text>
    </div> -->

    <div class="content flex flex-col gap-5 items-center justify-center w-80 md:w-3/4">
      <v-logo style="scale: 2" class="hidden py-5 lg:flex"></v-logo>
      <el-text class="content-title" tag="b">Unlimited movies, TV shows, and more.</el-text>
      <el-text size="large">Watch anywhere, Cancel anytime.</el-text>
      <v-input
        class="w-80 font-bold"
        placeholder="Search Movie"
        :search="search"
        @handleChange="handleChangeSearch"
      >
        <template #prefix><v-search></v-search></template>
      </v-input>
    </div>
  </div>
</template>
<style lang="scss">
.v-home-screen {
  // .el-text {
  //   color: white;
  // }
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)),
    url('../assets/home_background.png');
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .content-title {
      text-align: center;
      font-size: 36px;
      word-break: normal;
    }
  }
}
</style>
