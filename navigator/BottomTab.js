import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CoinsList from "../screens/Home/CoinsList";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import TrendingCoinsList from "../screens/Trending/TrendingCoinsList";
import TopTab from "./TopTab";
import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Markets") {
              return <FontAwesome5 name="coins" color={color} size={24} />;
            } else if (route.name === "Search") {
              return <FontAwesome5 name="search" color={color} size={24} />;
            }
          },
          tabBarStyle: {
            padding: 10,
          },
          tabBarActiveTintColor: "#27C784",
        })}
      >
        <Tab.Screen
          name="Markets"
          component={TopTab}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchBar}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
