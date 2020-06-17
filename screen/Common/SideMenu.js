import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
let menuTop = getStatusBarHeight();
Platform.os === "ios" ? (menuTop = 0) : (menuTop = 0);
function SideMenu({ navigation, showSideMenuCallback, isMenuVisible }) {
  const clickMenu = (menu) => {
    navigation.navigate(menu);
    showSideMenuCallback(false);
  };
  return (
    <Modal
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      useNativeDriver // Faster animation
      hideModalContentWhileAnimating // Better performance, try with/without
      propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      isVisible={isMenuVisible}
      onBackdropPress={() => showSideMenuCallback(false)}
    >
      <View style={styles.modalContent}>
        <View style={styles.menuTop}>
          <Image
            source={require("../home/img/logo2.png")}
            style={styles.resultImg}
          ></Image>
          <TouchableOpacity
            style={styles.menuList}
            onPress={() => showSideMenuCallback(false)}
          >
            <AntDesign size={30} name="closesquareo" color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.menuList}
          onPress={() => clickMenu("profile")}
        >
          <Text style={styles.menuText}>프로필</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuList}
          onPress={() => clickMenu("chewingView")}
        >
          <Text style={styles.menuText}>측정하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuList}
          onPress={() => clickMenu("resultView")}
        >
          <Text style={styles.menuText}>결과보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuList}
          onPress={() => clickMenu("setting")}
        >
          <Text style={styles.menuText}>설정</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  menuTop: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  modalContent: {
    width: width / 1.5,
    backgroundColor: "#4374D9",
    height: height + 20,
    left: -20,
    top: menuTop,
    padding: 30,
  },
  menuList: {
    padding: 10,
  },
  resultImg: {
    width: 100,
    height: 85,
  },
  menuText: {
    color: "white",
    fontSize: 20,
    paddingTop: 20,
    fontWeight: "500",
  },
});
export default SideMenu;
