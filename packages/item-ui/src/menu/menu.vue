<template>
    <button class="rounded-md bg-primary shadow-md text-white p-2 absolute top-2 right-2">测试</button>
    <el-menu router width="360" :default-active="defaultActive" :collapse="isCollapsed" @open="handleOpen"
        @close="handleClose">
        <template v-for="menu in data">
            <menu-item :data="menu"></menu-item>
        </template>
    </el-menu>
</template>

<script setup lang="ts">
// @ts-nocheck
import MenuItem from "./menu-item.vue"
import createMoreSystem from "./hooks/moreSystem"
import createMenus from "./hooks/menus"
import createMask from "./hooks/mask"
import { MenuItem as MenuItemType } from "./types"

const props = withDefaults(defineProps<{
    collapse: boolean;
    data: MenuItemType[];
    defaultActive?: string;
}>(), { collapse: false, data: [], defaultActive: '1' });

const emit = defineEmits(['selectApplication', 'more', 'sizeChange', 'collapse', 'open', 'close'])
const { moreSysOpen, applicationLoading, changeMoreSysOpen } = createMoreSystem()
const { isCollapsed, openedAccordion, toggleAccordion, toggleSlimMode } = createMenus(props)
const { isLessMinScreen, removeCoverLayer } = createMask(isCollapsed)

const more = (t: Boolean) => {
    changeMoreSysOpen(t)
    emit('more', t)
}

const handleOpen = (key: string, keyPath: string[]) => {
    emit('open', key, keyPath);
}
const handleClose = (key: string, keyPath: string[]) => {
    emit('close', key, keyPath);
}

const onToggleAccordion = (menuTitle) => {
    toggleAccordion(menuTitle)
    emit('collapse', isCollapsed.value)
}
const onToggleSlimMode = () => {
    toggleSlimMode()
    emit('collapse', isCollapsed.value)
}

const checkWindowSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1366) {
        isLessMinScreen.value = true;
        isCollapsed.value = true;
        emit('sizeChange', {
            isCollapse: isCollapsed.value,
            isLessMinScreen: isLessMinScreen.value
        })
    } else {
        isLessMinScreen.value = false;
        isCollapsed.value = false;
        emit('sizeChange', {
            isCollapse: isCollapsed.value,
            isLessMinScreen: isLessMinScreen.value
        })
    }
};

// watch(() => props.data, (v) => {
//     initMenu(v)
// })
// const initMenu = (v) => {
//     if (props.position) {
//         const index = v.findIndex(menu => {
//             console.log(menu);

//             if (menu.index) {
//                 return menu.index == props.position
//             } else {
//                 throw new Error('menu item no index');
//             }
//         })
//         if (index !== -1) {
//             const [menuList1, menuList2] = [v.slice(0, index), v.slice(index)]

//             sideMenu.value = menuList1
//             bottomMenu.value = menuList2
//         }
//     }
// }

onMounted(() => {
    // initMenu(props.data);
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
});
onUnmounted(() => {
    window.addEventListener('resize', checkWindowSize);
});
</script>