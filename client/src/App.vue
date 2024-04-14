<script setup lang="ts">
import { useRouter } from "vue-router"

import { ItemMenu } from "item-ui";
import "item-ui/dist/style.css"

const menuList = [
  {
    index: '0',
    title: "首页",
    icon: "home",
    path: "/",
  },
  {
    index: '1',
    title: "关于",
    icon: "about",
    path: "/about",
  },
  {
    index: '2',
    title: "测试",
    icon: "about",
    path: "/test",
    children: [
      {
        index: '2-1',
        title: "测试1",
        icon: "test",
        path: "/test/test1",
        children: [
          {
            index: '2-1-1',
            title: "测试12",
            icon: "test",
            path: "/test/test2",
          },
          {
            index: '2-1-2',
            title: "测试13",
            icon: "test",
            path: "/test/test3",
          }
        ]
      },
      {
        index: '2-2',
        title: "测试2",
        icon: "test",
        path: "/test/test2",
      }
    ]
  },
]

const route = useRouter()

function selectApplication(item) {
  console.log('selectApplication---', item);
}
function more(t) {
  console.log('more---', t);
}
function sizeChange({ isCollapse, isLessMinScreen }) {
  console.log('sizeChange---', { isCollapse, isLessMinScreen });
}
function collapse(t) {
  console.log('collapse----', t);
}
function close(key, keyPath) {
  console.log('close----', key, keyPath);
}
function open(key, keyPath) {
  console.log('open----', key, keyPath);
}
</script>

<template>
  <ItemMenu :data="menuList" :default-active="route.path" @selectApplication="selectApplication" @more="more"
    @sizeChange="sizeChange" @collapse="collapse" @open="open" @close="close"> </ItemMenu>
</template>

<style scoped></style>
