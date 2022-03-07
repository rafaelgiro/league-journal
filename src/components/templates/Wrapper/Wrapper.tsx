import { FC } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

import { Header } from "../../organisms/Header";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";

import { MainContainer } from "./styles";

export const Wrapper: FC = (props) => {
  const { children, ...other } = props;
  return (
    <MainContainer style={styles.safe} {...other}>
      <LoadingOverlay />
      <Header />
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
