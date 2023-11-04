<script setup>
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="de">de</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
