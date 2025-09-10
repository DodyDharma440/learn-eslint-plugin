import { noFetchComponent } from "../rules/no-fetch-component";
import { createVueTester } from "../utils/tester";

const ruleTester = createVueTester();

ruleTester.run("eslint-plugin/no-fetch-component", noFetchComponent, {
  valid: [
    {
      code: `
        <script setup lang="ts">
        const x = 5;
        </script>
        <template>
        <div>Hello world</div>
        </template>
        `,
    },
    {
      code: `
        <script setup lang="ts">
        const x = 5 as typeof $fetch; 
        </script>
        <template>
        <div>Hello world</div>
        </template>
        `,
    },
  ],
  invalid: [
    {
      filename: "index.vue",
      code: `
        <script setup lang="ts">
        const res = await $fetch('https://...'); 
        </script>
        <template>
        <div>Hello world</div>
        </template>
        `,
      errors: [{ messageId: "issue:no-fetch" }],
    },
    {
      filename: "index.vue",
      code: `
        <script setup lang="ts">
        const res = $fetch('https://...'); 
        </script>
        <template>
        <div>Hello world</div>
        </template>
        `,
      errors: [{ messageId: "issue:no-fetch" }],
    },
    {
      filename: "index.vue",
      code: `
        <script setup lang="ts">
        const res = useAsyncData(() => $fetch('https://...'))
        </script>
        <template>
        <div>Hello world</div>
        </template>
        `,
      errors: [{ messageId: "issue:no-fetch" }],
    },
  ],
});
