import React from "react";
import styled from "styled-components";
import Button from "@/components/login/Button";
import TextField from "@/components/login/TextField";

const PageCenter = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
`;

const Card = styled.section`
  width: 450px;
  max-width: calc(100vw - 48px);
  padding: 30px 31px;

  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.large};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Title = styled.h2`
  margin: 6px 0 19px;
  font-size: 1.6rem;
  font-weight: 850;
  line-height: 1.25;
  color: inherit;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const HelperRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const LinkA = styled.a`
  font-size: 0.93rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(1.3);
  }
`;

const BottomNote = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 0.95rem;
  color: inherit;
`;

export default function LoginCard() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //로그인로직
  };

  return (
    <PageCenter>
      <Card role="region" aria-labelledby="login-title">
        <Title id="login-title">로그인</Title>

        <Form onSubmit={onSubmit}>
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

          <Button type="submit">로그인</Button>

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
