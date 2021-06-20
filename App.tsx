import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";

import Routes from "./src/routes";
import AuthProvider from "./src/hooks";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#003f82" />
        <Routes />
        <FlashMessage />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
