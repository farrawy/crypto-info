import { View, Text, TouchableOpacity, Image, Share } from "react-native";
import React, { useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import CoinsList from "../screens/Home/CoinsList";
import CoinDetails from "../screens/DetailsScreens/CoinDetails";
import Header from "../components/Header";
import TopTab from "./TopTab";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const HomeNavigator = (route) => {
  const navigation = useNavigation();
  const [favourite, setFavourite] = useState(false);

  const onShare = async (name, currentPrice) => {
    try {
      const result = await Share.share({
        message: `Check out ${name}'s price today: $${currentPrice}.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of result.activityType");
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ScaleFromCenterAndroid,
      }}
    >
      <Stack.Screen
        name="Market"
        component={TopTab}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Coin Detail"
        component={CoinDetails}
        options={({ route }) => ({
          headerTitle: () => null,
          headerLeft: () => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name="arrowleft" size={24} color="#696969" />
                </TouchableOpacity>
                <Image
                  source={{ uri: route?.params?.image }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    marginLeft: 10,
                  }}
                />
                <Text
                  style={{ marginLeft: 10, fontWeight: "600", fontSize: 20 }}
                >
                  {route?.params?.name}
                </Text>
                <Text
                  style={{
                    marginLeft: 3,
                    fontWeight: "500",
                    fontSize: 20,
                    color: "gray",
                  }}
                >
                  ({route?.params?.symbol.toUpperCase()})
                </Text>
              </View>
            </>
          ),
          headerRight: () => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                  <AntDesign name="search1" size={20} color="#696969" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFavourite(!favourite)}
                  style={{ paddingHorizontal: 15 }}
                >
                  <AntDesign
                    name={favourite ? "star" : "staro"}
                    size={20}
                    color={favourite === true ? "#27C784" : "#696969"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    onShare(route?.params?.name, route?.params?.currentPrice)
                  }
                >
                  <FontAwesome5 name="share" size={20} color="#696969" />
                </TouchableOpacity>
              </View>
            </>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
