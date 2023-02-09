<script setup>
  const localePath = useLocalePath()
</script>

<template>
  <div style="padding: 30px; font-size: 30px; text-align: center">
    {{ $t('header') }}
  </div>
  <div class="menu">
    <nuxt-link :to="localePath({ path: '/' })">{{ $t('menu_home') }}</nuxt-link>
    <nuxt-link :to="localePath({ path: '/country' })">{{ $t('menu_country') }}</nuxt-link>
  </div>
  <LangSwitcher />
</template>

<style scoped>
  .menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
