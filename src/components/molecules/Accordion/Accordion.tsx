import { Children, cloneElement, useEffect, useState } from "react";
import { View } from "react-native";
import { AccordionProps } from "./interfaces";

export const Accordion = (props: AccordionProps) => {
  const { children, expandedItem, setExpandedItem, ...other } = props;
  const [currentOpen, setCurrentOpen] = useState(expandedItem || 0);

  function renderChildrenWithProps() {
    return Children.map(children, (child, index) => {
      const isOpen = index === currentOpen;

      return cloneElement(child as React.ReactElement, {
        handlePress: () => {
          setCurrentOpen(isOpen ? -1 : index);
          setExpandedItem(isOpen ? -1 : index);
        },
        isOpen,
      });
    });
  }

  useEffect(() => {
    if (expandedItem !== undefined) setCurrentOpen(expandedItem);
  }, [expandedItem]);

  return (
    <View {...props} {...other}>
      {renderChildrenWithProps()}
    </View>
  );
};
