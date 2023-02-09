<script setup>
  // const { locales } = useI18n()
  // const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="langSwitcher">
<!--    <span style="margin: 0 20px 0 0">{{ $t('change_language') }}</span>-->
<!--    <NuxtLink v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)" class="link">-->
<!--      {{ locale.name }}-->
<!--    </NuxtLink>-->
  </div>
</template>

<style scoped>
  .langSwitcher{
    display: flex;
    justify-content: flex-end;
    margin: 30px 0;
  }
  .langSwitcher .link{
    text-decoration: none;
    color: red;
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
  }
</style>
