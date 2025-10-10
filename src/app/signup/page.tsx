"use client";

import {
  FormButton,
  FormCard,
  FormInput,
  FormRow,
  FormTitle,
  FormWrapper,
  InputHelpText,
  SignUpContainer,
  SignUpFootText,
  SignUpLinkText,
  SignUpWrapper,
  SingleInput,
  SubmitButton,
  SubTitle,
  Title,
  TitleWrapper
} from "@/style/SignupStyle";

export default function SignUpScreen() {
  return (
    <SignUpContainer>
      <SignUpWrapper>
        <TitleWrapper>
          <Title>회원가입</Title>
          <SubTitle>물품 관리 시스템 이용 계정 생성 단계입니다.</SubTitle>
        </TitleWrapper>
        <FormCard>
          <FormWrapper>
            <FormTitle>이메일 주소</FormTitle>
            <FormRow>
              <FormInput type="email" placeholder="user@company.email" />
              <FormButton type="button">인증번호 발송</FormButton>
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>이메일 인증 코드</FormTitle>
            <FormRow>
              <FormInput type="text" placeholder="이메일로 전송된 코드 입력" />
              <FormButton type="button">확인</FormButton>
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>비밀번호</FormTitle>
            <FormRow>
              <SingleInput
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </FormRow>
            <InputHelpText>
              8~32자리, 영문, 숫자, 특수문자를 포함해야합니다.
            </InputHelpText>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>비밀번호 확인</FormTitle>
            <FormRow>
              <SingleInput
                type="password"
                placeholder="입력하신 비밀번호를 확인해주세요"
              />
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>이름</FormTitle>
            <FormRow>
              <SingleInput type="text" placeholder="이름을 입력하세요" />
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>부서</FormTitle>
            <FormRow>
              <SingleInput type="text" placeholder="예: 개발부" />
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>팀</FormTitle>
            <FormRow>
              <SingleInput type="text" placeholder="예: 프론트엔드팀" />
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>직책</FormTitle>
            <FormRow>
              <SingleInput type="text" placeholder="예: 선임 연구원" />
            </FormRow>
          </FormWrapper>
          <SubmitButton type="button">회원가입 신청</SubmitButton>
          <SignUpFootText>
            이미 계정이 존재하나요? <SignUpLinkText>로그인</SignUpLinkText>{" "}
          </SignUpFootText>
        </FormCard>
      </SignUpWrapper>
    </SignUpContainer>
  );
}
