<template>
  <main id="app">
    <section id="static">
      <Static />
    </section>
    <section id="dynamic">
      <NuxtPage />
    </section>
  </main>
</template>

<style scoped lang="scss">
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  grid-template-areas: "static dynamic";

  #static {
    grid-area: static;
    background-color: var(--body-darker);
    position: sticky;
    top: 0;
    bottom: 0;
  }

  #dynamic {
    grid-area: dynamic;
  }
}
</style>