import { StatusBar } from "expo-status-bar";
import BottomTab from "./navigator/BottomTab";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";

export default function App() {
  return (
    <>
      <BottomTab />
      <StatusBar style="auto" />
    </>
  );
}
