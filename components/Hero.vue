<script setup lang="ts">

</script>

<template>
  <section id="hero">
    <div class="hero-top">
      <div class="hero-top-left">
        <h1>Lorem ipsum dolor </h1>
        <h1>sit <span>amet</span>, consetetur</h1>
      </div>
      <div class="hero-top-right">
        <i class="fa-solid fa-circle" style="font-size: 1rem;"/>
        <p>About me</p>
      </div>
    </div>
    <div class="hero-bottom">
      <nuxt-link to="webdev" class="webdev">
        <p>WebDev</p>
      </nuxt-link>
      <nuxt-link to="it" class="it">
        <p>IT</p>
      </nuxt-link>
      <nuxt-link to="photography" class="photography">
        <p>Photography</p>
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
#hero {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .hero-top {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .hero-top-right {
      height: 100%;
      width: 30%;
      background-color: var(--body);
      border-radius: 1rem;
    }
  }
  .hero-bottom {
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: row;

    a {
      width: calc(100% / 3);
      height: 100%;
      background-size: cover;
      background-position: center;
      border-radius: 1rem;
      overflow: hidden;
      margin-top: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;

      &:hover {
        p {
          font-size: 2rem;
        }
      }

      p {
        font-weight: 700;
        font-size: 1.8rem;
        transition: all 0.4s ease;
      }
    }
    .webdev {
      background-image:
          var(--shadow),
          url("../assets/img/hero/webdev.webp");
      margin-right: 1rem;

      &:hover {
        box-shadow: var(--hover-magenta);

        p {
          color: var(--magenta);
        }
      }
    }
    .it {
      background-image:
          var(--shadow),
          url("../assets/img/hero/it.webp");
      margin-left: 1rem;
      margin-right: 1rem;
      margin-top: 0;

      &:hover {
        box-shadow: var(--hover-blue);

        p {
          color: var(--blue);
        }
      }
    }
    .photography {
      background-image:
          var(--shadow),
          url("../assets/img/hero/photography.webp");
      margin-left: 1rem;

      &:hover {
        box-shadow: var(--hover-lime);

        p {
          color: var(--lime);
        }
      }
    }
  }
}
</style>