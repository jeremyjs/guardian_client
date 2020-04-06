import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TabBarIcon from "Components/TabBarIcon";
import {
    HomeScreen,
    LocationScreen,
    ProfileScreen,
    ReportScreen,
    OtpScreen
} from "Screens";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

// home stack
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home☀️",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  ),
};

HomeStack.path = "";

// report stack
const ReportStack = createStackNavigator(
  {
    Links: ReportScreen,
  },
  config,
);

ReportStack.navigationOptions = {
    tabBarLabel: "Report",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
        />
    ),
};

ReportStack.path = "";

// report stack
const OtpStack = createStackNavigator(
    {
        Links: {
            screen: OtpScreen,
            navigationOptions: {
                header: null,
            },
        },
    },
    config,
);

OtpStack.navigationOptions = {
    tabBarLabel: "Otp",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
        />
    ),
};

OtpStack.path = "";

// location stack
const LocationStack = createStackNavigator(
  {
    Links: LocationScreen,
  },
  config,
);

LocationStack.navigationOptions = {
  tabBarLabel: "Location",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-pin" : "md-pin"}
    />
  ),
};

LocationStack.path = "";

// Profile stack
const ProfileStack = createStackNavigator(
  {
    Links: ProfileScreen,
  },
  config,
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-body" : "md-body"}
    />
  ),
};

ProfileStack.path = "";


const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LocationStack,
    ProfileStack,
    ReportStack,
    OtpStack
});

tabNavigator.path = "";

export default tabNavigator;
