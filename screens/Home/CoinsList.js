import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { baseUrl } from "../../api/baseUrl";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useScrollToTop } from "@react-navigation/native";
import axios from "axios";
import Coins from "./Coins";
import GeneralInfo from "../../components/GeneralInfo";

var numberAbb = require("number-abbreviate");

const CoinsList = () => {
  const [coin, setCoin] = useState([]);
  const [globalMarketCap, setGlobaMarketCap] = useState([]);
  const [globalPer, setGlobalPerc] = useState([]);
  const [totalVolume, setTotalVolume] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    fetchCoin();
    fetchGlobal();
    setRefreshing(false);
  }, [refreshing]);

  const ref = useRef(null);
  useScrollToTop(ref);

  const renderItem = ({ item }) => <Coins coins={item} />;

  useEffect(() => {
    fetchCoin();
    fetchGlobal();
  }, []);

  const fetchCoin = async () => {
    const url = `${baseUrl}/coins/markets?vs_currency=usd`;

    const response = await axios.get(url);

    setCoin(response.data);
  };

  const fetchGlobal = async () => {
    const url = `${baseUrl}/global`;

    const response = await axios.get(url);
    const global_data = response.data.data;

    setGlobaMarketCap(global_data.total_market_cap.usd);
    setGlobalPerc(global_data.market_cap_change_percentage_24h_usd.toFixed(2));
    setTotalVolume(global_data.total_volume.usd);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 0, margin: 0 }}>
      <FlatList
        // navigation={props.navigation}
        ref={ref}
        data={coin}
        renderItem={renderItem}
        key={coin.id}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <>
            <ScrollView
              horizontal
              contentContainerStyle={{
                padding: 10,
                width: "100%",
              }}
            >
              <GeneralInfo
                title={"Global Market Cap"}
                market_cap={numberAbb(globalMarketCap)}
                percentage={globalPer}
              />
              <GeneralInfo
                title={"24H Volume"}
                market_cap={numberAbb(totalVolume)}
              />
            </ScrollView>
            <View style={styles.card}>
              <TouchableOpacity>
                <Text style={[styles.text, { alignSelf: "center" }]}>#</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[styles.text]}>Market Cap</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[styles.text]}>Price(USD)</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[styles.text, { marginLeft: 50 }]}>24h %</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default CoinsList;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {},
  marketCap: {
    marginRight: "auto",
    marginLeft: 20,
  },
});
