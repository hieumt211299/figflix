<script setup lang="ts">
import router from '@/router'
import { ref, onMounted } from 'vue'
import { movieService } from '../core/services/movieService'
import { type Movie } from '../core/model/movie'

const idMovie = ref<number>(Number(router.currentRoute.value.params.id))
const isShowMenu = ref(false)
const movieDetail = ref<Movie>()
const popularMovies = ref<Movie[]>([])
const fullscreenLoading = ref(true)
const logo =
  ref(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <mask
        id="mask0_4_72"
        style="mask-type: luminance"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="44"
        height="44"
      >
        <path
          d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44Z"
          fill="white"
          stroke="white"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M24 18C24.7956 18 25.5587 17.6839 26.1213 17.1213C26.6839 16.5587 27 15.7956 27 15C27 14.2044 26.6839 13.4413 26.1213 12.8787C25.5587 12.3161 24.7956 12 24 12C23.2044 12 22.4413 12.3161 21.8787 12.8787C21.3161 13.4413 21 14.2044 21 15C21 15.7956 21.3161 16.5587 21.8787 17.1213C22.4413 17.6839 23.2044 18 24 18ZM24 36C24.7956 36 25.5587 35.6839 26.1213 35.1213C26.6839 34.5587 27 33.7956 27 33C27 32.2044 26.6839 31.4413 26.1213 30.8787C25.5587 30.3161 24.7956 30 24 30C23.2044 30 22.4413 30.3161 21.8787 30.8787C21.3161 31.4413 21 32.2044 21 33C21 33.7956 21.3161 34.5587 21.8787 35.1213C22.4413 35.6839 23.2044 36 24 36ZM15 27C15.7956 27 16.5587 26.6839 17.1213 26.1213C17.6839 25.5587 18 24.7956 18 24C18 23.2044 17.6839 22.4413 17.1213 21.8787C16.5587 21.3161 15.7956 21 15 21C14.2044 21 13.4413 21.3161 12.8787 21.8787C12.3161 22.4413 12 23.2044 12 24C12 24.7956 12.3161 25.5587 12.8787 26.1213C13.4413 26.6839 14.2044 27 15 27ZM33 27C33.7956 27 34.5587 26.6839 35.1213 26.1213C35.6839 25.5587 36 24.7956 36 24C36 23.2044 35.6839 22.4413 35.1213 21.8787C34.5587 21.3161 33.7956 21 33 21C32.2044 21 31.4413 21.3161 30.8787 21.8787C30.3161 22.4413 30 23.2044 30 24C30 24.7956 30.3161 25.5587 30.8787 26.1213C31.4413 26.6839 32.2044 27 33 27Z"
          fill="black"
          stroke="black"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path d="M24 44H44" stroke="white" stroke-width="4" stroke-linecap="round" />
      </mask>
      <g mask="url(#mask0_4_72)">
        <path d="M0 0H48V48H0V0Z" fill="#D62D30" />
      </g>
    </svg>`)

const getMainMovie = (id: number) => {
  const getMovieDetail = movieService().getMovieDetail(id)
  const getMovie = () => {
    movieDetail.value = undefined
    getMovieDetail.then((a) => {
      movieDetail.value = a
      if (movieDetail.value) fullscreenLoading.value = false
    })
  }
  getMovie()
}

onMounted(() => {
  getMainMovie(idMovie.value)
  const getPopularMovies = movieService().getPopularMovies()
  const getPopular = () => {
    getPopularMovies.then((a) => {
      popularMovies.value.push(...a.results)
    })
  }
  getPopular()
})

const handeleClickMovie = (data: Movie) => {
  fullscreenLoading.value = true

  router.push({ name: 'movie', params: { id: data.id } })
  idMovie.value = data.id
  getMainMovie(idMovie.value)
  scrollToTop()
}
const handleClickBack = () => {
  router.go(-1)
}
const handleClickPlay = () => {
  console.log('play')
}
const handleClickLike = () => {
  console.log('like')
}
const handleClickDisLike = () => {
  console.log('dis like')
}
const handleClickSignIn = () => {
  console.log('handleClickSignIn')
}
const handleClickLanguage = () => {
  console.log('handleClickLanguage')
}
const handleClickMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
const runtime = (data: number) => {
  let hour = Math.floor(data / 60)
  let minute = data % 60
  return `${hour}h${minute}m`
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Use 'auto' or 'smooth' to control scrolling behavior
  })
}
</script>

<template>
  <div
    class="movie-detail-screen bg-black flex flex-col gap-5 lg:gap-0"
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-background="rgba(0, 0, 0, 1)"
    :element-loading-svg="logo"
  >
    <div class="lg:w-screen lg:h-screen lg:overflow-hidden">
      <div class="lg:px-16 lg:z-50">
        <v-header
          :isShowMenu="isShowMenu"
          @handleClickMenu="handleClickMenu"
          @handleClickLanguage="handleClickLanguage"
          @handleClickSignIn="handleClickSignIn"
        ></v-header>
      </div>

      <div class="movie-detail-background relative h-full w-full">
        <v-image v-if="movieDetail?.backdrop_path" :src="movieDetail?.backdrop_path"></v-image>
        <!-- <v-image :src="src"></v-image> -->
        <v-button
          class="movie-detail-back w-10 flex gap-5 absolute right-3 top-2 lg:top-8 lg:left-0 lg:pl-16 lg:w-44"
          @click="handleClickBack"
        >
          <template #prefix>
            <div class="flex gap-2">
              <v-arrow-back></v-arrow-back>

              <el-text type="danger" class="hidden lg:block"> Move back</el-text>
              <!-- <p style="color: #d62d30" class="hidden lg:block">Move back</p> -->
            </div>
          </template>
        </v-button>
        <div>
          <div
            class="movie-detail-title hidden absolute top-1/2 w-1/2 gap-5 transform -translate-y-1/2 pl-10 lg:px-16 lg:grid lg:grid-cols-1"
          >
            <el-text size="large" style="font-size: 48px" tag="b">{{ movieDetail?.title }}</el-text>
            <div class="movie-detail-info">
              <el-text> {{ movieDetail?.overview }}</el-text>
            </div>
            <div class="movie-detail-button hidden lg:flex gap-2">
              <v-button @click="handleClickPlay">
                <template #suffix><v-play></v-play></template>
                <p style="color: #d62d30">Play</p>
              </v-button>
              <v-button @click="handleClickLike">
                <template #prefix><v-like></v-like></template>
              </v-button>
              <v-button @click="handleClickDisLike">
                <template #prefix><v-dis-like></v-dis-like></template>
              </v-button>
            </div>
          </div>
        </div>
      </div>
      <div class="movie-detail-info px-2 pt-1 flex flex-col gap-5 lg:hidden">
        <div>
          <div class="movie-detail-info-title">
            <el-text size="large" tag="b">{{ movieDetail?.original_title }}</el-text>
          </div>
          <div class="movie-detail-info-sort_info flex gap-2">
            <el-text>{{ movieDetail?.release_date.slice(0, 4) }}</el-text>
            <el-tag type="info">16+</el-tag>
            <el-text>{{ runtime(movieDetail?.runtime || 0) }}</el-text>
            <el-tag style="background-color: rgba(240, 248, 255, 0); color: grey">HD</el-tag>
          </div>
        </div>
        <v-button @click="handleClickPlay">
          <template #prefix><v-play></v-play></template>
          <p style="color: #d62d30">Play</p>
        </v-button>
        <el-text style="word-break: normal">{{ movieDetail?.overview }}</el-text>
        <div class="flex gap-2">
          <v-button @click="handleClickLike">
            <template #prefix><v-like @click="handleClickLike"></v-like></template>
          </v-button>
          <v-button @click="handleClickDisLike">
            <template #prefix><v-dis-like @click="handleClickDisLike"></v-dis-like></template>
          </v-button>
        </div>
      </div>
    </div>

    <div class="list-popular-movies">
      <div class="grid gap-5 py-5 px-2 lg:hidden" style="background-color: #1d1d1d">
        <!-- <div class="lg:px-5 lg:py-10" v-for="(movie, index) in popularMovies" :key="index">
          <v-image
            :movieDetail="movie"
            @handleClickImage="handeleClickMovie"
          ></v-image>
        </div> -->
        <el-scrollbar>
          <div class="scrollbar-flex-content">
            <div
              class="scrollbar-list-popular-movies"
              v-for="(movie, index) in popularMovies"
              :key="index"
            >
              <v-image :src="movie.poster_path" @click="handeleClickMovie(movie)"></v-image>
            </div>
          </div>
        </el-scrollbar>
      </div>

      <div class="hidden p-10 lg:block" style="background-color: #1d1d1d">
        <el-text size="large" style="font-size: 48px" tag="b">Other movies</el-text>
        <el-scrollbar>
          <div class="scrollbar-flex-content">
            <div
              class="scrollbar-list-popular-movies"
              v-for="(movie, index) in popularMovies"
              :key="index"
            >
              <v-image :src="movie.poster_path" @click="handeleClickMovie(movie)"></v-image>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>

    <v-footer class="lg:px-72"></v-footer>
  </div>
</template>

<style lang="scss">
.movie-detail-screen {
  .scrollbar-flex-content {
    display: flex;
    .scrollbar-image-from-movie {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 480px;
      text-align: center;
      border-radius: 4px;
      background: var(--el-color-danger-light-9);
      color: var(--el-color-danger);
    }
    .scrollbar-list-popular-movies {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 160px;
      text-align: center;
      border-radius: 4px;
      background: var(--el-color-danger-light-9);
      color: var(--el-color-danger);
      margin: 15px;
    }
  }

  .movie-detail-background {
    background-size: contain;
  }
}
</style>
