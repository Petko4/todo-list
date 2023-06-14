import { useState } from "react";
import { styled } from "styled-components";

interface TextInputProps {
  onSubmit: (value: string) => void;
}

const Form = styled.form`
  margin: 1rem;
  width: 70%;
`;

const Input = styled.input`
  border: none;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: inherit;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export default function TextInput({ onSubmit }: TextInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value);
  };

  const handleFormOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <>
      <Form onSubmit={handleFormOnSubmit}>
        <Input value={inputValue} onChange={handleInputOnChange} />
      </Form>
    </>
  );
}
