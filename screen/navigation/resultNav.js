import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import resultView from "../result/resultView";
import Setting from "../setting/setting";
import Profile from "../profile/profile";
const StackResult = createStackNavigator(
  {
    resultView: {
      screen: resultView,
    },
    setting: {
      screen: Setting,
    },
    profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: "resultView",
    headerMode: "none",
    mode: "modal",
  }
);

export default StackResult;
