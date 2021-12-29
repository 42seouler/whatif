import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { Colors } from '../../../assets/fonts/theme/colors';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface ButtonProps {
  variant: 'default' | 'primary' | 'login';
  label?: string;
  onPress: () => void;
  style?: RectButtonProperties['style'];
}

const Button = ({ label, onPress, variant, style }: ButtonProps) => {
  const backgroundColor =
    variant === 'primary'
      ? Colors.onBoardingGreen
      : variant === 'default'
      ? Colors.onBoardingGray
      : Colors.rallyYellow;
  const color =
    variant === 'primary' ? Colors.onBoardingBlack : Colors.onBoardingBlack;
  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}>
      <Text style={[styles.button, { color: color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: hp('3.5%'),
    height: hp('6.5%'),
    width: wp('60%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: hp('2%'),
    color: 'text',
    textAlign: 'center',
  },
});
