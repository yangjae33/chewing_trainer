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
import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
function chewingView({ navigation }) {
  const [idx, setIdx] = useState(2);
  const [imgIdx, setImgIdx] = useState(1);
  const [chewingText, setchewingText] = useState("측정 시작합니다");

  useEffect(() => {
    if (idx == 2) {
      const Interval = setTimeout(function () {
        setImgIdx(imgIdx + 1);
      }, 2000);
      return () => {
        clearInterval(Interval);
      };
    }
  }, [idx]);

  useEffect(() => {
    if (idx == 2) {
      if (imgIdx == 1) {
        setchewingText("측정 시작합니다");
      } else if (imgIdx == 2) {
        setchewingText("왼쪽으로 씹으셨습니다.");
      } else if (imgIdx == 3) {
        setchewingText("오른쪽으로 씹으셨습니다.");
      } else if (imgIdx == 4) {
        setchewingText("양쪽으로 씹으셨습니다");
      } else if (imgIdx == 5) {
        setIdx(idx + 1);
      }
      const Interval = setTimeout(function () {
        setImgIdx(imgIdx + 1);
      }, 2000);
      return () => {
        clearInterval(Interval);
      };
    }
  }, [imgIdx]);
  return (
    <>
      <Header titleText="측정하기" navigation={navigation}></Header>
      {idx == 1 && (
        <View style={styles.readyView}>
          <TouchableOpacity onPress={() => setIdx(idx + 1)}>
            <Text style={styles.readyText}>이어폰을 착용해주세요</Text>
            <Image
              source={require("./img/ready.png")}
              style={styles.readyImg}
            ></Image>
          </TouchableOpacity>
        </View>
      )}
      {idx == 2 && (
        <View style={styles.readyView}>
          <Text style={styles.chewingNumber}>총 씹은횟수: 5</Text>
          <TouchableOpacity onPress={() => setIdx(idx + 1)}>
            {imgIdx == 1 && (
              <Image
                source={require("./img/smile.png")}
                style={styles.smileImg}
              ></Image>
            )}
            {imgIdx == 2 && (
              <Image
                source={require("./img/left_mouse.png")}
                style={styles.smileImg}
              ></Image>
            )}
            {imgIdx == 3 && (
              <Image
                source={require("./img/right_mouse.png")}
                style={styles.smileImg}
              ></Image>
            )}
            {imgIdx == 4 && (
              <Image
                source={require("./img/both.png")}
                style={styles.smileImg}
              ></Image>
            )}
          </TouchableOpacity>
          <Text style={styles.chewingText}>{chewingText}</Text>
          <Text style={styles.chewingLeftNumber}>왼쪽 : 3</Text>
          <Text style={styles.chewingRightNumber}>오른쪽 : 4</Text>
        </View>
      )}
      {idx == 3 && (
        <View style={styles.readyView}>
          <TouchableOpacity onPress={() => setIdx(idx + 1)}>
            <Text style={styles.readyText}>결과화면</Text>
            <Image
              source={require("./img/ready.png")}
              style={styles.readyImg}
            ></Image>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  chewingNumber: {
    fontWeight: "bold",
    paddingBottom: 30,
    fontSize: 20,
  },
  chewingLeftNumber: {
    position: "absolute",
    fontWeight: "bold",
    paddingBottom: 30,
    fontSize: 20,
    top: screenHeight - 200,
    left: 40,
  },
  chewingRightNumber: {
    position: "absolute",
    fontWeight: "bold",
    paddingBottom: 30,
    fontSize: 20,
    top: screenHeight - 200,
    right: 40,
  },
  chewingNumber: {
    fontWeight: "bold",
    paddingBottom: 30,
    fontSize: 20,
  },

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
  smileImg: {
    width: 200,
    height: 200,
  },
  chewingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
export default chewingView;
