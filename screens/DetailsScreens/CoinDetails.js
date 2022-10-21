import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Chart from "../../components/Chart";

const CoinDetails = (props) => {
  const [item, setItem] = useState(props?.route?.params?.coins);

  // console.log(item);
  return (
    <View>
      {item && (
        <Chart
          symbol={item.symbol}
          currentPrice={item.current_price}
          logoUrl={item.image}
          name={item.name}
          priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
          sparkline={item.sparkline_in_7d.price}
          marketCap={item.market_cap}
          marketCapChange24h={item.market_cap_change_24h}
          marketCapChangePercentage24h={item.market_cap_change_percentage_24h}
          ath={item.ath} // all time high
          atl={item.atl} // all time low
          maxSupply={item.max_supply}
          lastUpdated={item.last_updated}
          high24h={item.high_24h}
          low24h={item.low_24h}
        />
      )}
    </View>
  );
};

export default CoinDetails;

const styles = StyleSheet.create({});
