import { axiosWithCookie } from "@/utils/axios";
import { TOKEN_ACCESS_ID, getCookie } from "@/utils/cookie";

export * from "./history";

/**
 * 현재 로그인된 유저의 포인트를 늘립니다.
 * 해당 API는 회수기에서 재활용 인증 후 시현이 되어야 합니다.
 * @param point 더할 포인트 값
 */
export function addPoint(_point: number, _id?: string) {
  console.error("API not implemented");
}

/**
 * 현재 유저가 가진 포인트를 가져옵니다.
 *
 * ```js
 * 202 | success | {result:string, msg:string, data : {point:number} }
 * ```
 * ```js
 * 401, 402 | fail | {result:string, msg:string, data : {point:number} }
 * ```
 * @returns AxiosResponse
 */
export function checkPoint() {
  return axiosWithCookie.post("/api/point/check", {
    access_token: getCookie(TOKEN_ACCESS_ID),
  });
}
