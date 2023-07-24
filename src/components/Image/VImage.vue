<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  src: string
}
const props = defineProps<Props>()
const test = computed(() => `https://image.tmdb.org/t/p/original${props.src}`)
</script>
<template>
  <img :src="test" alt="" class="h-full w-full object-cover" loading="lazy" />
</template>
