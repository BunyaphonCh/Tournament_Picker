<script setup>
const props = defineProps({
  item: Object,
  onChoose: Function
})
</script>

<template>
<div 
  class="border rounded p-10 text-center cursor-pointer hover:bg-gray-100"
  @click="onChoose(item)"
>
</div>
</template>
