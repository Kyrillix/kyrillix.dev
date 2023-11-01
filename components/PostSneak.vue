<template>
    <a :href="`/${post.Slug}`">
      <div class="main-info">
        <h3 class="Title">{{ post.Title }}</h3>
        <p id="Category" :class="categoryClass">
          <i v-if="categoryIcon" :class="`fa-solid ${categoryIcon}`" />
          {{ post.Category }}
        </p>
        <p class="Intro">{{ post.Intro }}</p>
        <p class="published"><i class="fa-solid fa-calendar-days" /> {{ published }}</p>
      </div>
<!--      <img :src="post.CoverURL" alt="cover" class="cover"/>-->
      <span class="cover" :style="{ backgroundImage: `url(${post.CoverURL})` }"/>
    </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  post: Post;
}>();

const published = new Date(props.post.publishedAt).toLocaleDateString(
    'de-DE'
);

// Funktion zur Berechnung der Kategorie-Klasse basierend auf dem Textinhalt
const categoryClass = computed(() => {
  const categoryText = props.post.Category;
  if (categoryText === 'Blog') {
    return 'blog';
  } else if (categoryText === 'IT') {
    return 'it';
  } else if (categoryText === 'WebDev') {
    return 'webdev';
  } else if (categoryText === 'Photography') {
    return 'photography';
  }
  return ''; // Standardklasse, wenn keine Übereinstimmung gefunden wird
});

// Funktion zur Berechnung des Icons basierend auf der Kategorie
const categoryIcon = computed(() => {
  const categoryIconType = props.post.Category;
  if (categoryIconType === 'Blog') {
    return 'fa-blog';
  } else if (categoryIconType === 'IT') {
    return 'fa-server';
  } else if (categoryIconType === 'WebDev') {
    return 'fa-code';
  } else if (categoryIconType === 'Photography') {
    return 'fa-camera';
  }
  return ''; // Standard-Icon, wenn keine Übereinstimmung gefunden wird
});
</script>

<style lang="scss" scoped>
.gallery-image {
  display: grid;
  grid-template-columns: auto 25rem;
  grid-template-rows: 100%;
  grid-template-areas: 'main cover';
  overflow: hidden;
  width: 100%;
  border-radius: 2.5rem;
  transition: 250ms all;
  background-color: var(--body-darker);
  scale: 1;
  position: relative;

  &:active {
    scale: 0.9;
  }

  &:hover {
    scale: 1;
    background-color: var(--body-brighter);

    .cover {
      scale: 1.2;
      opacity: 1;
      transition: 250ms all;
      filter: blur(0);
      -webkit-filter: blur(0);
    }
  }

  .main-info {
    margin-top: 2.5rem;
    margin-left: 2.5rem;
    .Title {}
    #Category {}
    .Intro {}
    .published {}

    .blog {
      color: red;
    }
    .it {
      color: blue;
    }
    .photography {
      color: green;
    }
    .webdev {
      color: yellow;
    }
  }

  .cover {
    grid-area: cover;
    height: 25rem;
    width: 25rem;
    background-size: cover;
    background-position: center;
    filter: blur(7.5px);
    -webkit-filter: blur(7.5px);
  }
}
</style>