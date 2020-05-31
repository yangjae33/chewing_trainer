import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Appbar, Title } from "react-native-paper";
import { Fontisto } from "react-native-vector-icons/Fontisto"
function Header({ titleText, prev, navigation }) {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        {prev == "Y" && (
          <TouchableOpacity
            style={styles.prevBtn}
            onPress={() => navigation.goBack()}
          >
            <Fontisto size={24} name="close-a" color="white" />
          </TouchableOpacity>
        )}
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4374D9",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  prevBtn: { position: "absolute", right: 20 },
});

export default Header;
