<template>
  <section class="content-md" v-html="$markdown.render(content)"/>
</template>

<script lang="ts" setup>
defineProps<{
  content: String;
}>();
</script>

<style lang="scss" scoped>
.content-md {
  margin-right: 6rem;
  margin-left: 6rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  line-height: 2.5rem;
  text-align: justify;
}
</style>