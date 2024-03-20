<template>
  <main>
    <div class="parallaxContainer" v-parallax="{ speed: 0.02 }" style="background-color: red;">
      Parallax speed: 0.02
    </div>
    <div class="parallaxContainer" v-parallax="{ speed: -0.2 }" style="background-color: blue; color: white; transform: translate(-50px, 0px)">
      Parallax speed: -0.2, additional transform set via style
    </div>
    <div class="parallaxContainer transformViaClass" v-parallax="{ speed: 0.5 }"  style="background-color: green;">
      Parallax speed: 0.5, additional transform set via class
    </div>
    <div class="parallaxContainer" v-parallax="{ speed: 1 }" style="background-color: yellow;">
      Parallax speed: 1
    </div>
    <div class="parallaxContainer" v-parallax="{ speed: 2 }" style="background-color: lime;">
      Parallax speed: 2
    </div>
    <div id="regularContent">Regular content.</div>
    <div class="parallaxContainer" v-parallax="{ speed: 0.5 }" style="background-color: gray;">
      Parallax speed: 0.5
      Way further down
    </div>
    <div class="parallaxContainer" v-parallax="{ speed: 1 }" style="background-color: gray;">
      Parallax speed: -1
      Way further down
    </div>
  </main>
</template>

<script setup>
</script>

<style>
main {
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 100vh;
}

.parallaxContainer {
  padding: 80px;
}

.transformViaClass {
  transform: translate3d(200px, 0px, 0px);
}

#regularContent {
  position: relative;
  min-height: 100vh;
  color: white;
  font-size: 30px;
  background-color: black;
  box-sizing: border-box;
}
</style>