<script setup lang="ts">

</script>

<template>
  <main id="statics">
    <div class="background">
      <section id="header">
        <div id="navigation">
          <nuxt-link class="logo" to="/">
            <p>Kyrillix.</p>
          </nuxt-link>
          <div id="menu-theme">
            <ColorSwitch/>
            <MenuBtn/>
          </div>
        </div>
      </section>
      <section id="about">
      </section>
      <section id="footer">
        <Footer/>
      </section>
      <!--    <div class="side">-->
      <!--      <p>JUST A FEW THOUGHTS, STORIES AND IDEAS</p>-->
      <!--    </div>-->
    </div>
    <div class="foreground">
      <Hero />
    </div>
  </main>
</template>

<style scoped lang="scss">
#statics {
  //max-height: 100vh;
  overflow: hidden;

  .foreground {
    position: absolute;
    z-index: 2;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1/1;
    //width: 70%;
    height: 70%;
    max-height: 50%;
    //background-color: var(--body);
  }

  .background {
    height: 100vh;
    display: grid;
    position: relative;
    z-index: 1;
    grid-template-columns: 1fr;
    grid-template-rows: 40% 1fr 150px;
    grid-template-areas:
      "header"
      "about"
      "footer";

    #header {
      grid-area: header;
      background-image:
          var(--shadow),
          url("../assets/img/background.webp"); // oder statt ".." "~/"
      background-size: cover;
      background-position: center;

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

        #menu-theme {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
    }

    #about {
    }

    #footer {
      grid-area: footer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    //.side {
    //  grid-area: side;
    //  background-color: var(--body);
    //  height: 60vh;
    //  width: 4rem;
    //  bottom: 0;
    //  left: 0;
    //  position: fixed;
    //  align-items: center;
    //  justify-content: center;
    //  display: flex;
    //
    //  p {
    //    text-transform: uppercase;
    //    writing-mode: vertical-lr;
    //    //transition: rotate(180deg);
    //    rotate: 180deg;
    //    font-weight: 500;
    //    font-size: 1.6rem;
    //    letter-spacing: 0.2rem;
    //  }
    //}
  }
}
</style>