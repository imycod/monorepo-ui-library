<template>
  <el-sub-menu class="item-menu-sub-item" id="item-sub-menu"
               :expand-close-icon="Plus"
               :expand-open-icon="Minus"
               v-if="data.children" :index="data.path">
    <template #title>
      <!-- <i :class="'el-icon-' + data.icon"></i> -->
      <!-- <i-ep-add-location /> -->
      <el-icon :size="20">
        <Location/>
      </el-icon>
      <span>{{ data.title }}</span>
    </template>
    <menu-item v-for="child in data.children" :data="child"></menu-item>
  </el-sub-menu>
  <el-menu-item class="item-menu-item" v-else :index="data.path">
    <el-icon :size="20">
      <Location/>
    </el-icon>
    <span>{{ data.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import {MenuItem as MenuItemType} from "./types"
import Minus from "./minus.vue"
import Plus from "./plus.vue"
import {
  Location,
} from '@element-plus/icons-vue'

defineProps<{
  data: MenuItemType;
}>()
</script>

<style lang="scss">
.el-menu-item:hover {
  color: var(--el-menu-hover-text-color);
}

.el-sub-menu__title:hover {
  color: var(--el-menu-hover-text-color);
}
</style>

<style lang="scss" scoped>
.item-menu-item {
  --el-menu-hover-text-color: #cabffd !important;
}

.item-menu-sub-item {
  --el-menu-hover-text-color: #cabffd !important;
}

#item-sub-menu {
  :deep(.el-icon svg) {
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
</style>