import { ref, Ref } from 'vue';
export default function createMask(isCollapsed: Ref<boolean>) {
  // 用来确定是否使用遮掩层
  const isLessMinScreen = ref(false);

  const removeCoverLayer = () => {
    isCollapsed.value = true;
  };

  return {
    isLessMinScreen,
    removeCoverLayer,
  };
}
