import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import HomeStackNavigation from './HomeStackNavigation';

type RootTapParamList = {
  HomeStackNavigation: undefined;
};

const Tab = createBottomTabNavigator<RootTapParamList>();

function MainTapNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HomeStackNavigation'}
        component={HomeStackNavigation}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MainTapNavigation;
