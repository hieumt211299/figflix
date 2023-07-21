<script setup lang="ts">
import router from '@/router'
import { ref, reactive } from 'vue'

let x = Number(router.currentRoute.value.params.id)
console.log(x)
const isShowMenu = ref(false)

const movieDetail = reactive({
  id: x,
  trailer: 'movies_detail/movie_detail_background.png',
  src: [
    'movies_detail/movies_detail1.png',
    'movies_detail-movies_detail2.png',
    'movies_detail-movies_detail3.png',
    'movies_detail-movies_detail2.png',
    'movies_detail-movies_detail3.png',
    'movies_detail-movies_detail2.png',
    'movies_detail-movies_detail3.png',
    'movies_detail-movies_detail2.png',
    'movies_detail-movies_detail3.png'
  ]
})

interface movie {
  id: number
  trailer: string
  src: string
}

const listMovie = ref<movie[]>([])
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

const handeleClickMovie = (data: number) => {
  console.log(data)
  router.push({ name: 'movie-detail', params: { id: data } })
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
  <div class="movie-detail-screen bg-black flex flex-col gap-5">
    <v-header
      class="lg:px-16"
      @handleClickMenu="handleClickMenu"
      @handleClickLanguage="handleClickLanguage"
      @handleClickSignIn="handleClickSignIn"
    ></v-header>
    <div class="header_menu" @click="handleClickMenu" :class="{ test: !isShowMenu }">
      <el-text @click.stop="handleClickSignIn">LOGIN</el-text>
      <el-text @click.stop="handleClickLanguage">LANGUAGE</el-text>
    </div>

    <div class="movie-detail-background relative">
      <img src="../assets/movies_detail/movie_detail_background.png" class="invisible" alt="" />
      <v-button
        class="movie-detail-back w-10 flex gap-5 absolute right-3 top-2 lg:top-8 lg:left-0 lg:pl-16 lg:w-44"
        @click="handleClickBack"
      >
        <p style="color: #d62d30" class="hidden lg:block">Move back</p>
        <template #prefix>
          <div class="flex gap-2">
            <v-arrow-back></v-arrow-back>
          </div>
        </template>
      </v-button>
      <div>
        <div
          class="movie-detail-title hidden absolute top-1/2 w-1/2 gap-5 transform -translate-y-1/2 pl-10 lg:px-16 lg:grid lg:grid-cols-1"
        >
          <el-text size="large" style="font-size: 48px" tag="b">Thor: Love and Thunder </el-text>
          <div class="movie-detail-info">
            <el-text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam perferendis
              voluptate ducimus atque iure dicta nesciunt harum quasi esse voluptates doloremque,
              ratione corporis? Temporibus quaerat error, hic excepturi incidunt tenetur?</el-text
            ><el-text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam perferendis
              voluptate ducimus atque iure dicta nesciunt harum quasi esse voluptates doloremque,
              ratione corporis? Temporibus quaerat error, hic excepturi incidunt tenetur?</el-text
            ><el-text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam perferendis
              voluptate ducimus atque iure dicta nesciunt harum quasi esse voluptates doloremque,
              ratione corporis? Temporibus quaerat error, hic excepturi incidunt tenetur?</el-text
            >
          </div>
          <div class="movie-detail-button hidden lg:flex gap-2">
            <v-button @click="handleClickPlay">
              <template #suffix> <v-play></v-play></template>
              <p style="color: #d62d30">Play</p>
            </v-button>
            <v-button @click="handleClickLike">
              <template #prefix> <v-like></v-like> </template>
            </v-button>
            <v-button @click="handleClickDisLike">
              <template #prefix> <v-dis-like> </v-dis-like> </template
            ></v-button>
          </div>
        </div>
      </div>
    </div>

    <div class="movie-detail-info px-2 pt-1 flex flex-col gap-5 lg:hidden">
      <div>
        <div class="movie-detail-info-title">
          <el-text size="large" tag="b">Thor Love and Thunder </el-text>
        </div>
        <div class="movie-detail-info-sort_info flex gap-2">
          <el-text>2022</el-text>
          <el-tag type="info">16+</el-tag>
          <el-text> 1h48p</el-text>
          <el-tag style="background-color: rgba(240, 248, 255, 0); color: grey">HD</el-tag>
        </div>
      </div>
      <v-button @click="handleClickPlay">
        <template #prefix> <v-play></v-play></template>
        <p style="color: #d62d30">Play</p>
      </v-button>
      <el-text style="word-break: normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed consequuntur voluptates
        soluta, rem fugiat dolore in. Aliquam aperiam rem iusto repellendus ab delectus corrupti,
        harum, repudiandae in accusantium inventore.
      </el-text>
      <div class="flex gap-2">
        <v-button @click="handleClickLike">
          <template #prefix> <v-like @click="handleClickLike"></v-like> </template>
        </v-button>
        <v-button @click="handleClickDisLike">
          <template #prefix> <v-dis-like @click="handleClickDisLike"> </v-dis-like> </template
        ></v-button>
      </div>
    </div>

    <div class="image-from-movie">
      <div class="py-5 px-2 grid grid-cols-1 gap-10 lg:hidden">
        <div v-for="src in movieDetail.src" :key="src">
          <v-image-detail :src="src"></v-image-detail>
        </div>
      </div>

      <el-scrollbar class="py-10 hidden lg:block">
        <div class="scrollbar-flex-content">
          <div class="scrollbar-image-from-movie" v-for="src in movieDetail.src" :key="src">
            <v-image-detail :src="src"></v-image-detail>
          </div>
        </div>
      </el-scrollbar>
    </div>

    <div class="list-other-movies">
      <div class="grid grid-cols-2 gap-5 py-5 px-2 lg:hidden" style="background-color: #1d1d1d">
        <div class="lg:px-5 lg:py-10" v-for="(movie, index) in listMovie" :key="index">
          <v-image :movieDetail="movie" @handleClickImage="handeleClickMovie"></v-image>
        </div>
      </div>

      <div class="hidden p-10 lg:block" style="background-color: #1d1d1d">
        <el-text size="large" style="font-size: 48px" tag="b">Other movies</el-text>
        <el-scrollbar>
          <div class="scrollbar-flex-content">
            <div
              class="scrollbar-list-other-movies"
              v-for="(movie, index) in listMovie"
              :key="index"
            >
              <v-image :movieDetail="movie" @handleClickImage="handeleClickMovie"></v-image>
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
  .el-text {
    color: white;
  }
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
    .scrollbar-list-other-movies {
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
    background-image: url('../assets/movies_detail/movie_detail_background.png');
    background-size: contain;
  }
}
</style>
