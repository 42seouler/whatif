import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface DotProps {
  index: number;
  currentIndex: Animated.SharedValue<number>;
}

const radius = hp('1%');
const borderRadius = hp('1%') / 2;
const margin = hp('0.5%');

const Dot = ({ index, currentIndex }: DotProps) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    const scale = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP,
    );
    return {
      opacity: opacity,
      backgroundColor: '#2CB9B0',
      width: radius,
      height: radius,
      borderRadius: borderRadius,
      margin: margin,
      transform: [{ scale }],
    };
  });
  return <Animated.View style={style} />;
};

export default Dot;
