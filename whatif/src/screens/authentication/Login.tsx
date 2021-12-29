import React, { useRef, useState } from 'react';
import { AuthNavigationProps } from '../../navigations/Navigations';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import { Colors } from '../../assets/fonts/theme/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Button from '../../components/atoms/on-boarding/Button';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CommonActions } from '@react-navigation/native';
import Modal from 'react-native-modal';

const width = Dimensions.get('window').width;

export default function Login({ navigation }: AuthNavigationProps<'Login'>) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const passwordRef = useRef<TextInput>(null);
  const loginImage = require('../assets/login.png');

  const LoginSchema = Yup.object().shape({
    userId: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues: { userId: '', password: '' },
    onSubmit: values => {
      console.log(values);
      // if (values.userId === 'admin' && values.password === 'admin') {
      //   navigation.navigate('MainTapNavigation');
      // } else {
      //   toggleModal();
      // }
      // toggleModal();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'MainTapNavigation' }],
        }),
      );
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <Pressable style={styles.modalContainer} onPress={toggleModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              아이디 또는 비밀번호가 일치하지 않습니다.
            </Text>
            <Button
              label={'돌아가기'}
              variant={'default'}
              onPress={() => console.log('돌아가기')}
            />
          </View>
        </Pressable>
      </Modal>
      <View style={styles.header}>
        <Image
          source={loginImage}
          resizeMode={'center'}
          style={{
            width: wp('25%'),
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
              marginTop: hp('1%'),
            }}>
            Login
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={formik.handleChange('userId')}
            onBlur={formik.handleBlur('userId')}
            value={formik.values.userId}
            autoCapitalize={'none'}
            returnKeyType={'next'}
            returnKeyLabel={'next'}
            placeholder="아이디"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
            autoCapitalize={'none'}
            returnKeyType={'next'}
            returnKeyLabel={'next'}
            placeholder="비밀번호"
            secureTextEntry={true}
            onSubmitEditing={formik.handleSubmit}
            ref={passwordRef}
          />
        </View>

        <View style={styles.bodyFooter}>
          <View
            style={[StyleSheet.absoluteFill, styles.bodyFooterBackground]}
          />
          <View style={styles.bodyFooterContent}>
            <Button
              label={'로그인 하기'}
              variant={'login'}
              onPress={formik.handleSubmit}
              style={{ marginBottom: hp('2%') }}
            />
            <BorderlessButton
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.button}>비밀번호 찾기</Text>
            </BorderlessButton>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>아직 회원이 아니신가요?</Text>
        <BorderlessButton onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerButton}>회원가입</Text>
        </BorderlessButton>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.onBoardingWhite,
  },
  modalContainer: {
    flex: 1,
    paddingBottom: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: wp('80%'),
    height: hp('15%'),
    backgroundColor: Colors.onBoardingWhite,
    borderRadius: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: hp('2%'),
    lineHeight: hp('4%'),
    color: Colors.onBoardingBlack,
    marginBottom: hp('1%'),
  },
  modalButton: {
    width: wp('50%'),
    height: hp('6%'),
    borderRadius: hp('2%'),
    backgroundColor: Colors.onBoardingBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width,
    height: hp('20%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.rallyPurple,
    borderBottomLeftRadius: hp('9%'),
  },
  body: {
    width,
    height: hp('60%'),
  },
  bodyBackground: {
    backgroundColor: Colors.rallyPurple,
  },
  bodyHeader: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.onBoardingWhite,
    borderTopRightRadius: hp('9.0%'),
  },
  textInput: {
    width: wp('80%'),
    height: hp('6%'),
    borderBottomWidth: 1,
    marginTop: hp('2%'),
    borderBottomColor: Colors.rallyPurple,
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
