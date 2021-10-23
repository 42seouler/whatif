import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

function MainTapNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MainTapNavigation;
