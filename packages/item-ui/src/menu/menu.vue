<template>
  <!--  <el-config-provider namespace="ep">-->
  <div id="unis-menu-panel--container">
    <el-menu v-if="!moreSysOpen" id="unis-menu--container" class="unis-item_menu h-full" @select="select" router
             :default-active="defaultActive"
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
    <!-- 3.子系统入口 -->
    <div v-if="moreSysOpen" class="more-sys bg-[var(--Seller-Item-Black-300,_#21232B)] h-full z-10"
         style="height: 100%;">
      <div style="margin-right: 13px;margin-bottom: 16px; width: 347px;height: 32px; display: flex;
    flex-direction: row-reverse;" class="mb-[16px] mr-[13px] flex-initial shrink-0">
        <a @click="more(false)"
           class="icon-wrapper flex ml-auto mb-4 w-8 h-8 cursor-pointer items-center justify-center bg-black-100 truncate rounded-[8px] pt-0.5 text-[0.85rem] outline-none transition duration-300 ease-linear motion-reduce:transition-none">
          <img class="icon" :src="backIcon" alt="">
        </a>
      </div>
      <div class="overflow-y-auto flex-auto px-[24px]" style="padding: 0px 24px;"
           v-loading.body="!applications.length" element-loading-text="loading...">
        <div v-for="(item, index) in applications" :key="index" v-if="isEnable(item)"
             @click="() => emit('selectApplication', item)"
             :title="item.name" class="flex items-center">
          <div class="flex-column w-full app-card--container">
            <div class="cursor-pointer app-card-wrap rounded-lg flex justify-between items-center">
              <div class="flex flex-col justify-start" style="flex-direction: column;">
                <div>
                  <img :src="item.logoFileId" class="app-logo"/>
                </div>

                <div class="pt-2">
                  <div class="app-description">{{ item.description }}</div>
                </div>
              </div>
              <div v-if="item.code === defaultApplicationActive">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.99984 0.379761C4.39984 0.379761 0.666504 4.11309 0.666504 8.71309C0.666504 13.3131 4.39984 17.0464 8.99984 17.0464C13.5998 17.0464 17.3332 13.3131 17.3332 8.71309C17.3332 4.11309 13.5998 0.379761 8.99984 0.379761ZM7.33317 12.8798L3.1665 8.71309L4.3415 7.53809L7.33317 10.5214L13.6582 4.19643L14.8332 5.37976L7.33317 12.8798Z"
                      fill="#34A145"/>
                </svg>
              </div>
            </div>
            <el-divider class="w-full m-0 px-[8px]" v-if="index !== applications.length - 1"/>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div v-if="(!isCollapsed || moreSysOpen) && isLessMinScreen" @click="removeCoverLayer" class="cover-layer z-20">
    </div>
  </div>
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
import backIcon from "../assets/back.svg";

const props = withDefaults(defineProps<{
  collapse: boolean;
  data: MenuItemType[];
  applications: any[];
  defaultActive?: string;
  defaultApplicationActive: string;
}>(), {collapse: false, data: [], defaultActive: '1'});

const emit = defineEmits(['selectApplication', 'more', 'sizeChange', 'collapse', 'open', 'close'])
const {moreSysOpen, applicationLoading, changeMoreSysOpen} = createMoreSystem()
const {isCollapsed, openedAccordion, toggleAccordion, toggleSlimMode} = createMenus(props)
const {isLessMinScreen, removeCoverLayer} = createMask(isCollapsed)

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

const isEnable = () => {
  return (item) => item.status === 'ENABLE';
}

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

//.flip-horizontal{
//  transform: scaleX(-1);
//}

#unis-menu-panel--container {
  .icon-wrapper {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: #2b2f3b;
  }

  .more-sys {
    height: 100vh;
    width: 360px;
    display: block;
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: #21232b;

    .app-card--container {
      height: 78px;

      .app-card-wrap {
        width: 100%;
        height: 69px;
        display: flex;
        align-items: center;
        margin: 4px;
        padding: 4px;

        &:hover {
          border-radius: 8px;
          background: var(--Seller-Item-Black-50, #333847);
        }

        .app-name {
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
          color: #fff;
        }

        .app-description {
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          color: #b3b4b5;
          padding-top: 0px;
          padding-bottom: 3px;
          margin-left: 52px;
          font-family: 'Helvetica Neue';
          font-size: 12px;
        }
      }

      .el-divider--horizontal {
        border-top: 1px solid #4C4D4F;
        margin: 0px !important;
      }
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      @apply bg-gray-800;
    }

    ::-webkit-scrollbar-corner,
    ::-webkit-scrollbar {
      background-color: #f3f2e5;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      @apply bg-gray-500;
    }
  }

  .cover-layer {
    background-color: #00000080;
    bottom: 0;
    left: 360px;
    position: fixed;
    right: 0;
    top: 0;
  }
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