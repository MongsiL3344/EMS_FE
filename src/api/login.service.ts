// api/login.service.ts
import {axiosInstance} from "./axiosInstance";

export type LoginPayload = { email: string; password: string };
export type UserResponse = {
  user: { ok: boolean; email: string; message: string };
};

export async function login(data: LoginPayload) {
  const res = await axiosInstance.post<UserResponse>("api/login", data);
  return res.data; // { ok: true/false; user: email ; message: "~"}
}
