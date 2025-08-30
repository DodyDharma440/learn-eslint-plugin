import { noHrefNuxtLink } from "../rules/no-href-nuxt-link";
import { createVueTester } from "../utils/tester";

const ruleTester = createVueTester();

ruleTester.run("eslint-plugin/no-href-nuxt-link", noHrefNuxtLink, {
  valid: [
    {
      code: `
        <script setup lang="ts">
        const x = 5;
        </script>
        <template>
        <NuxtLink :to="{ name: 'dashboard' }">Hello world</NuxtLink>
        </template>
        `,
    },
    {
      code: `
        <script setup lang="ts">
        const x = 5 as typeof $fetch; 
        </script>
        <template>
        <NuxtLink :to="'/'">Hello world</NuxtLink>
        </template>
        `,
    },
    {
      code: `
        <script setup lang="ts">
        const x = 5 as typeof $fetch; 
        </script>
        <template>
        <NuxtLink to="/">Hello world</NuxtLink>
        </template>
        `,
    },
  ],
  invalid: [
    {
      code: `
        <template>
        <NuxtLink href="/">Hello world</NuxtLink>
        </template>
        `,
      output: `
        <template>
        <NuxtLink to="/">Hello world</NuxtLink>
        </template>
        `,
      errors: [{ messageId: "issue:no-href" }],
    },
    {
      code: `
        <template>
        <NuxtLink :href="'/'">Hello world</NuxtLink>
        </template>
        `,
      output: `
        <template>
        <NuxtLink :to="'/'">Hello world</NuxtLink>
        </template>
        `,
      errors: [{ messageId: "issue:no-href" }],
    },
  ],
});
