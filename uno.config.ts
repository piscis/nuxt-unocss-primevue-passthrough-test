// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import fsp from 'node:fs/promises'
import fs from 'node:fs'

export default defineConfig({
  content: {
    inline: [
      async () => {
        const ptStyles = './node_modules/primevue/passthrough/tailwind/index.js';
        const ptExists = fs.existsSync(ptStyles);
        if(ptExists === true) {
          const content = await fsp.readFile(ptStyles);
          return content.toString();
        } else {
          return '';
        }
      }
    ],
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
        // include js/ts files
        './formkit.config.ts',
      ],
      // exclude files
      // exclude: []
    },
  },
  presets: [
    presetUno(),
  ],
})
