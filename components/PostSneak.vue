<template>
  <li class="gallery-image">
    <a :href="`/${post.Slug}`" class="post-sneak">
      <div class="main-info">
        <h3>{{ post.Title }}</h3>
        <p>{{ post.Category }}</p>
        <p>{{ post.Intro }}</p>
        <p><i class="fa-solid fa-calendar-days"></i> {{ published }}</p>
      </div>
      <img :src="post.CoverURL" alt="cover" style="height: 60px">
    </a>
  </li>
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
  width: 95%;
  height: 20rem;
  margin-left: 2.5%;
  margin-top: 2.5%;
  background-color: var(--body-darker);
  transition: 250ms all;
  scale: 1;
  position: relative;

  &:hover {
    scale: 1;
    background-color: var(--body-brighter);

    .post-sneak {
      img {
        //scale: 1.2;
        opacity: 1;
        filter: blur(2px);
      }
    }
  }

  &:active { scale: 0.9; }


}
</style>

// Content