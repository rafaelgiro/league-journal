import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

import { Header } from "../../organisms/Header";
import { WrapperProps } from "./interfaces";

import { MainContainer } from "./styles";

export const Wrapper = (props: WrapperProps) => {
  const { children, isIntro, backButton, ...other } = props;
  return (
    <MainContainer style={styles.safe} {...other}>
      <Header isIntro={isIntro} backButton={backButton} />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 16 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <SafeAreaView style={{ flex: 1, height: "100%" }}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  safe: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 24,
  },
});
