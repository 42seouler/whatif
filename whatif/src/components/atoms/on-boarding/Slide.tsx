import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from '../../../assets/fonts/theme/colors';

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - hp('12%')) / 2 },
    { translateX: right ? width / 2 - wp('13%') : -width / 2 + wp('13%') },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.hero}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: hp('12%'),
    justifyContent: 'center',
  },
  hero: {
    fontSize: hp('9.5%'),
    lineHeight: hp('9.5%'),
    // fontFamily: 'SFProDisplay-Bold',
    color: Colors.onBoardingWhite,
    textAlign: 'center',
  },
});
