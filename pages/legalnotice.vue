<script setup lang="ts">

</script>

<template>
  <div id="legalNotice">
    <h1>Impressum</h1>

    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
    <p>
      Yannick Steinhäuser<br />
      Altonaer Str. 28<br />
      99085 Erfurt
    </p>

    <h2>Kontakt</h2>
    <p>
      Telefon: +49 (0) 1515 64 32 671<br />
      E-Mail: info@kyrillix.dev
    </p>

    <h2>Redaktionell verantwortlich</h2>
    <p>
      Yannick Steinhäuser<br />
      Altonaer Str. 28<br />
      99085 Erfurt
    </p>

    <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
  </div>
</template>

<style scoped lang="scss">
#legalNotice {
  width: 100%;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--orange);
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>