<template>
  <div class="posts">
    <PostSneak
        class="gallery-image"
        v-for="post in posts"
        :key="post.Title"
        :post="post"
    />
  </div>
</template>

<script lang="ts" setup>
const {find} = useStrapi();
const {data: posts} = await useAsyncData('posts', () =>
    find<StrapiResponse<StrapiBase<Post>[]>>('posts/?sort[0]=id:desc'), {
  transform: (data: any) => {
    if (data.data) {
      return data.data.map((post: any) => post.attributes);
    } else {
      return null;
    }
  },
});
</script>

<style lang="scss" scoped>
.posts {
  margin: 5%;
  max-height: 50%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  transition: 60ms all;


  &:hover {
    .gallery-image:not(.gallery-image:hover) {
      scale: 0.95;
      opacity: 0.3;
    }
  }

  .gallery-image {
    width: 100%;
    height: 25rem;
    border-radius: 2.5rem;
    transition: 250ms all;
    background-color: var(--body-darker);
    scale: 1;
    position: relative;
    display: grid;

    &:hover {
      scale: 1;
      background-color: var(--body-brighter);

      img {
        // scale: 1.2;
        opacity: 1;
        filter: blur(2px);
      }
    }

    &:active {
      scale: 0.9;
    }
  }
}
</style>

