import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const PriceChangePerc = ({ perc }) => {
  const percentage_color = perc < 0 ? "#EA3944" : "#27C784";
  const percentage_bg =
    perc < 0 ? "rgba(255, 20, 0, 0.2)" : "rgba(60, 199, 163, 0.2)";
  const percentage_icon = perc < 0 ? "caretdown" : "caretup";
  return (
    <View
      style={{
        backgroundColor: percentage_bg,
        padding: 5,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: percentage_color }}>
        <AntDesign name={percentage_icon} /> {perc.toFixed(2)}%
      </Text>
    </View>
  );
};

export default PriceChangePerc;
