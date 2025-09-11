<script setup lang="ts">
import { $fetch } from "ofetch";

const example = async <T>(h: T) => {
  console.log(h);
  const data = await $fetch("");
};

interface Example {
  message: string;
}

example<{ message: string }>({ message: "Hello World" });
</script>

<template>
  <div>{{ example({ message: "String" }) }}</div>
  <NuxtLink :to="'/'">Some Link</NuxtLink>
  <NuxtLink :to="'/'">Some Link</NuxtLink>
</template>
