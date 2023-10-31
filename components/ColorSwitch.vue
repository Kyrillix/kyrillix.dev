<template>
  <main>
    <button aria-label="Color Mode"
            @click="onClick">
      <ColorScheme placeholder="...">
        <i v-if="colorMode.value === 'dark'" class="fa-solid fa-moon"/>
        <i v-else class="fa-solid fa-lightbulb"/>
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
.fa-moon:hover {
  transition: all 0.3s ease;
  text-shadow: var(--hover-cyan);
  color: var(--cyan);
}
.fa-lightbulb:hover {
  transition: all 0.3s ease;
  text-shadow: var(--hover-orange);
  color: var(--h2);
}
</style>
