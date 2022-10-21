import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import CategoryList from "../screens/Category/CategoryList";
import Convert from "../screens/Convert/Convert";
import CoinDetails from "../screens/DetailsScreens/CoinDetails";
import CoinsList from "../screens/Home/CoinsList";
import TrendingCoinsList from "../screens/Trending/TrendingCoinsList";
import HomeNavigator from "./HomeNavigator";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Market" component={CoinsList} />
      <Tab.Screen name="Trending" component={TrendingCoinsList} />
      {/* <Tab.Screen name="Category" component={CategoryList} /> */}
    </Tab.Navigator>
  );
};

export default TopTab;
