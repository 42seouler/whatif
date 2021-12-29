import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, { useEffect, useRef } from 'react';
import { Colors } from '../assets/fonts/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HomeStackNavigation from './HomeStackNavigation';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: 'ios-home',
    component: HomeStackNavigation,
    color: Colors.rallyOrange,
    alphaClr: Colors.rallyOrange,
  },
  {
    route: 'Search',
    label: 'Search',
    icon: 'ios-search',
    component: SearchScreen,
    color: Colors.rallyYellow,
    alphaClr: Colors.rallyYellow,
  },
  {
    route: 'Write',
    label: 'Write',
    icon: 'ios-pencil',
    component: WriteScreen,
    color: Colors.rallyBlue,
    alphaClr: Colors.rallyBlue,
  },
  {
    route: 'Tarot',
    label: 'Tarot',
    icon: 'ios-trail-sign-sharp',
    component: TarotScreen,
    color: Colors.rallyGreen,
    alphaClr: Colors.rallyGreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    icon: 'ios-person',
    component: ProfileScreen,
    color: Colors.rallyPurple,
    alphaClr: Colors.rallyPurple,
  },
];

const Tab = createBottomTabNavigator();

// @ts-ignore
const TabButton = props => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const textViewRef = useRef<any>(null);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}>
      <View>
        <Animatable.View ref={viewRef} style={StyleSheet.absoluteFillObject} />
        <View
          style={styles.btn}>
          <Icon
            name={item.icon}
            color={Colors.fontWhiteColor}
            size={hp('2.0%')}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: Colors.fontWhiteColor,
                  paddingHorizontal: hp('1.0%'),
                  fontSize: hp('2%'),
                }}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

function WriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Write!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function TarotScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tarot!</Text>
    </View>
  );
}

export default function MainTapNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.darkGrey,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp('1.0%'),
    borderRadius: hp('4.0%') / 2,
  },
});
