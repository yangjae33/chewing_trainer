import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import homeView from "../home/homeView";

const StackHome = createStackNavigator(
  {
    homeView: {
      screen: homeView,
    },
  },
  {
    initialRouteName: "homeView",
    headerMode: "none",
    mode: "modal",
  }
);

export default StackHome;
