<template>
  <div>
    <!-- routing to the pages directory -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: grayscale(1);
  }
</style>


    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->