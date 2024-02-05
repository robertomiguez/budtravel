import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore(
  'settingsStore',
  () => {
    const iataCode = ref<string>();
    const loading = ref<boolean>(false);
    return {
      iataCode,
      loading,
    };
  },
  { persist: true }
);
