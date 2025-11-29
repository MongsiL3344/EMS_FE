"use client";

import React from "react";
import Button from "@/components/login/Button";
import TextField from "@/components/login/TextField";
import { useLogin } from "@/api/authHandler";
import {
  Card,
  Form,
  HelperRow,
  LinkA,
  PageCenter,
  Title,
  BottomNote
} from "@/style/LoginStyle";

export default function LoginCard() {
  const { loading, handleLogin } = useLogin();

  return (
    <PageCenter>
      <Card role="region" aria-labelledby="login-title">
        <Title id="login-title">로그인</Title>

        <Form onSubmit={handleLogin}>
          <TextField
            name="email"
            type="email"
            label="이메일"
            placeholder="이메일 입력"
            autoComplete="email"
            required
          />

          <TextField
            name="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호 입력"
            autoComplete="current-password"
            required
          />

          <Button type="submit" disabled={loading}>
            로그인
          </Button>

          <HelperRow>
            <LinkA href="/forgot-password">비밀번호를 잊으셨나요?</LinkA>
          </HelperRow>
        </Form>
      </Card>

      <BottomNote>
        <span>계정이 없으신가요?</span>
        <LinkA href="/signup">회원가입</LinkA>
      </BottomNote>
    </PageCenter>
  );
}
