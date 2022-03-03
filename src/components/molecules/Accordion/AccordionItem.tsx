import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";
import Collapsible from "react-native-collapsible";

import { Typography } from "../../atoms/Typography";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

import { AccordionItemProps } from "./interfaces";
import {
  AccordionArrow,
  DividerContainer,
  AccordtionItemHeader,
  AccordionItemContainer,
  ActionsContainer,
  EditableQuestionInput,
} from "./styles";

export const AccordionItem = (props: AccordionItemProps) => {
  const {
    handlePress,
    isOpen,
    title,
    children,
    isAnswering,
    setTitle,
    ...other
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const titleRef = useRef<TextInput>(null);
  const theme = useTheme();

  function handleNewTitleChange(
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) {
    if (e.nativeEvent.key === "Enter") setIsEditing(false);
  }

  useEffect(() => {
    if (isEditing) titleRef.current?.focus();
    else setTitle(newTitle);
  }, [isEditing]);

  if (!handlePress) return null;

  return (
    <AccordionItemContainer {...other}>
      <TouchableOpacity onPress={() => !isEditing && handlePress()}>
        <AccordtionItemHeader>
          {isEditing ? (
            <EditableQuestionInput
              value={newTitle}
              onChangeText={setNewTitle}
              ref={titleRef}
              multiline
              onKeyPress={handleNewTitleChange}
            />
          ) : (
            <Typography variant="title-2">{title}</Typography>
          )}

          <AccordionArrow isOpen={isOpen!}>
            <Svg width="13" height="9" viewBox="0 0 13 9" fill="none">
              <Path
                d="M6.79193 6.71437C4.54211 6.05578 2.32343 4.13521 1.87969 2.84958M11.9066 2.35662C11.5096 3.98141 9.48549 5.52338 6.66737 7.13634L11.9066 2.35662ZM12 1.3707C10.5403 3.1138 7.97912 4.58479 6.38323 7.72L12 1.3707ZM7.9402 8C5.16879 6.40282 3.94657 3.25972 1 1L7.9402 8Z"
                stroke={theme.colors.text}
                stroke-linecap="round"
              />
            </Svg>
          </AccordionArrow>
        </AccordtionItemHeader>
      </TouchableOpacity>
      <Collapsible collapsed={!isOpen}>
        {children}
        {!isAnswering && (
          <ActionsContainer>
            <EditButton isEditing={isEditing} setIsEditing={setIsEditing} />
            <DeleteButton onDelete={console.log} title={title} />
          </ActionsContainer>
        )}
        <DividerContainer>
          <Svg width="286" height="16" viewBox="0 0 286 16" fill="none">
            <Path
              d="M1 8.87793C30.671 11.6648 57.0628 11.9901 123.526 9.6252M4.23524 11.3132C39.2954 13.5901 75.2435 11.5593 120.124 9.46695L4.23524 11.3132Z"
              stroke={theme.colors.text}
              strokeLinecap="round"
            />
            <Path
              d="M163.731 8.56432C208.867 7.34231 256.542 8.12475 285 7.84342M164.153 11.0962C208.453 7.36869 253.325 3.71146 283.303 6.83241L164.153 11.0962Z"
              stroke={theme.colors.text}
              strokeLinecap="round"
            />
            <Path
              d="M136.184 14.5036C138.487 10.9167 138.883 7.91884 142.953 1M137.292 15.7784C138.294 6.98695 140.122 2.88136 140.852 1.53628L137.292 15.7784Z"
              stroke={theme.colors.text}
              strokeLinecap="round"
            />
            <Path
              d="M145.369 15.3132C147.856 8.60533 150.626 6.03824 152.331 3.16345M144.999 11.4977C147.751 14.0121 147.232 7.34816 150.415 3.38324L144.999 11.4977Z"
              stroke={theme.colors.text}
              strokeLinecap="round"
            />
          </Svg>
        </DividerContainer>
      </Collapsible>
    </AccordionItemContainer>
  );
};
