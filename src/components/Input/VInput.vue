<script setup lang="ts">
// import console from 'console'
import { onMounted, ref } from 'vue'

interface Emits {
  (event: 'handleBlur', blurEvent: FocusEvent): void
  (event: 'handleFocus', focusEvent: FocusEvent): void
  (event: 'handleChange', data: string | number): void
  (event: 'handleInput', data: string | number): void
  (event: 'handleKeydown', keydownEvent: KeyboardEvent): void
  (event: 'handleClear'): void
}
interface Props {
  placeholder: string
  search: string
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const value = ref<string>('')

onMounted(() => {
  value.value = props.search
})

const handleFocus = (event: FocusEvent) => {
  emit('handleFocus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('handleBlur', event)
}

const handleChange = (value: string | number) => {
  emit('handleChange', value)
}

const handleInput = (value: string | number) => {
  emit('handleInput', value)
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('handleKeydown', event)
}
const handleClear = () => {
  emit('handleClear')
}
</script>

<template>
  <div class="v-input-item-wrap">
    <div class="v-input-item w-full">
      <el-input
        class="h-14"
        v-model="value"
        :placeholder="props.placeholder"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @input="handleInput"
        @keydown="handleKeydown"
        @clear="handleClear"
      >
        <template #prefix>
          <slot name="prefix"></slot>
        </template>
        <template #suffix>
          <slot name="suffix"></slot>
        </template>
      </el-input>
    </div>
  </div>
</template>
<style lang="scss">
.v-input-item-wrap {
  .v-input-item {
    .el-input {
      --el-border-radius-base: 20px;
      .el-input__wrapper {
        padding: 20px;
      }
    }
  }
}
</style>
