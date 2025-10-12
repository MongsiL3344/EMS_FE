import 'styled-components';

declare module 'styled-components' {
  /*theme.d.ts 테마 타입 정의*/
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      border: string;
      text: string;
      subText: string;
      primary: string;
    };
    /* 둥글기 */
    radii: {
      small: string;
      large: string;
    };
    /* 그림자 효과(로그인 카드) */
    shadow: string;
  }
}
