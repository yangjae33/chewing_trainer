import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Common/Header";
import Axios from "axios";

function Setting({ navigation }) {
  const [count, setCount] = useState(0);
  const temp = () => {
    Axios({
      method: "GET",
      url: "http://crerarlab.com/homepage/temp_get.php",
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      setCount(response.data.result);
    });
  };
  setInterval(temp, 1000);

  return (
    <>
      <Header titleText="설정" prev={true} navigation={navigation}></Header>
      <View style={styles.settingView}>
        <Text>앱 통신 값:{count}</Text>
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
