import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../Common/Header";

function chewingCalculateView({ navigation }) {
  return (
    <>
      <Header titleText="측정하기" navigation={navigation}></Header>
      <View style={styles.readyView}>
        <Text>dd</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  readyText: {
    fontWeight: "bold",
    paddingBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
  readyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  readyImg: {
    width: 320,
    height: 280,
  },
});
export default chewingCalculateView;
