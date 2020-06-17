import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Common/Header";

function Setting({ navigation }) {
  return (
    <>
      <Header titleText="설정" prev={true} navigation={navigation}></Header>
      <View style={styles.settingView}>
        <Text>준비중입니다.</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  settingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Setting;
