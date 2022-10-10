import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { baseUrl } from "./api/baseUrl";
import Header from "./components/Header";
import BottomTab from "./navigator/BottomTab";
import TopTab from "./navigator/TopTab";
import CoinsList from "./screens/Home/CoinsList";

export default function App() {
  return (
    <>
      <BottomTab />
      <StatusBar style="auto" />
    </>
  );
}
