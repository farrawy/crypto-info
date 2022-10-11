import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header";
import CategoryList from "../screens/Category/CategoryList";
import Convert from "../screens/Convert/Convert";
import CoinsList from "../screens/Home/CoinsList";
import TrendingCoinsList from "../screens/Trending/TrendingCoinsList";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <>
      <Header />
      <Tab.Navigator initialRouteName="Category">
        <Tab.Screen name="Market" component={CoinsList} />
        <Tab.Screen name="Trending" component={TrendingCoinsList} />
        <Tab.Screen name="Convert" component={Convert} />
        {/* <Tab.Screen name="Category" component={CategoryList} /> */}
      </Tab.Navigator>
    </>
  );
};

export default TopTab;
