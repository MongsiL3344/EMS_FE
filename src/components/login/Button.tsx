import {ButtonHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

/*Button 컴포넌트 props 타입*/
type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  margin-top: 4px;

  border: 1px solid transparent;
  border-radius: ${({theme}) => theme.radii.small};
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.background};
  font-size: 0.95rem;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;

  box-shadow: ${({theme}) => theme.shadow};
  transition: transform 0.05s ease,
  filter 0.12s ease;

  &:hover {
    filter: brightness(1.16);
  }

  &:active {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme}) => theme.colors.background},
    0 0 0 4px ${({theme}) => theme.colors.primary};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme}) => theme.colors.background},
    0 0 0 4px ${({theme}) => theme.colors.primary};
  }
`;

/* 버튼 컴포넌트 : 버튼표준속성 사용 가능 */
export default function Button({children, ...rest}: ButtonProps) {
  return (
      <StyledButton {...rest}>
        {children}
      </StyledButton>
  );
}
