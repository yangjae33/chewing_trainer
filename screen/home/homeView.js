import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../Common/Header";
import { Container, Content } from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
function homeView({ navigation }) {
  const [isPencilEdit, setIsPencilEdit] = useState(false);
  const [inputValue, setinputValue] = useState();
  const [userName, setUserName] = useState("이름을 설정해주세요");
  const showChangeName = () => {
    setIsPencilEdit(true);
  };
  const ChangeUserName = () => {
    setUserName(inputValue);
    setIsPencilEdit(false);
    setinputValue("");
  };
  return (
    <>
      <Container style={styles.homeViewContainer}>
        <Content contentContainerStyle={{ flex: 1, backgroundColor: "white" }}>
          <Header titleText="홈 화면" navigation={navigation}></Header>
          <View style={styles.homeView}>
            <Text style={styles.scoreTitle}>총 냠냠점수 : 89점</Text>
            <Text>상위 23.8%</Text>
            <Image
              source={require("./img/logo.png")}
              style={styles.logo}
            ></Image>
            <View style={styles.nameField}>
              {isPencilEdit ? (
                <>
                  <TextInput
                    style={styles.inputText}
                    placeholder="이름을 압력해주세요"
                    autoCorrect={false}
                    value={inputValue}
                    onChangeText={(value) => setinputValue(value)}
                  />
                  <TouchableOpacity
                    style={styles.setNameBtn}
                    onPress={() => ChangeUserName(true)}
                  >
                    <Text style={styles.setNameTxt}>확인</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.nameText}>{userName}</Text>
                  <TouchableOpacity
                    onPress={() => setIsPencilEdit(true)}
                    style={styles.pencilBtn}
                  >
                    <Entypo size={24} name="pencil" color="gray" />
                  </TouchableOpacity>
                </>
              )}
            </View>
            <Text style={styles.chewingNum}>평균 씹는 횟수 13.3333회 </Text>
            <Text>평균 좌 우 비율 43:57 </Text>
          </View>
        </Content>
      </Container>
    </>
  );
}
const styles = StyleSheet.create({
  scoreTitle: {
    fontSize: 24,
    marginBottom: 5,
  },
  homeView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  homeViewContainer: {
    backgroundColor: "#4374D9",
  },
  logo: {
    width: 250,
    height: 200,
    marginTop: 20,
    marginBottom: 10,
  },
  nameField: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    flexDirection: "row",
    marginBottom: 20,
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  chewingNum: {
    marginBottom: 20,
  },
  pencilBtn: {
    marginLeft: 5,
  },
  inputText: {
    borderColor: "gray",
    borderWidth: 2,
    padding: 10,
    width: 140,
  },
  setNameBtn: {
    marginLeft: 10,
    backgroundColor: "#4374D9",
    padding: 10,
    borderRadius: 6,
  },
  setNameTxt: {
    color: "white",
  },
});

export default homeView;
