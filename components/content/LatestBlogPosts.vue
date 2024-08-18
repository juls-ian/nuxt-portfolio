<template>
  <!--         -->
  <BlogPosts v-slot="{ posts }" :limit="limits">
    <div v-for="post in posts" :key="post.title">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script setup>
  //redeclaring this prop from BlogPosts??
  defineProps({
    limits: {
      type: Number,
      // unlimited fetching
      default: null,
    },
  });
</script>