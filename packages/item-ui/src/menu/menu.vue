<template>
  <!--  <el-config-provider namespace="ep">-->
  <!--  <div id="unis-menu-panel&#45;&#45;container">-->

  <el-menu id="unis-menu--container" class="unis-item_menu" @select="select" router :default-active="defaultActive"
           :collapse="isCollapsed" @open="handleOpen"
           @close="handleClose">
    <div :class="!isCollapsed ? 'flex justify-between' : ''">
      <a class="flex mb-4 items-center w-[150px] h-[56px]" href="/">
        <div v-if="!isCollapsed" style="margin-left: 1.5rem;">
          <slot name="main-logo"></slot>
        </div>
        <div style="margin-bottom: 1rem;margin-left: 0.8rem; " v-else>
          <slot name="sub-logo"></slot>
        </div>
      </a>
      <span :class="['flex items-center', isCollapsed ? 'flex-col justify-center' : '']">
          <!-- 更多子系统按钮 -->
          <a class="icon-wrapper flex mb-4 w-8 h-8 cursor-pointer items-center justify-center bg-black-100 truncate rounded-[8px] pt-0.5 text-[0.85rem] outline-none transition duration-300 ease-linear motion-reduce:transition-none"
             :style="{ 'margin-right': !isCollapsed ? '0.5rem' : '0rem', 'margin-bottom': '16px' }"
             @click="more(true)">
              <img class="icon" :src="moreSysIcon" alt="">
          </a>
        <!-- 折叠按钮 -->
            <a class="icon-wrapper flex mb-4 w-8 h-8 cursor-pointer items-center justify-center bg-black-100 truncate rounded-[8px] pt-0.5 text-[0.85rem] outline-none transition duration-300 ease-linear motion-reduce:transition-none"
               :style="{ 'margin-right': !isCollapsed ? '1rem' : '0rem', 'margin-bottom': isCollapsed ? '10px' : '16px' }"
               @click="onToggleSlimMode()">
                <img class="icon" :src="collapsedIcon" :class="{ 'flip-horizontal': isCollapsed }" alt="">
            </a>
        </span>
    </div>
    <menu-item v-for="menu in data" :data="menu" :activeMenu="activeMenu" :collapse="isCollapsed"
               className="unis-menu_item"></menu-item>
  </el-menu>
  <!--  </div>-->
  <!--  </el-config-provider>-->
</template>

<script setup lang="ts">
// @ts-nocheck
import MenuItem from "./menu-item.vue"
import createMoreSystem from "./hooks/moreSystem"
import createMenus from "./hooks/menus"
import createMask from "./hooks/mask"
import {MenuItem as MenuItemType} from "./types"
import {onMounted} from "vue";
import moreSysIcon from '../assets/moreSys.svg';
import collapsedIcon from '../assets/collapsed.svg';

const props = withDefaults(defineProps<{
  collapse: boolean;
  data: MenuItemType[];
  defaultActive?: string;
}>(), {collapse: false, data: [], defaultActive: '1'});

const emit = defineEmits(['selectApplication', 'more', 'sizeChange', 'collapse', 'open', 'close'])
const {moreSysOpen, applicationLoading, changeMoreSysOpen} = createMoreSystem()
const {isCollapsed, openedAccordion, toggleAccordion, toggleSlimMode} = createMenus(props)
const {isLessMinScreen, removeCoverLayer} = createMask(isCollapsed)

const more = (t: Boolean) => {
  changeMoreSysOpen(t)
  emit('more', t)
}


function flattenMenu(menuList) {
  const flattenedMenu = [];

  function flatten(menu) {
    menu.forEach((item) => {
      flattenedMenu.push({...item});

      if (item.children) {
        flatten(item.children);
      }
    });
  }

  flatten(menuList);
  return flattenedMenu;
}


let flatMenu = null

function initMenu(menuList) {
  flatMenu = flattenMenu(menuList)
}

const activeMenu = ref(null)

function select(index, indexPath) {
  if (indexPath.length < 2) {
    // 一级菜单
    activeMenu.value = flatMenu.find(menu => menu.path === index)
  }
  if (indexPath.length > 1) {
    // 二级菜单
    const nearestIndex = indexPath[indexPath.length - 2]
    // 选中的有没有父级菜单
    const nearestMenu = flatMenu.find(menu => menu.path === nearestIndex)
    activeMenu.value = nearestMenu
  }
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
  initMenu(props.data);
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
});
onUnmounted(() => {
  window.addEventListener('resize', checkWindowSize);
});
</script>

<style lang="scss" scoped>
.unis-item_menu {
  --el-menu-text-color: #fff !important;
  --el-menu-bg-color: rgb(33, 35, 43) !important;
  --el-menu-hover-bg-color: none !important;
  --el-menu-active-color: rgb(255, 255, 255) !important;
}


//:not(.el-menu--collapse)
#unis-menu--container {
  //:deep(.el-menu-item) {
  //  font-family: 'Helvetica Neue';
  //  font-weight: 500;
  //  font-size: 16px;
  //  color: var(--el-menu-active-color);
  //  line-height: 20px;
  //  font-weight: 500;
  //  height: 3rem;
  //  overflow: hidden;
  //  text-overflow: ellipsis;
  //  white-space: nowrap;
  //}

  padding: 32px 0px;

  .icon-wrapper {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: #2b2f3b;
  }

  :deep(.el-menu-item .el-icon) {

  }

  // or .el-menu-item.is-active then remove menu-item unis-sub-menu_item.is-active.is-opened
  // .unis-menu_item
  :deep(.unis-menu_item.is-active) {
    position: relative;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      padding: 0 8px;
      margin: 0 16px;
      border-radius: 8px;
      background-color: rgb(51, 56, 71);
      top: 0;
      left: 0;
      width: 90%;
      height: 100%;
    }
  }
}

#unis-menu--container.el-menu--collapse {
  :deep(.unis-menu_item) {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  :deep(.unis-menu_item.is-active) {
    position: relative;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      padding: 0px;
      margin: 6px 14px;
      border-radius: 8px;
      background-color: rgb(51, 56, 71);
      top: 0;
      left: 0;
      width: 35px;
      height: 35px;
    }
  }
}
</style>