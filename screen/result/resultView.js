import React from "react";
import { View, Text } from "react-native";
import Header from "../Common/Header";

function resultView({ navigation }) {
  return (
    <>
      <Header titleText="결과보기" navigation={navigation}></Header>
    </>
  );
}

export default resultView;
