<script setup lang="ts">
interface Props {
  src: string
}
const props = defineProps<Props>()
let test = `/src/assets/${props.src}`

test = test.replace(/-/g, '/')
</script>
<template>
  <img :src="test" alt="asd" />
</template>
