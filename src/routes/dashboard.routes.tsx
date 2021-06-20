import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import LogoHeader from "../components/LogoHeader";

import Home from "../screens/Home";
import EditProfile from "../screens/EditProfile";
import RequestCar from "../screens/RequestCar";
import RequestedCar from "../screens/RequestedCar";
import Teams from "../screens/Teams";

const DashboardStack = createStackNavigator();

const DashboardRoutes: React.FC = () => (
  <DashboardStack.Navigator
    screenOptions={{
      header: () => (
        <View style={{ backgroundColor: "#003f82" }}>
          {/* <LogoHeader /> */}
        </View>
      ),
      headerStyle: {
        backgroundColor: "#000",
      },
    }}
  >
    <DashboardStack.Screen name="Home" component={Home} />
    <DashboardStack.Screen name="EditProfile" component={EditProfile} />
    <DashboardStack.Screen name="RequestCar" component={RequestCar} />
    <DashboardStack.Screen name="RequestedCar" component={RequestedCar} />
    <DashboardStack.Screen name="Teams" component={Teams} />
  </DashboardStack.Navigator>
);

export default DashboardRoutes;
