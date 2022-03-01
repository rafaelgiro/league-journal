import { Children, cloneElement, useState } from "react";
import { View, ViewProps } from "react-native";

export const Accordion = (props: ViewProps) => {
  const { children, ...other } = props;
  const [currentOpen, setCurrentOpen] = useState(-1);

  function renderChildrenWithProps() {
    return Children.map(children, (child, index) => {
      const isOpen = index === currentOpen;

      return cloneElement(child as React.ReactElement, {
        handlePress: () => setCurrentOpen(isOpen ? -1 : index),
        isOpen,
      });
    });
  }

  return (
    <View {...props} {...other}>
      {renderChildrenWithProps()}
    </View>
  );
};
