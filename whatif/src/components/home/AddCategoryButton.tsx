import {Animated, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React, {useRef} from 'react';
import Color from 'color';
import {globalColors} from '../../globalStyles';
import {HomeProps} from '../../screens/Home';

type HomeCategoryButtonProps = {
  navigation: HomeProps['navigation'];
};

function AddCategoryButton({navigation}: HomeCategoryButtonProps) {
  const backgroundAnimatedValue = useRef(new Animated.Value(0)).current;
  const textAnimatedValue = useRef(new Animated.Value(0)).current;

  const categoryBackgroundColor = backgroundAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      Color(globalColors.darkGrey).lighten(1.5).string(),
      globalColors.rallyOrange,
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
      globalColors.rallyOrange,
      Color(globalColors.darkGrey).lighten(1.5).string(),
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
          {backgroundColor: categoryBackgroundColor},
        ]}>
        <Animated.Text
          style={[
            {
              fontSize: hp('3%'),
              fontWeight: 'bold',
            },
            {color: categoryTextColor},
          ]}>
          +
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

export default AddCategoryButton;

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
