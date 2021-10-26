import {StackScreenProps} from '@react-navigation/stack/src/types';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, View, Pressable, Keyboard} from 'react-native';
import {RootStackParamList} from '../../App';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalColors} from '../globalStyles';
import LoginTextInput from '../components/LoginTextInput';
import LoginOptionButton from '../components/LoginOptionButton';
import LoginButton from '../components/LoginButton';

export type SignInProps = StackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({route, navigation}: SignInProps) {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // todo 부모컴포넌트를 마지막에 한번 랜더링하고 로그인하기 버튼으로 로그인 구현하기
  // const userIdInput = useRef('');
  // const userPasswordInput = useRef('');

  // const setUserIdValue = (input: string) => {
  //   userIdInput.current = input;
  //   console.log(userIdInput);
  // };

  // const setUserPasswordValue = (input: string) => {
  //   userPasswordInput.current = input;
  //   console.log(userPasswordInput.current);
  // };

  useEffect(() => {
    AsyncStorage.getItem('userData').then(value => {
      if (value === null) {
        // @ts-ignore
        navigation.replace('MainTapNavigation');
      } else {
        console.log('현재 비 로그인 상태입니다.');
      }
    });
  });

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>로그인</Text>
        </View>
        <LoginTextInput
          placeholderText={'아이디'}
          secureText={false}
          outFocusFunc={setUserId}
        />
        <LoginTextInput
          placeholderText={'비밀번호'}
          secureText={true}
          outFocusFunc={setUserPassword}
        />
        <View style={styles.footer}>
          <LoginButton
            userId={userId}
            userPassword={userPassword}
            navigation={{route, navigation}}
          />
        </View>
        <View style={styles.body}>
          <LoginOptionButton name={'아이디 찾기'} />
          <LoginOptionButton name={'비밀번호 찾기'} />
          <LoginOptionButton name={'회원가입'} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: hp('30%'),
    backgroundColor: globalColors.screenBackgroundColor,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: hp('4%'),
    color: globalColors.fontWhiteColor,
    padding: hp('5%'),
  },
  body: {
    flex: 1,
    backgroundColor: globalColors.screenBackgroundColor,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    width: wp('90%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  loginText: {
    color: globalColors.fontGreyColor,
    fontSize: hp('1.8%'),
    fontWeight: 'bold',
  },
  footer: {
    height: hp('8%'),
    alignItems: 'center',
    backgroundColor: globalColors.screenBackgroundColor,
  },
});

export default SignIn;
