<template>
  <!--    post computed property below -->
  <slot :posts="posts">
    <!-- default way -->
    <section class="not-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div>date</div>
        <div>title</div>
      </div>
      <ul>
        <li v-for="post in posts" :key="post._path">
          <NuxtLink
            :to="post._path"
            class="column group hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div
              :class="{
                'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800':
                  !post.displayYear,
                'text-gray-400 dark:text-gray-500': post.displayYear,
              }"
            >
              {{ post.currentYear }}
            </div>
            <div>{{ post.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
  //props limit
  const props = defineProps({
    limit: {
      type: Number,
      // unlimited fetching
      default: null,
    },
  });
  // GETTING THE MARKDOWN FILES
  // querying content (md) inside the content folder
  //query builder
  const { data } = await useAsyncData("blog-list", () => {
    const query = queryContent("/blog")
      .where({ _path: { $ne: "/blog" } })
      .only(["_path", "title", "publishedOn"])
      .sort({ publishedOn: -1 });
    if (props.limit) {
      query.limit(props.limit);
    }
    return query.find();
  });

  // re-declaring the result as computed
  const posts = computed(() => {
    if (!data.value) {
      return [];
    }
    const result = [];
    let lastYear = null;

    for (const post of data.value) {
      const currentYear = new Date(post.publishedOn).getFullYear();
      const displayYear = currentYear !== lastYear;
      //add as properties to the current post object
      post.displayYear = displayYear;
      post.currentYear = currentYear;
      result.push(post);
      //resetting the last year
      lastYear = currentYear;
    }
    return result;
  });
</script>

<style scoped>
  .column {
    @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
  }
</style>