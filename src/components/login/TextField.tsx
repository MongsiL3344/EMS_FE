import React, {InputHTMLAttributes, ReactNode, useId} from "react";
import styled from "styled-components";

export type TextFieldProps = {
  id?: string;
  name?: string;
  label?: ReactNode;
} & Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "children" | "dangerouslySetInnerHTML"
>;

/*텍스트필드 배치*/
const FieldRoot = styled.div`
  padding: 1px;
  width: 100%;
`;

/*텍스트필드 좌상단 레이블*/
const Label = styled.label`
  display: flex;
  margin-top: 6px;
  margin-bottom: 4px;
  padding-left: 2px;
  font-size: 0.93rem;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text};
`;

/*텍스트필드, 플레이스홀더*/
const InputEl = styled.input`
  width: 100%;
  appearance: none;
  background: transparent;
  cursor: text;

  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: ${({theme}) => theme.radii.small};

  //플레이스홀더 텍스트 패딩
  padding: 0.5rem 0.8rem;

  //플레이스홀더 텍스트
  font-size: 0.9rem;
  line-height: 1.4;
  color: ${({theme}) => theme.colors.subText};
  font-weight: 620;

  outline: none;

  &::placeholder {
    /* placeholder-gray-500 */
    color: ${({theme}) => theme.colors.subText};
  }

  &:focus {
    border-color: ${({theme}) => theme.colors.primary};
    border-width: 2px;
  }
`;

/*텍스트필드 : id, name, HTML속성 사용가능*/
export default function TextField(props: TextFieldProps) {
  const {id, name, label, ...rest} = props;

  const uid = useId();
  const fieldId = id ?? `${name ?? "ID"}-${uid}`;

  return (
      <FieldRoot>
        {label ? <Label htmlFor={fieldId}>{label}</Label> : null}
        <InputEl id={fieldId} name={name} {...rest} />
      </FieldRoot>
  );
}
