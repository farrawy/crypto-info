import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/default-user-avatar.png")}
            style={{
              width: 40,
              height: 40,
              borderColor: "#AAA",
              borderWidth: 2,
              borderRadius: "50%",
              alignSelf: "flex-start",
            }}
          />
          <Text style={{ marginLeft: 10 }}>Account</Text>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="ios-notifications-outline"
            size={30}
            color="#696969"
          />
        </TouchableOpacity>

        {/* <Text style={{ paddingHorizontal: 20 }}>Header</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default Header;
