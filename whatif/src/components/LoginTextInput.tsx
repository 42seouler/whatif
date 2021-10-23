import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import {globalColors} from '../globalStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type LoginTextInputProps = {
  placeholderText: string;
  secureText: boolean;
  outFocusFunc: (name: string) => void;
};

function LoginTextInput({
  placeholderText,
  secureText,
  outFocusFunc,
}: LoginTextInputProps) {
  const [textBorderWidth, setTextBorderWidth] = useState(1);
  const [textInputBottom, setTextInputBottom] = useState(
    globalColors.fontGreyColor,
  );
  const animatedValue = useRef(new Animated.ValueXY()).current;
  const [input, setInput] = useState('');

  const handleOnFocusUserId = () =>
    Animated.timing(animatedValue, {
      toValue: {x: 0, y: -hp('3.5%')},
      duration: 700,
      useNativeDriver: false,
    }).start();

  const handleOutFocusUserId = () =>
    Animated.timing(animatedValue, {
      toValue: {x: 0, y: 0},
      duration: 700,
      useNativeDriver: false,
    }).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.placeholder,
          {
            transform: [
              {translateX: animatedValue.x},
              {translateY: animatedValue.y},
            ],
          },
        ]}>
        <Text style={styles.placeholderText}>{placeholderText}</Text>
      </Animated.View>
      <TextInput
        onChangeText={newInput => {
          setInput(newInput);
          outFocusFunc(newInput);
        }}
        value={input}
        style={[
          styles.TextInputText,
          {
            borderColor: textInputBottom,
            borderBottomWidth: textBorderWidth,
          },
        ]}
        autoCapitalize="none"
        secureTextEntry={secureText}
        onFocus={() => {
          setTextInputBottom(globalColors.fontWhiteColor);
          setTextBorderWidth(3);
          handleOnFocusUserId();
        }}
        onBlur={() => {
          setTextInputBottom(globalColors.fontGreyColor);
          setTextBorderWidth(1);
          if (!input) {
            handleOutFocusUserId();
          }
        }}
      />
    </View>
  );
}

export default LoginTextInput;

const styles = StyleSheet.create({
  container: {
    height: hp('9%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.screenBackgroundColor,
  },
  placeholder: {
    position: 'absolute',
    left: wp('5%'),
    paddingBottom: hp('1%'),
  },
  placeholderText: {
    color: globalColors.fontGreyColor,
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  TextInputText: {
    width: '90%',
    fontSize: hp('3%'),
    color: globalColors.fontWhiteColor,
    fontWeight: 'bold',
    paddingBottom: hp('1%'),
    borderBottomWidth: 1,
  },
});
