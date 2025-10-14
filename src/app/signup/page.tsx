"use client";

import {
  ButtonGroup,
  Description,
  FormButton,
  FormCard,
  FormInput,
  FormRow,
  FormTitle,
  FormWrapper,
  InputHelpText,
  SelectButton,
  SignUpContainer,
  SignUpFootText,
  SignUpLinkText,
  SignUpWayButtonWrapper,
  SignUpWrapper,
  SingleInput,
  SubmitButton,
  SubTitle,
  Title,
  TitleWrapper
} from "@/style/SignupStyle";
import { SignupInterface } from "@/types/SignupInterface";
import { useEffect, useState } from "react";

export default function SignUpScreen() {
  const [userinfo, setUserInfo] = useState<SignupInterface>({
    email: "",
    pw: "",
    name: "",
    dept: "",
    team: "",
    position: ""
  });
  const [registerWay, setRegisterWay] = useState<number>(0); // 1 automatic, 2 manual
  const [code, setCode] = useState<string>("");
  const [samePw, setSamePw] = useState<string>("");

  useEffect(() => {
    console.log(userinfo);
    return () => {};
  }, [userinfo]);

  return (
    <SignUpContainer>
      <SignUpWrapper>
        <TitleWrapper>
          <Title>회원가입</Title>
          <SubTitle>물품 관리 시스템 이용 계정 생성 단계입니다.</SubTitle>
        </TitleWrapper>
        <FormCard>
          <SignUpWayButtonWrapper>
            <ButtonGroup>
              <SelectButton
                active={registerWay === 1 ? true : false}
                onClick={() => {
                  setRegisterWay(1);
                }}
              >
                자동가입
              </SelectButton>
              <Description>지정된 조직 이메일을 이용</Description>
            </ButtonGroup>
            <ButtonGroup>
              <SelectButton
                active={registerWay === 2 ? true : false}
                onClick={() => {
                  setRegisterWay(2);
                }}
              >
                수동가입
              </SelectButton>
              <Description>관리자 승인 요청</Description>
            </ButtonGroup>
          </SignUpWayButtonWrapper>
          <FormWrapper>
            <FormTitle>이메일 주소</FormTitle>
            <FormRow>
              <FormInput
                type="email"
                value={userinfo.email}
                onChange={(e) => {
                  setUserInfo({ ...userinfo, email: e.target.value });
                }}
                placeholder="user@company.email"
              />
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
                value={userinfo.pw}
                onChange={(e) => {
                  setUserInfo({ ...userinfo, pw: e.target.value });
                }}
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
                value={samePw}
                onChange={(e) => {
                  setSamePw(e.target.value);
                }}
                placeholder="입력하신 비밀번호를 확인해주세요"
              />
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>이름</FormTitle>
            <FormRow>
              <SingleInput
                type="text"
                value={userinfo.name}
                onChange={(e) => {
                  setUserInfo({ ...userinfo, name: e.target.value });
                }}
                placeholder="이름을 입력하세요"
              />
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>부서</FormTitle>
            <FormRow>
              <SingleInput
                type="text"
                value={userinfo.dept}
                onChange={(e) => {
                  setUserInfo({ ...userinfo, dept: e.target.value });
                }}
                placeholder="예: 개발부"
              />
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>팀</FormTitle>
            <FormRow>
              <SingleInput
                type="text"
                value={userinfo.team}
                onChange={(e) => {
                  setUserInfo({ ...userinfo, team: e.target.value });
                }}
                placeholder="예: 프론트엔드팀"
              />
            </FormRow>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>직책</FormTitle>
            <FormRow>
              <SingleInput
                type="text"
                value={userinfo.position}
                onChange={(e) => {
                  setUserInfo({ ...userinfo, position: e.target.value });
                }}
                placeholder="예: 선임 연구원"
              />
            </FormRow>
          </FormWrapper>
          <SubmitButton type="button">회원가입 신청</SubmitButton>
          <SignUpFootText>
            이미 계정이 존재하나요?
            <SignUpLinkText href="/login">로그인</SignUpLinkText>
          </SignUpFootText>
        </FormCard>
      </SignUpWrapper>
    </SignUpContainer>
  );
}
