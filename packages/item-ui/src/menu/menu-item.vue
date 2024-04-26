<template>
  <el-sub-menu class="unis-sub-menu_item" :class="[collapse ? `is-collapse` : null, data.special?'special':null]"
               id="unis-menu-sub--container"
               :expand-close-icon="Plus" :expand-open-icon="Minus" v-if="data.children"
               :index="data.path">
    <template #title>
      <el-icon :size="20">
        <i class="iconfont" v-if="data._isIconFont" :class="data.icon"></i>
        <Icon :icon="data.icon" v-else/>
      </el-icon>
      <span>{{ data.title }}</span>
    </template>
    <div :style="specialStyle(data)">
      <menu-item @handleMenuClick="handleMenuClick" @handleIconClick="handleIconClick" v-for="child in data.children" :active-menu="activeMenu"
                 :collapse="collapse"
                 className="unis-sub-menu__item" :data="child"></menu-item>
    </div>
  </el-sub-menu>
  <el-menu-item @click="handleMenuClick(data)" :class="className" v-else :index="data.path">
    <el-icon :size="20">
      <i v-if="data._isIconFont" @click.stop="handleIconClick(data)" :class="data.icon"></i>
      <Icon :icon="data.icon" v-else/>
    </el-icon>
    <span>{{ data.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import {MenuItem as MenuItemType} from "./types"
import Minus from "./minus.vue"
import Plus from "./plus.vue"
import {Icon} from '@iconify/vue';


// import {
//   Location,
// } from '@element-plus/icons-vue'

defineProps<{
  data: MenuItemType;
  activeMenu: MenuItemType;
  className: string;
  collapse: boolean;
}>()

const specialStyle = computed(() => {
  return (data: MenuItemType) => {
    return data.special ? {
      'height': data.scrollY + 'px',
      'overflow-y': 'auto'
    } : null;
  }
})


const emit = defineEmits(['handleMenuClick', 'handleIconClick'])

function handleMenuClick(data) {
  emit('handleMenuClick', data)
}

function handleIconClick(data) {
  emit('handleIconClick', data)
}
</script>

<style lang="scss">
.unis-item_menu--popper {
  background: #1d1e1f !important;
  background-color: #1d1e1f !important;

  .el-menu-item:hover,
  .el-sub-menu__title:hover {
    //color: var(--item-ship-menu-hover-text-color) !important;
    background-color: var(--item-ship-bg-color);
  }

  .el-menu--popup {
    background-color: var(--item-ship-bg-color);

    ::-webkit-scrollbar {
      width: 1px;
    }

    span, .el-icon {
      color: #fff;
    }

    //&:hover {
    //  span {
    //    color: var(--item-ship-menu-hover-text-color) !important;
    //  }
    //}
  }
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

.unis-menu_item:hover {
  color: var(--el-menu-hover-text-color);
}

.unis-sub-menu_item:not(.special) {
  .unis-sub-menu__item:hover {
    color: var(--el-menu-hover-text-color);
  }
}

.unis-sub-menu_item.special {
  .unis-sub-menu__item:hover {
    span {
      color: var(--el-menu-hover-text-color);
    }
  }

  .el-menu {
    ::-webkit-scrollbar {
      width: 1px;
    }
  }
}

//.el-menu-item:not(.el-icon):hover{
//  color: var(--el-menu-hover-text-color);
//}

.el-sub-menu__title:hover {
  color: var(--el-menu-hover-text-color);
}

.unis-sub-menu__item {
  .el-sub-menu__title {
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 16px !important;
    line-height: 20px;
    font-weight: 500;
    height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.unis-sub-menu_item {
  .el-sub-menu__title {
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 16px !important;
    line-height: 20px;
    font-weight: 500;
    height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.unis-sub-menu__item {
  font-family: 'Helvetica Neue';
  font-weight: 500;
  font-size: 16px !important;
  line-height: 20px;
  font-weight: 500;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.unis-menu_item {
  font-family: 'Helvetica Neue';
  font-weight: 500;
  font-size: 16px !important;
  line-height: 20px;
  font-weight: 500;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

//.el-sub-menu.is-active {
.unis-sub-menu_item.is-active {
  .el-sub-menu__title:hover {
    color: #fff;
  }
}

//.el-menu-item.is-active {
.unis-menu_item.is-active {
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

.unis-sub-menu_item.special.is-active {
  :deep(.unis-sub-menu__item.is-active) {
    span {
      color: var(--el-menu-hover-text-color) !important;
    }
  }
}

#unis-menu-sub--container.is-collapse {
  :deep(.el-sub-menu__icon-arrow) {
    z-index: -100;
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
      margin: 7px 14px;
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