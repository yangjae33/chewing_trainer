import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Common/Header";
import Axios from "axios";

function Setting({ navigation }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const temp = () => {
    Axios({
      method: "GET",
      url: "http://crerarlab.com/homepage/temp_get.php",
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      setCount(response.data.result);
    });
  };
  const temp2 = () => {
    Axios({
      method: "GET",
      url: "http://crerarlab.com/homepage/temp_get2.php",
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      setCount2(response.data.result);
    });
  };
  setInterval(temp, 1000);
  setInterval(temp2, 1000);

  return (
    <>
      <Header titleText="설정" prev={true} navigation={navigation}></Header>
      <View style={styles.settingView2}>
        <Text>앱 왼쪽 통신 값:{count}</Text>
        <Text>앱 오른쪽 통신 값:{count2}</Text>
      </View>
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
  settingView2: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default Setting;
