<script setup lang="ts">
interface Emits {
  (event: 'handleClickImage', movie: number): void
}
interface movie {
  id: number
  trailer: string
  src: string
}

interface Props {
  movieDetail: movie
}
const emit = defineEmits<Emits>()
const props = defineProps<Props>()
let test = `/src/assets/${props.movieDetail.src}`

test = test.replace(/-/g, '/')

const handleClickImage = () => {
  emit('handleClickImage', props.movieDetail.id)
}
</script>
<template>
  <img :src="test" alt="asd" @click="handleClickImage" />
</template>
