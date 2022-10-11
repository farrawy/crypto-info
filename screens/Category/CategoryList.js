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
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useScrollToTop } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";
import Category from "./Category";

const CategoryList = () => {

  return (
    <View>
      <Category />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
