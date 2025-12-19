"use server";

import { serverOnly } from "./axios.server";
import { axiosInstance } from "./axiosInstance";

export async function SignupApi(data: any, type: number) {
  const payload = {
    ...data,
    type
  };
  console.log("api on", data);
  try {
    const res = await axiosInstance.post("api/signup", payload).then((res) => {
      console.log("res : ", res.data);
    });
  } catch (err) {
    console.log("err : ", err);
  }
}

export async function SendEmailCode(email: any) {
  console.log("api on", email);
  try {
    const res = await serverOnly
      .post("/api/send-code", { email: email })
      .then((res) => {
        console.log("res : ", res.data.code);
        return res.data.code;
      });
    return res;
  } catch (err) {
    console.log("err : ", err);
  }
}
