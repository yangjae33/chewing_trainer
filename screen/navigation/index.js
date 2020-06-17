import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from "react-navigation-tabs";
import { View, Text, Dimensions, SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import StackChewing from "./chewingCalculateNav";
import StackHome from "./homeNav";
import StackResult from "./resultNav";
import SideMenu from "../Common/SideMenu";
const DeviceWidth = Dimensions.get("window").width;

function SafeAreaMaterialTopTabBar(props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
}

const Nav = createMaterialTopTabNavigator(
  {
    // First: {
    //   screen: StackHome,
    //   navigationOptions: {
    //     tabBarLabel: "홈 화면",
    //     tabBarIcon: ({ color }) => (
    //       <MaterialCommunityIcons name="home" color={"white"} size={26} />
    //     ),
    //   },
    // },
    First: {
      screen: StackChewing,
      navigationOptions: {
        tabBarLabel: "측정하기",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="scale-balance"
            color={"white"}
            size={26}
          />
        ),
      },
    },
    Second: {
      screen: StackResult,
      navigationOptions: {
        tabBarLabel: "결과보기",
        tabBarIcon: ({ color }) => (
          <Foundation name="results" color={"white"} size={26} />
        ),
      },
    },
  },
  {
    initialRouteName: "First",
    tabBarPosition: "bottom",
    tabBarOptions: {
      labelStyle: { fontSize: 12 },
      tabStyle: { width: DeviceWidth / 2 },
      style: { backgroundColor: "#4169E1" },
      indicatorStyle: {
        opacity: 0,
      },
      activeTintColor: "white",
      inactiveTintColor: "#C3C3C3",
      showIcon: true,
    },
    tabBarComponent: SafeAreaMaterialTopTabBar,
  }
);

export default createAppContainer(Nav);

const styles = StyleSheet.create({
  safeArea: {},
});
