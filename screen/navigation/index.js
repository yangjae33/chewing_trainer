import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { View, Text, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import StackChewing from "./chewingCalculateNav";
import StackHome from "./homeNav";
import StackResult from "./resultNav";
const DeviceWidth = Dimensions.get("window").width;
const Nav = createMaterialTopTabNavigator(
  {
    First: {
      screen: StackHome,
      navigationOptions: {
        tabBarLabel: "홈 화면",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={"white"} size={26} />
        ),
      },
    },
    Second: {
      screen: StackChewing,
      navigationOptions: {
        tabBarLabel: "측정하기",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={"white"} size={26} />
        ),
      },
    },
    Third: {
      screen: StackResult,
      navigationOptions: {
        tabBarLabel: "결과보기",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={"white"} size={26} />
        ),
      },
    },
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      labelStyle: { fontSize: 12 },
      tabStyle: { width: DeviceWidth / 3 },
      style: { backgroundColor: "#4169E1" },
      indicatorStyle: {
        opacity: 0,
      },
      activeTintColor: "white",
      inactiveTintColor: "#C3C3C3",
      showIcon: true,
    },
  }
);

export default createAppContainer(Nav);
