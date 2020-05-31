import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import resultView from "../result/resultView";

const StackResult = createStackNavigator(
  {
    resultView: {
      screen: resultView,
    },
  },
  {
    initialRouteName: "resultView",
    headerMode: "none",
    mode: "modal",
  }
);

export default StackResult;
