import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Share,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import ConvertInput from "./ConvertInput";

const { width, height } = Dimensions.get("window");

const Chart = (props) => {
  const {
    symbol,
    currentPrice,
    logoUrl,
    name,
    priceChangePercentage7d,
    sparkline,
    marketCap,
    marketCapChange24h,
    marketCapChangePercentage24h,
    ath,
    atl,
    maxSupply,
    lastUpdated,
    high24h,
    low24h,
  } = props;

  const percentage_color = priceChangePercentage7d < 0 ? "#EA3944" : "#27C784";
  const percentage_icon = priceChangePercentage7d < 0 ? "caretdown" : "caretup";

  return (
    <View style={styles.chartWrapper}>
      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitle}>
          <Text style={styles.subtitle}>7d</Text>
        </View>

        <View style={styles.lowerTitle}>
          <Text style={styles.boldTitle}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[styles.title, { color: percentage_color }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
        <Text>Chart is not working</Text>
        <ConvertInput
          coinValue={currentPrice}
          symbol={symbol}
          icon={logoUrl}
          name={name}
        />
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16,
  },
  titlesWrapper: {
    marginHorizontal: 16,
  },
  upperTitle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
  upperLeftTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  lowerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
  inputs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  textInput: {
    width: 80,
    height: 25,
    padding: 5,
  },
});
