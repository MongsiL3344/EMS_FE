/**
 * dept 부서, position 직책
 */
export interface SignupInterface {
  email: string;
  pw: string;
  name: string;
  dept: string;
  team: string;
  position: string;
}

/**
 *  회원가입 필수 값 및 검증 확인용
 */
export interface SignupValedInterface {
  isCorrectPw: boolean;
  isCheckPw: boolean;
  isCheckCode: boolean;
  isCorrectEmail: boolean;
}
