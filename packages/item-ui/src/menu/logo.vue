<script setup lang="ts">
import moreSysIcon from "../assets/moreSys.svg";
import collapsedIcon from "../assets/collapsed.svg";

defineProps({
  isCollapsed: {
    type: Boolean,
    default: false,
  },
})

const more = (t: Boolean) => {
  emit("more", t);
};

const onToggleSlimMode = () => {
};
</script>
<template>
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
  <template>

  </template>

  <style scoped>

  </style>