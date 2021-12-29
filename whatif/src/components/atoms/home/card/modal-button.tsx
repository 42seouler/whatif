import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Color from 'color';
import {colors} from '../../../../../../../presious/whatif/whatif/src/assets/fonts/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Animated, Pressable, StyleSheet, Text} from 'react-native';
import React, {useRef} from 'react';

type ModalButtonProps = {
  iconName: string;
  iconColor: string;
  iconText: string;
  iconTextColor: string;
};

function ModalButton({
  iconName,
  iconColor,
  iconText,
  iconTextColor,
}: ModalButtonProps) {
  const backgroundAnimatedValue = useRef(new Animated.Value(0)).current;

  const buttonBackgroundColor = backgroundAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      Color(colors.darkGrey).lighten(1.5).string(),
      Color(colors.darkGrey).lighten(0.5).string(),
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

  return (
    <Pressable
      onPressIn={backgroundHandlePressIn}
      onPressOut={backgroundHandlePressOut}>
      <Animated.View
        style={[styles.button, {backgroundColor: buttonBackgroundColor}]}>
        <Icon name={iconName} color={iconColor} size={hp('4%')} />
        <Text style={[styles.text, {color: iconTextColor}]}>{iconText}</Text>
      </Animated.View>
    </Pressable>
  );
}

export default ModalButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('28%'),
    height: hp('10%'),
    marginRight: wp('3.5%'),
    borderRadius: 10,
  },
  text: {
    marginTop: hp('0.5%'),
    fontWeight: 'bold',
  },
});
