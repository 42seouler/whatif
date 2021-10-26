import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Category from '../screens/Category';
import {StackScreenProps} from '@react-navigation/stack/src/types';

export type HomeStackParamList = {
  Home: undefined;
  Category: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Group screenOptions={{presentation: 'card'}}>
        <Stack.Screen name={'Category'} component={Category} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;
