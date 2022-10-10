import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const GeneralInfo = ({ title, market_cap, percentage }) => {
  const percentage_color = percentage < 0 ? "#EA3944" : "#27C784";
  const percentage_icon = percentage < 0 ? "caretdown" : "caretup";
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.text]}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>${market_cap}</Text>
        {percentage && (
          <Text
            style={[styles.text, { marginLeft: 10, color: percentage_color }]}
          >
            <AntDesign name={percentage_icon} color={percentage_color} />
            {percentage}%
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default GeneralInfo;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
    borderLeftWidth: 8,
    borderLeftColor: "#27C784",
    borderRadius: 10,
    backgroundColor: "rgba(60, 199, 163, 0.2)",
  },
  text: {
    fontWeight: "500",
  },
});
