<template>
  <div class="socialmedia">
    <p>social media</p>
    <div class="socialmedia-links">
      <a
          id="Instagram"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/shots.arw/">
        <i class="fa-brands fa-instagram"/>
      </a>
      <a
          id="YouTube"
          title="YouTube"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/@shots-arw">
        <i class="fa-brands fa-youtube"/>
      </a>
      <a
          id="Xing"
          title="Xing"
          target="_blank"
          rel="noopener noreferrer"
          href="/">
        <i class="fa-brands fa-square-xing"/>
      </a>
      <a
          id="LinkedIn"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          href="/">
        <i class="fa-brands fa-linkedin"/>
      </a>
      <a
          id="GitHub"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Kyrillix">
        <i class="fa-brands fa-github"/>
      </a>
    </div>
  </div>

  <div class="footer">
    <ul>
      <li>&copy; 2023 kyrillix.dev</li>
      <li>
        <nuxt-link to="legalnotice">Impressum</nuxt-link>
      </li>
      <li>
        <nuxt-link to="privacy">Datenschutz</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.socialmedia {
  display: flex;
  grid-area: socialmedia;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--h2);
    background: var(--cf-orange-red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-weight: 700;
    font-size: 2.4rem;
    margin: 0 0 10px;
  }

  .socialmedia-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    a {
      font-size: 3.6rem;
      margin-right: 5rem;

      &:last-child {
        margin-right: 0;
      }

      i {
        font-size: 3rem;
      }
    }

    #Instagram:hover {
      transition: 0.2s;
      background: linear-gradient(
              0deg,
              rgba(254, 218, 117, 1) 0%,
              rgba(250, 126, 30, 1) 15%,
              rgba(214, 41, 118, 1) 47%,
              rgba(150, 47, 191, 1) 77%,
              rgba(79, 91, 213, 1) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #YouTube:hover {
      transition: 0.2s;
      color: #fe0000;
    }

    #Xing:hover {
      transition: 0.2s;
      color: #0598a0;
    }

    #LinkedIn:hover {
      transition: 0.2s;
      color: #0b66c3;
    }

    #GitHub:hover {
      transition: 0.2s;
      color: #6f3fc7;
    }
  }
}

.footer {
  margin: 0;
  padding: 0;
  grid-area: footer;
  height: 40px;

  ul {
    margin: 10px 0 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
      a {
        text-decoration: none;
        font-weight: 400;
        font-size: 1.25rem;
      }

      &:first-child {
        color: var(--orange);
        background: var(--cf-orange-red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 500;
        font-size: 1.25rem;
        padding-right: 2rem;
      }

      &:last-child {
        padding-left: 2rem;
      }
    }
  }
}
</style>