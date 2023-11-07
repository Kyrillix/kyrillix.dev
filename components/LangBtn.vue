<template>
  <div @click="toggleDropdown" @mouseleave="closeDropdown" class="dropdown">
    <button>
      <i class="fa-solid fa-language" />
    </button>
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <!-- Dropdown-Inhalt -->
      <ul>
        <li @click="selectLanguage('de')">
          <img src="../assets/svg/lang/de.svg" alt="de">
          <p>Deutsch</p>
        </li>
        <li @click="selectLanguage('en')">
          <img src="../assets/svg/lang/us.svg" alt="en">
          <p>Englisch</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n()
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  if (isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
};

const selectLanguage = (language: string) => {
  localStorage.setItem('lang', language);
  setLocale(language); // Setze die locale auf den ausgewählten Wert
  isDropdownOpen.value = false; // Schließe das Dropdown nach der Auswahl
};
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
