// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypePresetMinify from 'rehype-preset-minify';
import mdx from '@astrojs/mdx';

export default defineConfig({
    integrations: [tailwind({}), mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      remarkPlugins: [remarkBreaks],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypePresetMinify],  
      gfm: true,
    })],
    site: 'https://PepperSauce0712.github.io/',
    base: '',
    publicDir: './public',
});