<template>
  <el-sub-menu class="unis-sub-menu_item" :class="collapse ? `is-collapse` :'' " id="unis-menu-sub--container"
               :expand-close-icon="Plus"
               :expand-open-icon="Minus"
               v-if="data.children" :index="data.path">
    <template #title>
      <!-- <i :class="'el-icon-' + data.icon"></i> -->
      <!-- <i-ep-add-location /> -->
      <el-icon :size="20">
        <!--        <Location/>-->
        <!--        <i-ep-add-location />-->
        <!--        <Icon :icon="data.icon" />-->
        <i class="iconfont" :class="data.icon"></i>
      </el-icon>
      <span>{{ data.title }}</span>
    </template>
    <menu-item v-for="child in data.children" :active-menu="activeMenu" :collapse="collapse"
               className="unis-sub-menu__item" :data="child"></menu-item>
  </el-sub-menu>
  <el-menu-item :class="className" v-else :index="data.path">
    <el-icon :size="20">
      <!--      <i-ep-apple></i-ep-apple>-->
      <!--      <Icon :icon="data.icon" />-->
      <i class="iconfont" :class="data.icon"></i>
    </el-icon>
    <span>{{ data.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import {MenuItem as MenuItemType} from "./types"
import Minus from "./minus.vue"
import Plus from "./plus.vue"
// import { Icon } from '@iconify/vue';

// import {
//   Location,
// } from '@element-plus/icons-vue'

defineProps<{
  data: MenuItemType;
  activeMenu: MenuItemType;
  className: string;
  collapse: boolean;
}>()
</script>

<style lang="scss">
.unis-item_menu--popper {
  --el-popover-bg-color: #1d1e1f !important;
  --el-bg-color-overlay: #1d1e1f !important;
  --el-popover-font-size: 14px;
  --el-popover-border-color: #363637 !important;
  --el-popover-padding: 12px;
  --el-popover-padding-large: 18px 20px !important;
  --el-popover-title-font-size: 16px;
  --el-popover-title-text-color: #E5EAF3 !important;
  --el-popover-border-radius: 4px;

}
:deep(.el-popper.unis-item_menu--popper) {
  background: var(--el-bg-color-overlay) !important;
}
.common-title {
  font-family: 'Helvetica Neue';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.el-menu-item:hover {
  color: var(--el-menu-hover-text-color);
}

.el-sub-menu__title:hover {
  color: var(--el-menu-hover-text-color);
}

.unis-sub-menu__item {
  .el-sub-menu__title {
    @apply common-title;
  }
}

.unis-sub-menu_item {
  .el-sub-menu__title {
    @apply common-title;
  }
}

.unis-sub-menu__item {
  @apply common-title;
}

.unis-menu_item {
  @apply common-title;
}

.el-sub-menu.is-active {
  .el-sub-menu__title:hover {
    color: #fff;
  }
}

.el-menu-item.is-active {
  color: #fff;
}
</style>

<style lang="scss" scoped>
.unis-menu_item {
  --el-menu-hover-text-color: #c8a0ff !important;
}

.unis-sub-menu_item {
  --el-menu-hover-text-color: #bc8bf8 !important;
}

#unis-menu-sub--container {
  :deep(.el-sub-menu__icon-arrow svg) {
    width: 25px;
    height: 25px;
  }

  :deep(.el-sub-menu .el-sub-menu__icon-arrow) {
    //background-image: url('../assets/plus.svg');
    //background-repeat: no-repeat;
    //background-size: contain;
    //width: 16px;
    //height: 16px;
    //transform: none;
  }
}

.unis-sub-menu_item.is-active {

}

.unis-sub-menu_item.is-active.is-opened {
  :deep(.el-sub-menu__title) {
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

.unis-sub-menu_item.is-active {
  :deep(.unis-sub-menu__item.is-active) {
    color: var(--el-menu-hover-text-color) !important;
  }
}

// collapse
#unis-menu-sub--container.is-active.is-collapse {
  :deep(.el-sub-menu__title) {
    position: relative;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      padding: 0;
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