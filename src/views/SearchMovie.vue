<script setup lang="ts">
import router from '@/router'
import { ref, onMounted } from 'vue'
import { movieService } from '../core/services/movieService'

import { type Movie } from '../core/model/movie'

const isShowMenu = ref(false)

const search = ref<string | number>(String(router.currentRoute.value.params.inputText || ''))
const listMovie = ref<Movie[]>([])

const handleSearchMovie = (data: string) => {
  const searchMovie = movieService().searchMovie(data)
  searchMovie.then((a) => {
    a = a.filter((x: any) => x.poster_path && x.backdrop_path)
    listMovie.value.push(...a)
  })
}

onMounted(() => {
  handleSearchMovie(String(search.value))
})

const handeleClickMovie = (data: Movie) => {
  console.log('run')

  router.push({ name: 'movie', params: { id: data.id } })
}
const handleChangeSearch = (data: string | number) => {
  if (data) {
    search.value = data
    router.push({ name: 'search-movie', params: { inputText: search.value } })
    listMovie.value = []
    handleSearchMovie(String(search.value))
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
  <div class="v-search-screen lg:px-16 min-h-screen">
    <v-header
      :isShowMenu="isShowMenu"
      @handleClickMenu="handleClickMenu"
      @handleClickLanguage="handleClickLanguage"
      @handleClickSignIn="handleClickSignIn"
    >
    </v-header>

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
        <v-image :src="movie.poster_path" @click="handeleClickMovie(movie)"></v-image>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>

<style lang="scss">
.v-search-screen {
  background-color: black;
  .list-movies {
    background-color: #1d1d1d;
  }
}
</style>
