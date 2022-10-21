import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useScrollToTop } from "@react-navigation/native";
import { baseUrl } from "../../api/baseUrl";
import axios from "axios";
import TrendingCoins from "./TrendingCoins";
import { FlashList } from "@shopify/flash-list";

const TrendingCoinsList = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    fetchCoin();
    setRefreshing(false);
  }, [refreshing]);

  const ref = useRef(null);
  useScrollToTop(ref);

  const renderItem = ({ item }) => <TrendingCoins trending_coins={item} />;

  useEffect(() => {
    fetchCoin();
  }, []);

  const fetchCoin = async () => {
    const url = `${baseUrl}/search/trending`;
    const response = await axios.get(url, { responseType: "json" });
    const newRes = response.data.coins;
    const new_newRes = newRes.map((res) => {
      return res.item;
    });
    setTrendingCoin(new_newRes);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        ref={ref}
        data={trendingCoin}
        renderItem={renderItem}
        key={trendingCoin.coin_id}
        keyExtractor={(item) => item.coin_id}
        initialNumToRender={8}
        removeClippedSubviews={true}
        maxToRenderPerBatch={15}
        estimatedItemSize={100}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <>
            <View style={{ alignItems: "flex-end", padding: 10 }}>
              <Text>Trending: {trendingCoin.length} coins</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 25,
              }}
            >
              <Text>#</Text>
              <Text>#</Text>
              <Text>#</Text>
            </View>
          </>
        }
      />
    </View>
  );
};

export default TrendingCoinsList;

const styles = StyleSheet.create({});
