<template>
    <el-sub-menu v-if="data.children" :index="data.path">
        <template #title>
            <!-- <i :class="'el-icon-' + data.icon"></i> -->
            <!-- <i-ep-add-location /> -->
            <el-icon :size="20">
                <Location />
            </el-icon>
            <span>{{ data.title }}</span>
        </template>
        <menu-item v-for="child in data.children" :data="child"></menu-item>
    </el-sub-menu>
    <el-menu-item v-else :index="data.path">
        <el-icon :size="20">
            <Location />
        </el-icon>
        <span>{{ data.title }}</span>
    </el-menu-item>
</template>

<script setup lang="ts">
import { MenuItem as MenuItemType } from "./types"
import {
    Location,
} from '@element-plus/icons-vue'

const props = defineProps<{
    data: MenuItemType;
}>()
</script>