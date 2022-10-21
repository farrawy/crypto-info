import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import PriceChangePerc from "../../components/PriceChangePerc";
import { useNavigation } from "@react-navigation/native";
import CoinDetails from "../DetailsScreens/CoinDetails";
import { Avatar, Card, Title, Image } from "react-native-paper";

var numAbb = require("number-abbreviate");

const Coins = (props) => {
  const navigation = useNavigation();
  const { coins } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Coin Detail", {
          coins: coins,
          name: coins.name,
          symbol: coins.symbol,
          image: coins.image,
          currentPrice: coins.current_price,
        })
      }
    >
      {/* <Text
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
      <Text style={[styles.text]}>
        ${coins.current_price.toLocaleString("en-US", { currency: "USD" })}
      </Text>
      <Text style={[styles.text, { marginLeft: 50 }]}>
        <PriceChangePerc perc={coins.price_change_percentage_24h} />
      </Text> */}

      <Card>
        <Card.Title
          title={`${coins.name}`}
          titleStyle={{ fontWeight: "600" }}
          subtitle={`$${numAbb(coins.market_cap, 1).toUpperCase()}`}
          subtitleStyle={{ fontWeight: "300" }}
          left={(props) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ paddingRight: 10 }}>{coins.market_cap_rank}</Text>
              <Avatar.Image
                size={30}
                // {...props}
                source={{ uri: coins.image }}
                style={{
                  backgroundColor: "transparent",
                }}
              />
            </View>
          )}
          right={(props) => (
            <View style={{ flexDirection: "row" }}>
              <Title {...props} style={{ paddingHorizontal: 10 }}>
                ${coins.current_price}
              </Title>
              <View style={{ paddingHorizontal: 20 }}>
                <PriceChangePerc perc={coins.price_change_percentage_24h} />
              </View>
            </View>
          )}
        />
      </Card>
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
