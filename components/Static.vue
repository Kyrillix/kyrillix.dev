<script setup lang="ts">

</script>

<template>
  <main id="static">
    <section id="navigation">
      <nuxt-link class="logo" to="/">
        <p>Kyrillix.</p>
      </nuxt-link>
      <i class="fa-solid fa-bars"/>
    </section>
    <ColorSwitch/>
    <div class="side">
      <p>JUST A FEW THOUGHTS, STORIES AND IDEAS</p>
    </div>
  </main>
</template>

<style scoped lang="scss">
#static {
  background-image:
      var(--shadow),
      url("~/assets/img/main-background.webp");
  background-size: cover;
  background-position: center;
  height: 100vh;

  #navigation {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      p {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 4rem;
        margin-left: 2.5rem;
        margin-top: 1rem;
        letter-spacing: 0.25rem;
      }
    }
    .fa-bars {
      font-size: 3rem;
      margin-top: 2rem;
      margin-right: 2rem;
      cursor: pointer;
      transition: 250ms all;
    }
  }
  .side {
    background-color: var(--body);
    height: 60vh;
    width: 4rem;
    bottom: 0;
    left: 0;
    position: fixed;
    align-items: center;
    justify-content: center;
    display: flex;

    p {
      text-transform: uppercase;
      writing-mode: vertical-lr;
      transition: rotate(180deg);
      font-weight: 500;
      font-size: 1.6rem;
      letter-spacing: 0.2rem;
    }
  }
}
</style>