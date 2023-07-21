<script setup lang="ts">
import router from '@/router'
import { ref, onMounted, reactive } from 'vue'

interface movie {
  id: number
  trailer: string
  src: string
}
const listMovie = ref<movie[]>([])

const isShowMenu = ref(false)
for (let i = 1; i <= 8; i++) {
  const createMovie = reactive({
    id: 0,
    trailer: '',
    src: ''
  })
  createMovie.id = i
  createMovie.src = `movies/movie${i}.png`
  listMovie.value.push(createMovie)
}

const search = ref<string | number>(String(router.currentRoute.value.params.inputText || ''))

onMounted(() => {
  search.value = String(router.currentRoute.value.params.inputText || '')
})

const handeleClickMovie = (data: number) => {
  console.log(data)
  router.push({ name: 'movie-detail', params: { id: data } })
}
const handleChangeSearch = (data: string | number) => {
  if (data) {
    search.value = data
    router.push({ name: 'search-movie', params: { inputText: search.value } })
  }
}

const handleClickMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
const handleClickSignIn = () => {
  console.log('handleClickSignIn')
}
const handleClickLanguage = () => {
  console.log('handleClickLanguage')
}
</script>
<template>
  <div class="v-search-screen lg:px-16">
    <v-header
      @handleClickMenu="handleClickMenu"
      @handleClickLanguage="handleClickLanguage"
      @handleClickSignIn="handleClickSignIn"
    >
    </v-header>
    <div class="header_menu" @click="handleClickMenu" :class="{ test: !isShowMenu }">
      <el-text style="color: white" @click.stop="handleClickSignIn">LOGIN</el-text>
      <el-text style="color: white" @click.stop="handleClickLanguage">LANGUAGE</el-text>
    </div>
    <v-input
      :search="search"
      class="w-full font-bold p-5 lg:w-96"
      placeholder="Search Movie"
      @handleChange="handleChangeSearch"
    >
      <template #prefix> <v-search> </v-search> </template>
    </v-input>

    <div
      class="list-movies px-5 py-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:rounded-3xl lg:px-40 lg:pt-14 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-16"
    >
      <div v-for="(movie, index) in listMovie" :key="index">
        <v-image :movieDetail="movie" @handleClickImage="handeleClickMovie"></v-image>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>

<style lang="scss">
.v-search-screen {
  background-color: black;
  .header_menu.test {
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
  .list-movies {
    background-color: #1d1d1d;
  }
}
</style>
