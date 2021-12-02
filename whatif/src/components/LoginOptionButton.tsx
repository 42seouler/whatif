import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {globalColors} from '../globalStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type LoginButtonProps = {
  name: string;
};

function LoginOptionButton({name}: LoginButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? globalColors.buttonBackgroundColor
            : globalColors.darkGrey,
        },
        styles.container,
      ]}
      onPress={() => {
        console.log(name);
      }}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
}

export default LoginOptionButton;

const styles = StyleSheet.create({
  container: {
    width: wp('18%'),
    height: hp('3%'),
    justifyContent: 'center',
    marginHorizontal: wp('2%'),
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: globalColors.fontGreyColor,
    fontSize: hp('1.5%'),
    fontWeight: 'bold',
  },
});
