<script setup lang="ts">
const a: any = ref<{ message: string }>();
const res = await $fetch("/");
const abc = "";
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLink href="/"> Hello </NuxtLink>
  </div>
</template>
