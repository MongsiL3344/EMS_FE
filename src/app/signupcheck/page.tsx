"use client";

import {
  SignUpContainer,
  SignUpWrapper,
  SubTitle,
  SuccessCard,
  SucessButton,
  Title,
  TitleWrapper
} from "@/style/SignupStyle";

export default function SignUpCheckScreen() {
  return (
    <SignUpContainer>
      <SignUpWrapper>
        <SuccessCard>
          <TitleWrapper>
            <Title>회원가입 완료!</Title>
            <SubTitle>
              자동 회원가입이 완료되었습니다. <br /> 로그인 후 서비스를
              이용해주세요.
            </SubTitle>
            <SubTitle></SubTitle>
          </TitleWrapper>
          <SucessButton type="button">로그인 화면으로 전환</SucessButton>
        </SuccessCard>
      </SignUpWrapper>
    </SignUpContainer>
  );
}
