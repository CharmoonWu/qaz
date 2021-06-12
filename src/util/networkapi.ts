import axios from "axios";
import qs from "qs";
const instance = axios.create({
  baseURL: "https://dog.ceo/api/breeds",
  timeout: 5000,
});
instance.interceptors.request.use((config) => config);
instance.interceptors.response.use((res) => res);

export function get(url: string, params?: any) {
  return instance.get(url, { params });
}
export function get_(url: string, params: any) {
  return instance.get(url + "?" + qs.stringify(params));
}
export function postQs(url: string, params: any) {
  return instance.post(url, qs.stringify(params));
}
export function post(url: string, params: any) {
  return instance.post(url,params)
}
