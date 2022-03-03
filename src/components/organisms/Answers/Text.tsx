import { useEffect, useState } from "react";
import { TextArea } from "../../atoms/TextArea";
import { TextProps } from "./interfaces";
import { TextContainer } from "./styles";

export const Text = (props: TextProps) => {
  const { handleChange, initialValue } = props;

  return (
    <TextContainer>
      <TextArea onChangeText={handleChange} initialValue={initialValue} />
    </TextContainer>
  );
};
