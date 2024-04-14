import { ref, reactive } from "vue"
export default function createMoreSystem() {
    const moreSysOpen = ref(false);
    const applicationLoading = ref(true);


    const changeMoreSysOpen = (val) => {
        applicationLoading.value = true
        moreSysOpen.value = val;
        applicationLoading.value = false
    };


    return {
        moreSysOpen,
        applicationLoading,
        changeMoreSysOpen,
    }
}