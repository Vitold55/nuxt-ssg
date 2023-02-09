<script setup>
  // const localePath = useLocalePath()
</script>

<template>
  <div style="padding: 30px; font-size: 30px; text-align: center">
    Header
  </div>
  <div class="menu">
    <nuxt-link :to="{ path: '/' }">Home</nuxt-link>
    <nuxt-link :to="{ path: '/country' }">Country</nuxt-link>
  </div>
</template>

<style scoped>
  .menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
