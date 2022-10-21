import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CoinsList from "../screens/Home/CoinsList";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import TrendingCoinsList from "../screens/Trending/TrendingCoinsList";
import TopTab from "./TopTab";
import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Markets") {
              return <AntDesign name="linechart" color={color} size={24} />;
            } else if (route.name === "Search") {
              return <AntDesign name="search1" color={color} size={24} />;
            }
          },
          tabBarStyle: {
            padding: 5,
          },
          tabBarActiveTintColor: "#27C784",
          tabBarInactiveTintColor: "#696969",
        })}
      >
        <Tab.Screen
          name="Markets"
          component={HomeNavigator}
          options={{ headerShown: false }}
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
