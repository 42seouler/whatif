import React, { useRef, useState } from 'react';
import { AuthNavigationProps } from '../../navigations/Navigations';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/fonts/theme/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Button from '../../components/atoms/on-boarding/Button';
import { BorderlessButton } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const congratsImage = require('../assets/congrats.png');
const mailImage = require('../assets/mail.png');

export default function mail({ navigation }: AuthNavigationProps<'Mail'>) {
  const handleSubmit = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={congratsImage}
          resizeMode={'center'}
          style={{
            width: wp('40%'),
            height: hp('15%'),
          }}
        />
      </View>
      <View style={styles.body}>
        <View style={[StyleSheet.absoluteFill, styles.bodyBackground]} />
        <View
          style={[
            styles.bodyHeader,
            { backgroundColor: Colors.onBoardingWhite },
          ]}>
          <Text
            style={{
              fontSize: hp('4%'),
              lineHeight: hp('5%'),
              color: Colors.onBoardingBlack,
              marginTop: hp('2%'),
              marginBottom: hp('4%'),
            }}>
            회원가입 완료
          </Text>
          <Image
            source={mailImage}
            resizeMode={'center'}
            style={{
              width: wp('50%'),
              height: hp('20%'),
            }}
          />
        </View>

        <View style={styles.bodyFooter}>
          <View
            style={[StyleSheet.absoluteFill, styles.bodyFooterBackground]}
          />
          <View style={styles.bodyFooterContent}>
            <Text style={[styles.bodyText, { marginBottom: hp('1%') }]}>
              입력하신 메일 주소로 인증 메일이 발송되었습니다
            </Text>
            <Text style={styles.bodyText}>
              받으신 메일의 [이메일 확인] 버튼을
            </Text>
            <Text style={[styles.bodyText, { marginBottom: hp('1%') }]}>
              클릭하시면 인증이 완료됩니다
            </Text>
            <Text style={styles.bodyText}>이메일이 도착하지 않을 경우</Text>
            <Text style={[styles.bodyText, { marginBottom: hp('3%') }]}>
              휴지통이나 스팸 메일함을 함께 확인해주세요
            </Text>
            <Button
              label={'로그인 하기'}
              variant={'login'}
              onPress={handleSubmit}
              style={{ marginBottom: hp('2%') }}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>도움이 필요하신가요?</Text>
        <BorderlessButton onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerButton}>고객센터</Text>
        </BorderlessButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.onBoardingWhite,
  },
  header: {
    width,
    height: hp('20%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.rallyYellow,
    borderBottomLeftRadius: hp('9%'),
  },
  body: {
    width,
    height: hp('60%'),
  },
  bodyBackground: {
    backgroundColor: Colors.rallyYellow,
  },
  bodyHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.onBoardingWhite,
    borderTopRightRadius: hp('9.0%'),
  },
  bodyFooter: {
    flex: 1,
  },
  bodyFooterBackground: {
    backgroundColor: Colors.darkGrey,
  },
  bodyFooterContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.onBoardingWhite,
    borderBottomLeftRadius: hp('9%'),
    borderBottomRightRadius: hp('9%'),
  },
  bodyText: {
    color: Colors.onBoardingBlack,
    fontSize: hp('2%'),
  },
  button: {
    fontSize: hp('2.0%'),
    // fontFamily: "SFProDisplay-Medium",
    color: Colors.onBoardingBlack,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkGrey,
  },
  footerText: {
    fontSize: hp('2.0%'),
    color: Colors.onBoardingWhite,
    marginRight: hp('1.0%'),
  },
  footerButton: {
    fontSize: hp('2.0%'),
    color: Colors.rallyGreen,
  },
});
