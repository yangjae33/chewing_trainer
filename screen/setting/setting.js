import React from "react";
import { View, Text } from "react-native";
import Header from "../Common/Header";

function Setting({ navigation }) {
  return <Header titleText="설정" prev={true} navigation={navigation}></Header>;
}

export default Setting;
