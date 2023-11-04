<template>
  <div @click="toggleDropdown" @mouseleave="closeDropdown" class="dropdown">
    <button>
      <i class="fas fa-bars" />
    </button>
    <div v-if="isDropdownOpen" class="dropdown-menu" style="z-index: 5 !important">
      <!-- Dropdown-Inhalt -->
      <ul>
        <li>
          <nuxt-link to="/">
            <i class="fa-solid fa-house" />
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="blog">
            <i class="fa-solid fa-blog" />
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="help">
            <i class="fa-solid fa-comment-dots" style="rotate: y 180deg"/>
            Q&A
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="contact">
            <i class="fa-solid fa-envelope" />
            Kontakt
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;

  button {
    .fa-bars {
      font-size: 3rem;
      margin-right: 2rem;
      margin-left: 2rem;
      cursor: pointer;
    }
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 2.6rem;
    background: var(--body-brighter);
    border: 1.5px solid var(--text); // --body-darker
    border-radius: 1rem;
    -moz-border-radius-topright: 0;
    -webkit-border-top-right-radius: 0;
    width: 100px;

    ul {
      margin: 0;
      padding: 0;
      li {
        margin-top: 0.5rem;
        margin-left: 0.75rem;

        :last-child {
          margin-bottom: 0.5rem;
        }

        a {
          font-size: 1.6rem;
          font-weight: 500;
        }
      }
    }
  }

  &:hover {
    .dropdown-menu {
      display: block;
    }
  }
}
</style>
