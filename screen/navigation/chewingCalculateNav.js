import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import chewingCalculateView from "../chewingCalculate/chewingCalculateView";

const StackChewing = createStackNavigator(
  {
    chewingView: {
      screen: chewingCalculateView,
    },
  },
  {
    initialRouteName: "chewingView",
    headerMode: "none",
    mode: "modal",
  }
);

export default StackChewing;
