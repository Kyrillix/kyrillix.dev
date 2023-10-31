<template>
  <div class="posts">
    <ul id="list">
      <PostSneak
          class="gallery-image"
          v-for="post in posts"
          :key="post.Title"
          :post="post"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
const {find} = useStrapi();
const {data: posts} = await useAsyncData('posts', () =>
    find<StrapiResponse<StrapiBase<Post>[]>>('posts'), {
  transform: (data: any) => {
    if (data.data) {
      return data.data.map((post: any) => post.attributes);
    } else {
      return null;
    }
  }
});
</script>

<style lang="scss" scoped>
.posts {
  background-color: var(--body);

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column-reverse;

    &:hover {
      .gallery-image:not(.gallery-image:hover) {
        scale: 0.95;
        opacity: 0.3;
      }
    }
  }
}
</style>

