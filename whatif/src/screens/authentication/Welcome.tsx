import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import Button from '../../components/atoms/on-boarding/Button';
import { AuthNavigationProps } from '../../navigations/Navigations';
import { Colors } from '../../assets/fonts/theme/colors';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const picture = {
  src: require('../assets/welcome.png'),
};

const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={picture.src}
          resizeMode={'center'}
          style={{
            width: wp('80%'),
            height: hp('25%'),
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader} />
        <View style={styles.contentBody}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>시작합니다!</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Button
              variant="primary"
              label="로그인"
              onPress={() => navigation.navigate('Login')}
              style={{ marginBottom: hp('2%') }}
            />
            <Button
              label="회원가입"
              variant="default"
              onPress={() => navigation.navigate('SignUp')}
              style={{ marginBottom: hp('2%') }}
            />
            <BorderlessButton
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.button}>비밀번호 찾기</Text>
            </BorderlessButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardingWhite,
  },
  header: {
    flex: 1,
    borderBottomRightRadius: hp('9.0%'),
    backgroundColor: Colors.rallyYellow,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    backgroundColor: Colors.rallyYellow,
  },
  contentHeader: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: hp('9.0%'),
  },
  contentBody: {
    backgroundColor: Colors.onBoardingWhite,
    borderTopLeftRadius: hp('9.0%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    paddingBottom: hp('10%'),
  },
  title: {
    fontSize: hp('3%'),
    lineHeight: hp('3.5%'),
    // fontFamily: "SFProDisplay-Semibold",
    color: Colors.onBoardingBlack,
  },
  button: {
    fontSize: hp('2.0%'),
    // fontFamily: "SFProDisplay-Medium",
    color: Colors.onBoardingBlack,
    textAlign: 'center',
  },
});
