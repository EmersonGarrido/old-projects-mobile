import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DashboardStack from "./dashboard.routes";
import CarsStack from "./cars.routes";
import ProfileStack from "./profile.routes";

const AppStack = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "DashboardStack") {
          iconName = focused ? "home" : "home";
        } else if (route.name === "CarsStack") {
          iconName = focused ? "car" : "car";
        } else if (route.name === "ProfileStack") {
          iconName = focused ? "account-edit" : "account-details";
        }
        return (
          <MaterialCommunityIcons
            name={`${iconName}`}
            size={size}
            color={color}
          />
        );
      },
    })}
    tabBarOptions={{
      tabStyle: { borderTopColor: "#1976D2", borderTopWidth: 1 },
    }}
  >
    <AppStack.Screen
      name="DashboardStack"
      component={DashboardStack}
      options={{
        title: "Principal",
      }}
    />
    <AppStack.Screen
      name="CarsStack"
      component={CarsStack}
      options={{ title: "Carros" }}
    />
    <AppStack.Screen
      name="ProfileStack"
      component={ProfileStack}
      options={{ title: "Perfil" }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
