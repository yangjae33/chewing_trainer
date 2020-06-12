import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import chewingView from "../chewingCalculate/chewingView";
import chewingCalculateView from "../chewingCalculate/chewingCalculateView";
import Setting from "../setting/setting";
import Profile from "../profile/profile";
const StackChewing = createStackNavigator(
  {
    chewingView: {
      screen: chewingView,
    },
    chewingCalView: {
      screen: chewingCalculateView,
    },
    setting: {
      screen: Setting,
    },
    profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: "chewingView",
    headerMode: "none",
    mode: "modal",
  }
);

export default StackChewing;
