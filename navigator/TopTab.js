import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header";
import Category from "../screens/Category/Category";
import CoinsList from "../screens/Home/CoinsList";
import TrendingCoinsList from "../screens/Trending/TrendingCoinsList";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <>
      <Header />
      <Tab.Navigator>
        <Tab.Screen name="Market" component={CoinsList} />
        <Tab.Screen name="Trending" component={TrendingCoinsList} />
        <Tab.Screen name="Category" component={Category} />
      </Tab.Navigator>
    </>
  );
};

export default TopTab;
