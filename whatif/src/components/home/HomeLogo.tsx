import {Animated, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React, {useRef} from 'react';

function HomeLogo() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const fontColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'black'],
  });

  const handlePressIn = () =>
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();

  const handlePressOut = () =>
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();

  return (
    <Pressable
      style={styles.container}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.Text style={[styles.animatedText, {color: fontColor}]}>
        whatif
      </Animated.Text>
    </Pressable>
  );
}

export default HomeLogo;

const styles = StyleSheet.create({
  container: {
    left: wp('5%'),
  },
  animatedText: {
    fontSize: hp('3%'),
  },
});
