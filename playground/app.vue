<template>
  <main>
    <p v-parallax:options="{ speed: 0.02 }">Parallax speed: 0.02</p>
    <p v-parallax:options="{ speed: 0.2 }">Parallax speed: 0.2</p>
    <p v-parallax:options="{ speed: 0.5 }">Parallax speed: 0.5</p>
    <p v-parallax:options="{ speed: 1 }">Parallax speed: 1</p>
    <p v-parallax:options="{ speed: 2 }">Parallax speed: 2</p>
  </main>
</template>

<script setup>
</script>

<style>
main {
  padding-top: 90vh;
  min-height: 200vh;
  width: 100%;
}
</style>