import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Term = (props) => {
  const { data } = props;
  return (
    <TouchableOpacity>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default Term;

const styles = StyleSheet.create({});
