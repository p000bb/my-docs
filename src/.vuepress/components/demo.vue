<template>
  <div>
    <div class="w-full h-10 bg-slate-600 rounded">1111</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance() as any;
onMounted(() => {});
watch(
  () => {},
  (val) => {},
  { deep: true, immediate: true }
);
</script>
<style scoped lang="scss"></style>
