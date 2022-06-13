import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WatingScreen, SuccessScreen, StartScreen, AddPaymentScreen} from '../index';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={StartScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
      />
      <Stack.Screen
        name="Wating"
        component={WatingScreen}
      />
      <Stack.Screen
        name="Payment"
        component={AddPaymentScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default MyStack