import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: #f6f7f8;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 28rem;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* padding: 3rem 0.5rem;

  @media (min-width: 640px) {
    padding: 3rem 1rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 1.5rem;
  } */
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  color: #111827;
`;

export const SubTitle = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #111827;
`;

export const FormCard = styled.div`
  background-color: #fff;
  padding: 2rem 1.75rem;
  border-radius: 1.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
`;

export const FormTitle = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

export const FormInput = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background: none;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  color: #111827;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
    border-color: #1193d4;
    box-shadow: 0 0 0 3px rgba(17, 147, 212, 0.1);
  }
`;

export const SingleInput = styled(FormInput)`
  margin-top: 0.25rem;
  margin-right: 0;
`;

export const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1rem;

  border: 1px solid #d1d5db;
  background-color: #f9fafb;

  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;

  border-radius: 0.5rem;
  white-space: nowrap;

  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f3f4f6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #1193d4;
    border-color: #1193d4;
  }
`;

export const InputHelpText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

export const SubmitButton = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 1rem;
  color: #ffffff;
  background-color: #1193d4;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(17, 147, 212, 0.9);
  }

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 2px #fff,
      0 0 0 4px #1193d4;
  }
`;

export const SignUpFootText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: #4b5563;
`;

export const SignUpLinkText = styled.a`
  font-weight: 500;
  color: #1193d4;
  text-decoration: none;
  &:hover {
    color: rgba(17, 147, 212, 0.9);
  }
`;

export const SignUpWayButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49%;
`;

export const SelectButton = styled.button<{ active?: boolean }>`
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ active }) => (active ? "#1069f9" : "#d1d5db")};
  background-color: ${({ active }) => (active ? "#1069f9" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#1f2937")};
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Noto Sans KR", sans-serif;
  /* margin-bottom: 0.5rem; */

  &:hover {
    border-color: ${({ active }) => (active ? "#1069f9" : "#9ca3af")};
    background-color: ${({ active }) => (active ? "#1069f9" : "#f9fafb")};
  }
`;

export const Description = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
  padding: 0 0.25rem;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
`;

export const SuccessCard = styled(FormCard)`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const SuccessSubText = styled(SubTitle)`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.5;
`;

export const SucessButton = styled(SelectButton)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #1173d4;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(17, 115, 212, 0.9);
  }

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 2px #ffffff,
      0 0 0 4px #1173d4;
  }
`;
