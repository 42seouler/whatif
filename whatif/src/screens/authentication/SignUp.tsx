import React, { useRef } from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

export default function SignUp({ navigation }: AuthNavigationProps<'SignUp'>) {
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmationRef = useRef<TextInput>(null);
  const registerImage = require('../assets/register.png');

  const registerSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    passwordConfirmation: Yup.string()
      .equals([Yup.ref('password')], 'missmatch')
      .required('Required'),
  });

  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues: { email: '', password: '', passwordConfirmation: '' },
    onSubmit: values => {
      console.log(values);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Mail' }],
        }),
      );
    },
  });
  // console.log(formik.errors.passwordConfirmation);
  // console.log(formik.errors.email);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.header}>
        <Image
          source={registerImage}
          resizeMode={'center'}
          style={{
            width: wp('10%'),
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
            Register
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              style={{ paddingTop: hp('2%') }}
              name={'mail-outline'}
              color={Colors.onBoardingGreen}
              size={hp('3.0%')}
            />
            <TextInput
              style={[
                styles.textInput,
                {
                  borderBottomColor: !formik.touched.email
                    ? undefined
                    : formik.touched.email && !formik.errors.email
                    ? Colors.onBoardingGreen
                    : Colors.rallyOrange,
                },
              ]}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              autoCapitalize={'none'}
              returnKeyType={'next'}
              returnKeyLabel={'next'}
              placeholder="아이디"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              style={{ paddingTop: hp('2%') }}
              name={'ios-lock-open-outline'}
              color={Colors.onBoardingGreen}
              size={hp('3.0%')}
            />
            <TextInput
              style={[
                styles.textInput,
                {
                  borderBottomColor: !formik.touched.password
                    ? undefined
                    : formik.touched.password && !formik.errors.password
                    ? Colors.onBoardingGreen
                    : Colors.rallyOrange,
                },
              ]}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
              autoCapitalize={'none'}
              returnKeyType={'next'}
              returnKeyLabel={'next'}
              secureTextEntry={true}
              placeholder="비밀번호"
              ref={passwordRef}
              onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              style={{ paddingTop: hp('2%') }}
              name={'ios-lock-closed-outline'}
              color={Colors.onBoardingGreen}
              size={hp('3.0%')}
            />
            <TextInput
              style={[
                styles.textInput,
                {
                  borderBottomColor: !formik.touched.passwordConfirmation
                    ? undefined
                    : formik.touched.passwordConfirmation &&
                    ! formik.errors.passwordConfirmation
                    ? Colors.onBoardingGreen
                    : Colors.rallyOrange,
                },
              ]}
              onChangeText={formik.handleChange('passwordConfirmation')}
              onBlur={formik.handleBlur('passwordConfirmation')}
              value={formik.values.passwordConfirmation}
              autoCapitalize={'none'}
              returnKeyType={'next'}
              returnKeyLabel={'next'}
              placeholder="비밀번호 확인"
              secureTextEntry={true}
              onSubmitEditing={formik.handleSubmit}
              ref={passwordConfirmationRef}
            />
          </View>
        </View>

        <View style={styles.bodyFooter}>
          <View
            style={[StyleSheet.absoluteFill, styles.bodyFooterBackground]}
          />
          <View style={styles.bodyFooterContent}>
            <Button
              label={'등록하기'}
              variant={'login'}
              onPress={formik.handleSubmit}
              style={{ marginBottom: hp('2%') }}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>이미 회원이신가요?</Text>
        <BorderlessButton onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerButton}>로그인</Text>
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
  header: {
    width,
    height: hp('20%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.rallyGreen,
    borderBottomRightRadius: hp('9%'),
  },
  body: {
    width,
    height: hp('60%'),
  },
  bodyBackground: {
    backgroundColor: Colors.rallyGreen,
  },
  bodyHeader: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.onBoardingWhite,
    borderTopLeftRadius: hp('9.0%'),
  },
  textInput: {
    width: wp('70%'),
    height: hp('6%'),
    borderBottomWidth: 1,
    marginTop: hp('2%'),
    borderBottomColor: Colors.onBoardingBlack,
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
    paddingTop: hp('5%'),
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
