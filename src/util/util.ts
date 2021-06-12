import { Loading } from "element-ui";
import { getCurrentInstance, ref } from "vue";

import axios from "axios";


export function getDogRandom() {
  const { proxy: _this }: any = getCurrentInstance();
  const dogimgh = ref("");
  (async () => {
    const { data } = await _this.$PUB.getDogRandom();
    if (data.status === "success") {
      dogimgh.value = data.message;
    }
  })();
  return { dogimgh };
}

export function useUrlLoader<T>() {
  const { proxy: _this }: any = getCurrentInstance();
  const result = ref<T | null>(null);
  const loading = ref(true);
  const loaded = ref(false);

  (async () => {
    const { data } = await _this.$PUB.getDogRandom();
    if (data.status === "success") {
      loading.value = false;
      loaded.value = false;
      result.value = data
    }
  })();

  return {
    loading,
    loaded,
    result,
  };
}

export function newUseUrlLoader<T>(url: string) {
  const result = ref<T | null>(null);
  const loading = ref(true);
  const loaded = ref(false);
  const error = ref(null);

  axios.get(url).then(res => {
    loading.value = false;
    loaded.value = true;
    result.value = res.data;
  }).catch(e => {
    error.value = e;
    loading.value = false;
  })

  return {
    result,
    loading,
    loaded,
    error
  }
}
