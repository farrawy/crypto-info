import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Avatar, Card } from "react-native-paper";
import FastImage from "react-native-fast-image";

const SearchComponents = ({ item }) => {
  return (
    <TouchableOpacity>
      <Card>
        <Card.Title
          title={item.symbol}
          left={(props) => (
            <Avatar.Image
              {...props}
              source={{ uri: item.large }}
              style={{ backgroundColor: "transparent" }}
            />
          )}
          subtitle={item.name}
        />
      </Card>
    </TouchableOpacity>
  );
};

export default SearchComponents;

const styles = StyleSheet.create({});
