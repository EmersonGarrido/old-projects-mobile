import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: "#003f82",
      },
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
