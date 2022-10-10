import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TrendingCoinsList from "../screens/Trending/TrendingCoinsList";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  // TODO useEffect render on onChangeSearch
  // TODO inside the useEffect we will pass the function
  // TODO function will be axios.get(url)
  // TODO add /search?query=${searchQuery} to baseUrl
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 15 }}>
        <Searchbar
          placeholder="Search for a coin"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <TrendingCoinsList />
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
