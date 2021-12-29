import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import MainTapNavigation from './src/navigations/MainTapNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationNavigation from './src/navigations/AuthenticationNavigaiton';

export type RootStackParamList = {
  AuthenticationNavigation: undefined;
  MainTapNavigation: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="MainTapNavigation"
        // initialRouteName="AuthenticationNavigation"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name="AuthenticationNavigation"
          component={AuthenticationNavigation}
        />
        <RootStack.Screen
          name="MainTapNavigation"
          component={MainTapNavigation}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
