<template>
    <a :href="`/${post.Slug}`">
      <div class="main-info">
        <h3 class="Title">{{ post.Title }}</h3>
        <p class="Category">{{ post.Category }}</p>
        <p class="Intro">{{ post.Intro }}</p>
        <p class="published"><i class="fa-solid fa-calendar-days"></i> {{ published }}</p>
      </div>
      <img :src="post.CoverURL" alt="cover" class="cover">
    </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  post: Post;
}>();

const published = new Date(props.post.publishedAt).toLocaleDateString(
    'de-DE'
);
</script>

<style lang="scss" scoped>
.gallery-image {
  display: grid;
  grid-template-columns: auto 25rem;
  grid-template-rows: 100%;
  grid-template-areas: 'main cover';

  .main {
    .Title {}
    .Category {}
    .Intro {}
    .published {}
  }

  .cover {
    grid-area: cover;
    height: 25rem;
    width: 25rem;
  }
}
</style>