import { Animated, Pressable, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React, { useRef } from 'react';
import Color from 'color';
import { Colors } from '../../../assets/fonts/theme/colors';
import { HomeProps } from '../../../screens/home/Board';

type HomeCategoryButtonProps = {
  navigation: HomeProps['navigation'];
};

export default function AddCategory({ navigation }: HomeCategoryButtonProps) {
  const backgroundAnimatedValue = useRef(new Animated.Value(0)).current;
  const textAnimatedValue = useRef(new Animated.Value(0)).current;

  const categoryBackgroundColor = backgroundAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      Color(Colors.darkGrey).lighten(1.5).string(),
      Colors.rallyOrange,
    ],
  });

  const backgroundHandlePressIn = () =>
    Animated.timing(backgroundAnimatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();

  const backgroundHandlePressOut = () =>
    Animated.timing(backgroundAnimatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();

  const categoryTextColor = backgroundAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      Colors.rallyOrange,
      Color(Colors.darkGrey).lighten(1.5).string(),
    ],
  });

  const textHandlePressIn = () =>
    Animated.timing(textAnimatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();

  const textHandlePressOut = () =>
    Animated.timing(textAnimatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();

  return (
    <Pressable
      style={styles.container}
      onPressIn={() => {
        backgroundHandlePressIn();
        textHandlePressIn();
      }}
      onPressOut={() => {
        backgroundHandlePressOut();
        textHandlePressOut();
        // @ts-ignore
        navigation.push('Category');
      }}>
      <Animated.View
        style={[
          styles.categoryButton,
          { backgroundColor: categoryBackgroundColor },
        ]}>
        <Animated.Text
          style={[
            {
              fontSize: hp('3%'),
              fontWeight: 'bold',
            },
            { color: categoryTextColor },
          ]}>
          +
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: wp('5%'),
    marginRight: wp('2%'),
  },
  categoryButton: {
    width: wp('12%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
