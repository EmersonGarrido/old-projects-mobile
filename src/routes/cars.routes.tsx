import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RequestCar from '../screens/RequestCar';
import RequestedCar from '../screens/RequestedCar';
import RequestDetails from '../screens/RequestDetails';

const CarsStack = createStackNavigator();

const CarsRoutes: React.FC = () => (
  <CarsStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#003f82',
      },
    }}
  >
    <CarsStack.Screen name="RequestedCar" component={RequestedCar} />
    <CarsStack.Screen name="RequestCar" component={RequestCar} />
    <CarsStack.Screen name="RequestDetails" component={RequestDetails} />
  </CarsStack.Navigator>
);

export default CarsRoutes;
