<template>
  <div class="flex space-x-2 items-center">
    <div class="text-gray-500 text-xs" v-if="nextModeLabel">
      Change to {{ nextMode }}
    </div>
    <button
      @click="toggleMode"
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base"
      @mouseenter="nextModeLabel = true"
      @mouseleave="nextModeLabel = false"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script setup>
  // for the label
  const nextModeLabel = ref(false);
  const colorMode = useColorMode();
  const modes = [
    "light", // 1
    "dark", // 2
  ]; // length = 3

  const nextModeIcons = {
    light: "🌕",
    dark: "🌑",
  };

  const nextMode = computed(() => {
    //                       preference holds the current colorMode
    const currentModeIndex = modes.indexOf(colorMode.preference);
    let nextModeIndex = null;

    //from 'dark' to 'system'
    if (currentModeIndex + 1 === modes.length) {
      nextModeIndex = 0;
    } else {
      nextModeIndex = currentModeIndex + 1;
    }

    return modes[nextModeIndex];
  });

  const nextModeIcon = computed(() => {
    return nextModeIcons[nextMode.value];
  });

  const toggleMode = () => {
    colorMode.preference = nextMode.value;
  };
</script>