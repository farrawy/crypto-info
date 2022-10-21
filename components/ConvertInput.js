import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, Image, Button } from "react-native-paper";
import { Octicons } from "@expo/vector-icons";

const ConvertInput = (props) => {
  const { coinValue, symbol, icon, name } = props;
  const [coin, setCoin] = useState("1");
  const [currency, setCurrency] = useState(coinValue * coin);

  useEffect(() => {
    setCurrency(coin * coinValue);
  }, [coin]);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{ width: 150 }}
        label={symbol.toUpperCase()}
        value={coin.toLocaleString()}
        onChangeText={setCoin}
        mode="outlined"
      />
      <TouchableOpacity>
        <Octicons name="arrow-switch" size={26} />
      </TouchableOpacity>
      <TextInput
        style={{ width: 150 }}
        label="USD"
        value={currency.toLocaleString()}
        onChangeText={setCurrency}
        mode="outlined"
      />
    </View>
  );
};

export default ConvertInput;

const styles = StyleSheet.create({});
