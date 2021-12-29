import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import React from 'react';
import OnBoarding from '../screens/authentication/OnBoarding';
import Welcome from '../screens/authentication/Welcome';
import Login from '../screens/authentication/Login';
import SignUp from '../screens/authentication/SignUp';
import Mail from '../screens/authentication/Mail';
import ForgotPassword from '../screens/authentication/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function AuthenticationNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'onBoarding'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'Mail'} component={Mail} />
      <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
    </Stack.Navigator>
  );
}
