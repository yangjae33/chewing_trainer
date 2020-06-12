import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
function SideMenu({ navigation, showSideMenuCallback, isMenuVisible }) {
  return (
    <Modal
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      useNativeDriver // Faster animation
      hideModalContentWhileAnimating // Better performance, try with/without
      propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      isVisible={isMenuVisible}
    >
      <View style={styles.modalContent}>
        <View style={styles.menuView}>
          <TouchableOpacity
            style={styles.menuList}
            onPress={() => showSideMenuCallback(false)}
          >
            <Text style={styles.closeButton}>닫기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuList}
            onPress={() => navigation.navigate("homeView")}
          >
            <Text style={styles.closeButton}>메뉴1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuList}
            onPress={() => navigation.navigate("chewingView")}
          >
            <Text style={styles.closeButton}>메뉴2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuList}
            onPress={() => navigation.navigate("resultView")}
          >
            <Text style={styles.closeButton}>메뉴3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    width: width / 1.5,
    backgroundColor: "white",
    height: height,
    left: -20,
    top: 20,
    padding: 30,
  },
  menuList: {
    padding: 10,
  },
});
export default SideMenu;
