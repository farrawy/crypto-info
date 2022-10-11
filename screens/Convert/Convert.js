import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import { Octicons } from "@expo/vector-icons";
import { baseUrl } from "../../api/baseUrl";
import axios from "axios";

const coins = ["Bitcoin", "Ethereum", "Cardano", "Doge", "Shiba"];
const currency = ["USD", "EUR", "SAR", "TRY"];

const Convert = () => {
  const [value, setValue] = useState(0);
  const [coinSelect, setCoinSelect] = useState(coins[0]);
  const [currencySelect, setCurrencySelect] = useState(currency[0]);
  const [coin, setCoin] = useState([]);
  const [coinName, setCoinName] = useState([]);
  const [coinSymbol, setCoinSymbol] = useState([]);
  const [coinPrice, setCoinPrice] = useState([]);
  const [newCoinPrice, setNewCoinPrice] = useState([]);

  useEffect(() => {
    fetchCoin();
  }, []);

  // on select use effect to find name of selected item and get it's object from url coinName.find()
  //

  const fetchCoin = async () => {
    const url = `${baseUrl}/coins/markets?vs_currency=usd`;

    const response = await axios.get(url, { responseType: "json" });
    const newResponse = response?.data;
    const mapped_response_coin_name = newResponse?.map((res) => {
      return res.id;
    });
    setCoinName(mapped_response_coin_name);
    // const mapped_response_coin_symbol = newResponse?.map((res) => {
    //   return res.symbol;
    // });
    const mapped_response_coin_price = newResponse?.map((res) => {
      return res;
    });
    setCoinPrice(mapped_response_coin_price.current_price);

    const name = coinName[20];
    const price = newResponse.find((element) => element.id === name);
    setNewCoinPrice(price);

    setCoinSymbol(coinName.indexOf(name));
    console.log(coinSymbol);
    console.log(coinName[coinSymbol]);

    console.log(newCoinPrice.current_price);
    console.log(mapped_response_coin_price.length); // 100
  };

  //   console.log(coin);

  const convert = () => {
    console.log(coinSelect);
    console.log(currencySelect);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Amount to Convert"
        value={value}
        onChangeText={setValue}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SelectDropdown
          data={coinName}
          onSelect={(selectedItem, index) => {
            setCoinSelect(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          search={true}
          defaultValueByIndex={0}
        />
        <TouchableOpacity>
          <Octicons name="arrow-switch" size={26} />
        </TouchableOpacity>
        <SelectDropdown
          data={currency}
          onSelect={(selectedItem, index) => {
            setCurrencySelect(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          search={true}
          defaultValueByIndex={0}
        />
      </View>
      <Button title="Convert" onPress={convert} />
    </View>
  );
};

export default Convert;

const styles = StyleSheet.create({});
