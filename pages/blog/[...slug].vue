<template>
  <article class="prose dark:prose-invert max-w-none">
    <!-- this is part of Nuxt content/blog -->
    <ContentDoc>
      <!-- CONTENT NOT FOUND -->
      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>This blog post could not be found</p>
      </template>
      <template v-slot="{ doc }">
        <!-- content fetcher -->
        <div class="grid grid-cols-6 gap-16">
          <div
            :class="{
              'col-span-6 md:col-span-4': doc.toc,
              'col-span-6': !doc.toc,
            }"
          >
            <!-- MARKDOWN CONTENT RENDERER -->
            <ContentRenderer :value="doc" />
          </div>
          <!-- table of content -->
          <div class="hidden md:col-span-2 md:block not-prose" v-if="doc.toc">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table of Contents</div>
              <!-- communicates with TOCLinks component -->
              <nav>
                <TOCLinks :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
  const activeId = ref(null);
  onMounted(() => {
    const callback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
          break;
        }
      }
    };
    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.5,
    });
    const elements = document.querySelectorAll("h2", "h3");

    for (const element of elements) {
      observer.observe(element);
    }

    // clean up (when user navigate to other page )
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
      for (const element of elements) {
        observer.unobserve(element);
      }
    });
  });
</script> 

prose-pre:bg-white dark:prose-pre:bg-gray-800
 prose-pre:text-gray-700 dark:prose-pre:text-gray-300