<script setup lang="ts">
import {ref} from 'vue';

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<template>
  <main id="static">
    <section id="navigation">
      <nuxt-link class="logo" to="/">
        <img src="~/assets/img/k-logo.png" alt="">
        <p>yrillix</p>
      </nuxt-link>
      <ul>
        <li>
          <nuxt-link class="a" to="/"><i class="fa-solid fa-house nav-icon"/>Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="a" to="about"><i class="fa-solid fa-info nav-icon"/>About</nuxt-link>
        </li>
        <li>
          <div class="dropdown a">
            <button class="dropbtn" @click="toggleDropdown">
              <i class="fa-solid fa-bars nav-icon"/>
              Services
            </button>
            <div v-if="showDropdown" class="dropdown-content">
              <nuxt-link class="a first" to="photography">
                <i class="fa-solid fa-camera nav-icon"/>
                Photography
              </nuxt-link>
              <nuxt-link class="a second" to="it">
                <i class="fa-solid fa-server nav-icon"/>
                IT-Support
              </nuxt-link>
              <nuxt-link class="a three" to="development">
                <i class="fa-solid fa-code nav-icon"/>
                WebDev
              </nuxt-link>
            </div>
          </div>
        </li>
        <li>
          <nuxt-link class="a" to="contact"><i class="fa-solid fa-envelope nav-icon"/>Kontakt</nuxt-link>
        </li>
        <li><p>|</p></li>
<!--        <li class="a"><i class="fa-solid fa-language"/></li>-->
        <li>
          <ColorSwitch/>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped lang="scss">
#static {
  #navigation {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .logo {
      display: flex;
      flex-direction: row;
      img {
        height: 48px;
      }
      p {
        margin-top: 1rem;
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: 0.25rem;
      }
    }
    ul {
      align-items: center;
      display: flex;
      flex-direction: row;

      li {
        margin-right: 1rem;
        a,p {
          font-family: 'Roboto', sans-serif;
          font-size: 1.5rem;
          text-transform: uppercase;

          i {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.dropdown {
  position: relative;
  display: inline-block;

  /* Zeigen Sie den Dropdown-Inhalt, wenn der Knopf angeklickt wird */
  &:hover {
    .dropdown-content {
      display: block;
    }
  }

  /* Stil für den Dropdown-Knopf */
  .dropbtn {
    color: var(--text);
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  /* Stil für den Dropdown-Inhalt */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--body-brighter);
    min-width: 150px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    /* Stil für die Links im Dropdown-Inhalt */
    .a {
      color: var(--text);
      padding: 8px 6px;
      text-decoration: none;
      display: block;
      transition: all 0.3s ease;
    }

    /* Stil für die Links beim Überfahren mit der Maus */
    .first:hover {
      text-shadow: var(--hover-orange);
      color: var(--h2);
    }

    .second:hover {
      text-shadow: var(--hover-cyan);
      color: var(--cyan);
    }

    .three:hover {
      text-shadow: var(--hover-green);
      color: var(--green);
    }
  }
}
</style>