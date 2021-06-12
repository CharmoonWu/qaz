import * as ax from "@/util/networkapi";

export function getDogRandom() {
  return ax.get("/image/random");
}

export function getHoundDog() {
  return ax.get("/hound/images");
}

