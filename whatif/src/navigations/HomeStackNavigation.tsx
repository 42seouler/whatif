import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Board from '../screens/home/Board';
import Category from '../screens/home/Category';
import { HomeRoutes } from './Navigations';
import CardList from '../screens/home/CardList';
import { SalonListDetails } from '../screens/home/SalonListDetails';
import CardDetail from '../screens/home/CardDetail';

const Stack = createStackNavigator<HomeRoutes>();

export default function HomeStackNavigation() {
  return (
    <Stack.Navigator initialRouteName={'List'}>
      <Stack.Screen
        name={'Board'}
        component={Board}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'List'}
        component={CardList}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={'CardDetail'} component={CardDetail} options={{ headerShown: false }}/>
      <Stack.Group screenOptions={{ presentation: 'card' }}>
        <Stack.Screen name={'Category'} component={Category} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
