import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TrendingCoinsList from "../screens/Trending/TrendingCoinsList";
import { Searchbar, TextInput } from "react-native-paper";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
import Term from "./Term";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState(null);
  const [query, setQuery] = useState("");

  // TODO useEffect render on onChangeSearch
  useEffect(() => {
    fetchCoin();
  }, [term]);

  const fetchCoin = async () => {
    axios
      .get(`${baseUrl}/search?query=${term}`)
      .then((res) => {
        // console.log("res =>", res?.config);
        setData(res?.data?.coins);
      })
      .catch((error) => {
        console.log("error =>", error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 15 }}>
        <Searchbar placeholder="Search" onChangeText={setTerm} value={term} />
      </View>
      <FlatList data={data} renderItem={({ item }) => <Term data={item} />} />
      {/* <TrendingCoinsList /> */}
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
