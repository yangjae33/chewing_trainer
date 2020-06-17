import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Platform,
  ScrollView,
} from "react-native";
import { Container, Content } from "native-base";
import Header from "../Common/Header";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

import DailyRes from "./dailyRes";
import WeeklyRes from "./weeklyRes";
import MonthlyRes from "./monthlyRes";

function resultView({ navigation }) {
  const [val, setValue] = useState(0);
  return (
    <>
      <Container style={styles.resultViewContainer}>
        <Content contentContainerStyle={{ flex: 1, backgroundColor: "white" }}>
          <Header titleText="결과보기" navigation={navigation}></Header>
          <View style={styles.resultView}>
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button
                  title="일간"
                  color={
                    Platform.OS === "ios"
                      ? "white"
                      : val === 0
                      ? "orange"
                      : "#4374D9"
                  }
                  onPress={() => setValue(0)}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="주간"
                  color={
                    Platform.OS === "ios"
                      ? "white"
                      : val === 1
                      ? "orange"
                      : "#4374D9"
                  }
                  onPress={() => setValue(1)}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="월간"
                  color={
                    Platform.OS === "ios"
                      ? "white"
                      : val === 2
                      ? "orange"
                      : "#4374D9"
                  }
                  onPress={() => setValue(2)}
                />
              </View>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              {val == 0 ? (
                <DailyRes />
              ) : val == 1 ? (
                <WeeklyRes />
              ) : (
                <MonthlyRes />
              )}
            </ScrollView>
          </View>
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  resultViewContainer: {
    backgroundColor: "#4374D9",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "#4374D9" : "white",
    width: "40%",
    height: 40,
    margin: 10,
    borderRadius: 10,
  },
  resultView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default resultView;
