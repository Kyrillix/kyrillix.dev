<template>
  <main id="blogpost">
    <section id="cover-author" :style="{ backgroundImage: `url(${post.CoverURL})` }">
      <div class="author">
        <img src="../assets/img/avatar.webp" alt="author">
        <p>{{ post.Author }}</p>
      </div>
      <!--      <img :src="post.CoverURL" alt="cover">-->
    </section>
    <section id="title-published">
      <span id="Category" :class="categoryClass">
          <i v-if="categoryIcon" :class="`fa-solid ${categoryIcon}`"/>
          {{ post.Category }}
        </span>
      <h1>{{ post.Title }}</h1>
      <p class="intro-meta">
        <span class="date">veröffentlicht am {{ published }}</span>
      </p>
    </section>
    <section id="intro">
      <p class="intro-text">{{ post.Intro }}</p>
    </section>
  </main>
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
#blogpost {
  background-color: var(--body);
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25rem 9rem 9rem 6rem;
  grid-template-areas:
    "cover-author"
    "space"
    "title-published"
    "intro";

  #cover-author {
    border-radius: 2rem;
    width: 100%;
    grid-area: cover-author;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;

    .author {
      margin-top: 20.75rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        height: 7.5rem;
        width: 7.5rem;
        border-radius: 100%;
        border: 1rem solid var(--body);
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
        letter-spacing: 0.25rem;
        text-transform: uppercase;
      }
    }
  }

  #title-published {
    grid-area: title-published;
    margin-left: 2rem;
    margin-right: 2rem;

    #Category {
      font-weight: 600;
      font-size: 1.3rem;

      i { font-size: 1.3rem; }
    }
    .blog { color: var(--orange); }
    .it { color: var(--blue); }
    .photography { color: var(--green); }
    .webdev { color: var(--magenta); }
  }

    h1 {
      font-weight: 600;
      font-size: 2.2rem;
      margin-top: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.25rem;
    }

    .intro-meta {
      font-weight: 500;
      font-size: 1.3rem;
      .date {

      }
  }

  #intro {
    grid-area: intro;
    margin-left: 2rem;
    margin-right: 2rem;

    .intro-text {
      font-size: 1.4rem;
      text-align: justify;
    }
  }
}
</style>