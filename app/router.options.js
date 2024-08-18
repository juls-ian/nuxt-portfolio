// import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    // to and from are route locations
    //savedPosition is any saved pos of scrolling
    if (savedPosition) {
      return savedPosition;
    }
    //
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 30,
      };
    }
    return { left: 0, top: 0, behavior: "smooth" };
  },
};
