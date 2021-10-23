import {Alert, Keyboard, Pressable, StyleSheet, Text} from 'react-native';
import {globalColors} from '../globalStyles';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SignInProps} from '../screens/SignIn';

type LoginButtonProps = {
  userId: string;
  userPassword: string;
  navigation: SignInProps;
};

interface LoginData {
  [key: string]: string;
  userId: string;
  userPassword: string;
}

function LoginButton({userId, userPassword, navigation}: LoginButtonProps) {
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    Keyboard.dismiss();
    setErrortext('');
    if (userId === '') {
      Alert.alert('아이디를 입력하세요.');
      return;
    }
    if (userPassword === '') {
      Alert.alert('패스워드를 입력하세요.');
      return;
    }
    setLoading(true);
    let loginData: LoginData = {userId: userId, userPassword: userPassword};
    let formBody = [];
    for (let key in loginData) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(loginData[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    let formBodyToString = formBody.join('&');
    console.log(formBodyToString);
    // todo 화면 구현 후 axios로 서버로 데이터 보내기
    // @ts-ignore
    navigation.navigation.replace('Home');
  };

  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? globalColors.screenBackgroundColor
            : globalColors.buttonBackgroundColor,
        },
        styles.button,
      ]}
      onPress={handleSubmitPress}>
      <Text style={styles.loginText}>로그인</Text>
    </Pressable>
  );
}

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    width: wp('90%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginText: {
    color: globalColors.fontGreyColor,
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
});
