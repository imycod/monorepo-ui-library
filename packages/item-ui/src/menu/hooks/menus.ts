// @ts-nocheck
import { ref, nextTick } from "vue"

export default function createMenus(props) {
    const openedAccordion = ref('');
    const isCollapsed = ref(false);


    const toggleAccordion = async (menuTitle: string): Promise<void> => {
        if (openedAccordion.value === menuTitle) {
            openedAccordion.value = ''; 
        } else {
            if (isCollapsed.value) {
                isCollapsed.value = false;
            }
            openedAccordion.value = menuTitle; 
        }
        await nextTick();
    };

    function toggleSlimMode(): void {
        isCollapsed.value = !isCollapsed.value;
        openedAccordion.value = '';
    }

    return {
        isCollapsed,
        openedAccordion,
        toggleAccordion,
        toggleSlimMode,
    }
}