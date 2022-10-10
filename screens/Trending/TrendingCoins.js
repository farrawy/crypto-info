import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TrendingCoins = ({ trending_coins }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text
        style={[
          styles.text,
          { alignSelf: "center", padding: 10, paddingRight: 20 },
        ]}
      >
        {trending_coins.market_cap_rank}
      </Text>
      <Image source={{ uri: trending_coins.large }} style={styles.image} />
      <Text style={[styles.text]}>{trending_coins.symbol}</Text>
      <Text style={[styles.text]}>${trending_coins.price_btc}</Text>
    </TouchableOpacity>
  );
};

export default TrendingCoins;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    textTransform: "uppercase",
  },
  marketCap: {
    marginRight: "auto",
    marginLeft: 20,
  },
});
