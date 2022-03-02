import { useEffect, useState } from "react";
import { TextArea } from "../../atoms/TextArea";
import { TextProps } from "./interfaces";
import { TextContainer } from "./styles";

export const Text = (props: TextProps) => {
  const { handleChange } = props;
  const [text, setText] = useState<string>("");

  useEffect(() => {
    handleChange(text);
  }, [text]);

  return (
    <TextContainer>
      <TextArea onChangeText={(val) => setText(val)} value={text} />
    </TextContainer>
  );
};
