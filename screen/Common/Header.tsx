import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Appbar, Title } from "react-native-paper";
import { Button } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Modal from "react-native-modal";

function Header({ titleText, prev, navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const showExplainModal = () => {
    setModalVisible(true);
  };
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
        <TouchableOpacity
          style={styles.prevBtn}
          onPress={() => showExplainModal()}
        >
          <AntDesign size={24} name="questioncircleo" color="white" />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.explainTopView}>
            <Text style={styles.explainTitle}>설명서</Text>
            <Text style={styles.programExplain}>
              1. 디바이스를 장착합니다.{"\n"}
              2. 측정하기 페이지로 이동합니다.{"\n"}
              3. 측정 종료 후 디바이스를 해제합니다.{"\n"}
              4. 통계 페이지에서 측정 데이터를 {"\n"} &nbsp;&nbsp;&nbsp; 확인
              하실 수 있습니다.
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContent: {
    flexDirection: "column",
    backgroundColor: "#4374D9",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalButton: {
    color: "white",
  },
  programExplain: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 30,
    marginTop: 20,
  },
  closeButton: {
    fontWeight: "bold",
    backgroundColor: "#8C8C8C",
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 14,
  },
  explainTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  explainTopView: {
    alignItems: "center",
  },
});

export default Header;
