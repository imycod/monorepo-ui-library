import { ref } from 'vue';
export default function createMoreSystem() {
  const moreSysOpen = ref(false);
  const applicationLoading = ref(true);

  const changeMoreSysOpen = (val:boolean) => {
    applicationLoading.value = true;
    moreSysOpen.value = val;
    applicationLoading.value = false;
  };

  return {
    moreSysOpen,
    applicationLoading,
    changeMoreSysOpen,
  };
}
