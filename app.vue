<template>

  <!-- WebGL Background -->
  <client-only>
    <LazyHero/>
  </client-only>

  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>

  <!-- Dynamic Cursor Element -->
  <client-only>
    <LazyCursor/>
  </client-only>

</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Safwan Ibrahim — Backend Developer',
  htmlAttrs: {
    lang: 'en-US',
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'description', content: 'Backend developer focused on building reliable systems and threat handling.' },
    { name: 'theme-color', content: '#7a4fee' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Safwan Ibrahim | Backend Developer' },
    { property: 'og:description', content: 'Backend developer focused on building reliable systems and threat handling.' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Safwan Ibrahim | Backend Developer' },
    { name: 'twitter:description', content: 'Backend developer focused on building reliable systems and threat handling.' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon-notext.svg' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
    },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
  ],
});
</script>