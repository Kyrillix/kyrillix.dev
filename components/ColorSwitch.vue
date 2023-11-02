<template>
  <main>
    <button aria-label="Color Mode"
            @click="onClick">
      <ColorScheme placeholder="...">
        <i v-if="colorMode.value === 'dark'" class="fa-solid fa-lightbulb"/>
        <i v-else class="fa-solid fa-moon"/>
      </ColorScheme>
    </button>
  </main>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))

console.log(colorMode.preference)
</script>
<style  scoped lang="scss">

</style>
