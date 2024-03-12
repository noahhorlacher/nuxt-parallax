<template>
  <main>
    <p v-parallax="{ speed: -0.02 }" style="background-color: red; padding: 80px;">
      Parallax speed: -0.02
    </p>
    <p v-parallax="{ speed: -0.2 }" style="background-color: blue; color: white; padding: 80px; transform: translate(-50px, 0px)">
      Parallax speed: -0.2, additional transform set via style
    </p>
    <p v-parallax="{ speed: -0.5 }" class="transformViaClass"  style="background-color: green; padding: 80px;">
      Parallax speed: -0.5, additional transform set via class
    </p>
    <p v-parallax="{ speed: -1 }" style="background-color: yellow; padding: 80px;">
      Parallax speed: -1
    </p>
    <p v-parallax="{ speed: 0.5 }" style="background-color: gray; padding: 80px;">
      Parallax speed: 0.5
    </p>
    <p v-parallax="{ speed: 2 }" style="background-color: lime; padding: 80px;">
      Parallax speed: 2
    </p>
    <div style="position: relative; min-height: 100vh; color: white; font-size: 30px; background-color: black; box-sizing: border-box;">Regular content.</div>
  </main>
</template>

<script setup>
</script>

<style>
main {
  width: 100%;
}

.transformViaClass {
  transform: translate3d(200px, 0px, 0px);
}
</style>