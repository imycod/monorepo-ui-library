import { ref } from "vue"
export default function createMask(isCollapsed) {

    // 用来确定是否使用遮掩层
    const isLessMinScreen = ref(false)

    const removeCoverLayer = () => {
        isCollapsed.value = true;
    }

    return {
        isLessMinScreen,
        removeCoverLayer,
    }
}   