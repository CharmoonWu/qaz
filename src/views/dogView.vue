<template>
  <div>
    <img :src="dogimgh" alt="" width="200" height="200">
    <div class="" ref="refO">one</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, HtmlHTMLAttributes, onMounted, ref, watch } from 'vue'
import { getDogRandom, useUrlLoader, newUseUrlLoader } from "@/util/util"

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
interface DogResult {
  message: string;
  status: string;

}
export default defineComponent({
  setup() {

    const { dogimgh } = getDogRandom();

    const selekey = ref<string[]>([]);
    const refO = ref<HTMLElement | null>(null)
    onMounted(() => {
      console.log(refO.value?.innerHTML);
    })

    // const { loading, loaded, result } = useUrlLoader<DogResult>()
    // watch(result, () => {
    //   console.log(result.value?.message);
    // })

    const { result } = newUseUrlLoader<CatResult[]>("https://api.thecatapi.com/v1/images/search");
    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].id);

      }

    })









    return { getDogRandom, dogimgh, refO } //响应式的都要返回
  }
})
</script>

<style scoped>
</style>