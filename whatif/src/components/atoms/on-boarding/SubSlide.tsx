import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Button from './Button';
import { Colors } from '../../../assets/fonts/theme/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  description: {
    fontSize: hp('2.0%'),
    lineHeight: hp('3.0%'),
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: hp('4.8%'),
  },
  title: {
    fontSize: hp('3.0%'),
    // fontFamily: 'SFProDisplay-Semibold',
    marginBottom: hp('2.0%'),
    textAlign: 'center',
    color: Colors.onBoardingBlack,
  },
});

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

export default SubSlide;
