<script setup lang="ts">
interface Props {
  type?: string
}

defineProps<Props>()
</script>
<template>
  <div class="v-button-wrap h-14">
    <el-button class="v-button w-full h-full" :type="type" plain>
      <div class="flex items-center justify-center gap-2 p-4 h-full">
        <slot name="prefix"></slot>

        <slot></slot>

        <slot name="suffix"></slot>
      </div>
    </el-button>
  </div>
</template>
<style lang="scss">
.v-button-wrap {
  .v-button {
    height: 2.5rem;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.2);
    &.el-button {
      border-radius: 15px;
      height: 100%;
    }
    &.el-button--info {
      background: rgba(0, 0, 0, 0);
      color: white;
    }
  }
}
</style>
