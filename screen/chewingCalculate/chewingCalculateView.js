import React from "react";
import { View, Text } from "react-native";
import Header from "../Common/Header";
import { WebView } from "react-native-webview";
function chewingCalculateView({ navigation }) {
  return (
    <>
      <Header titleText="측정하기" navigation={navigation}></Header>
    </>
  );
}

export default chewingCalculateView;
