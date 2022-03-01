import { FC } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { Header } from "../../organisms/Header";
import { MainContainer } from "./styles";

export const Wrapper: FC = (props) => {
  const { children, ...other } = props;
  return (
    <MainContainer style={styles.safe} {...other}>
      <Header />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  safe: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 24,
  },
});
