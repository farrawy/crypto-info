import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import PriceChangePerc from "../../components/PriceChangePerc";

var numAbb = require("number-abbreviate");

const Coins = (props) => {
  const { coins } = props;
  return (
    <TouchableOpacity style={styles.card}>
      <Text
        style={[
          styles.text,
          { alignSelf: "center", padding: 10, paddingRight: 20 },
        ]}
      >
        {coins.market_cap_rank}
      </Text>
      <Image source={{ uri: coins.image }} style={styles.image} />
      <View style={styles.marketCap}>
        <Text style={[styles.text]}>{coins.symbol}</Text>
        <Text style={[styles.text]}>{numAbb(coins.market_cap, 2)}</Text>
      </View>
      <Text style={[styles.text]}>${coins.current_price}</Text>
      <Text style={[styles.text, { marginLeft: 50 }]}>
        <PriceChangePerc perc={coins.price_change_percentage_24h} />
      </Text>
    </TouchableOpacity>
  );
};

export default Coins;

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
