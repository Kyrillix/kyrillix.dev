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

<script lang="ts" setup> // /?sort[0]=id:desc   oder    /?sort[0]=createdAt:desc
// const {find} = useStrapi();
// const {data: posts} = await useAsyncData('posts', () =>
//     find<StrapiResponse<StrapiBase<Post>[]>>('posts'), {
//   transform: (data: any) => {
//     if (data.data) {
//       return data.data.map((post: any) => post.attributes);
//     } else {
//       return null;
//     }
//   },
// });
const { find } = useStrapi();
const sortQueryParam = '?sort=publishedAt:desc'; // Der Sortierparameter für absteigende Reihenfolge

const { data: posts } = await useAsyncData('posts', () =>
    find<StrapiResponse<StrapiBase<Post>[]>>(`posts${sortQueryParam}`), {
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
  margin: 2.5rem;
  max-height: 50%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  transition: 60ms all;

  &:hover {
    .gallery-image:not(.gallery-image:hover) {
      scale: 0.95;
      opacity: 0.3;
    }
  }

}
</style>

