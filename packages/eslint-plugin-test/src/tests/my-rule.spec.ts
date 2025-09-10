import { myRule } from "../rules/my-rule";
import { createVueTester } from "../utils/tester";

const ruleTester = createVueTester();

ruleTester.run("my-rule", myRule, {
  valid: [
    {
      code: `
    <script setup lang="ts">const x = 5;</script>
    <template>
    <div>Hello world</div>
    </template>
    `,
    },
    {
      code: `let x: string = "hello";`,
    },
  ],
  invalid: [
    {
      code: `<script setup lang="ts">var x = 5;</script>
    <template>
    <div>Hello world</div>
    </template>`,
      output: `<script setup lang="ts">const x = 5;</script>
    <template>
    <div>Hello world</div>
    </template>`,
      errors: [
        {
          messageId: "issue:var",
          suggestions: [
            {
              messageId: "fix:let",
              output: `<script setup lang="ts">let x = 5;</script>
    <template>
    <div>Hello world</div>
    </template>`,
            },
            {
              messageId: "fix:const",
              output: `<script setup lang="ts">const x = 5;</script>
    <template>
    <div>Hello world</div>
    </template>`,
            },
          ],
        },
      ],
    },
  ],
});
