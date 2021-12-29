// eslint-disable-next-line react-hooks/rules-of-hooks
import React, { useRef, useState } from 'react';
import { AuthNavigationProps } from '../../navigations/Navigations';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
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
import Modal from 'react-native-modal';

const width = Dimensions.get('window').width;

export default function ForgotPassword({
  navigation,
}: AuthNavigationProps<'ForgotPassword'>) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const registerImage = require('../assets/forgotpassword.png');
  const registerSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues: { email: '' },
    onSubmit: values => {
      console.log(values);
      toggleModal();
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{ name: 'Mail' }],
      //   }),
      // );
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <Pressable style={styles.modalContainer} onPress={toggleModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>입력한 이메일로 비밀번호</Text>
            <Text style={[styles.modalSubTitle, { marginBottom: hp('1%') }]}>
              재설정 링크를 보냈습니다
            </Text>
            <Button
              label={'확인'}
              variant={'default'}
              onPress={() => console.log('돌아가기')}
            />
          </View>
        </Pressable>
      </Modal>
      <View style={styles.header}>
        <Image
          source={registerImage}
          resizeMode={'center'}
          style={{
            width: wp('30%'),
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
            }}>
            비밀번호 찾기
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
              placeholder="이메일을 입력해주세요"
              onSubmitEditing={formik.handleSubmit}
            />
          </View>
        </View>

        <View style={styles.bodyFooter}>
          <View
            style={[StyleSheet.absoluteFill, styles.bodyFooterBackground]}
          />
          <View style={styles.bodyFooterContent}>
            <Button
              label={'비밀번호 찾기'}
              variant={'login'}
              onPress={formik.handleSubmit}
              style={{ marginBottom: hp('2%') }}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>비밀번호를 찾으셨다면?</Text>
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
    color: Colors.onBoardingBlack,
  },
  modalSubTitle: {
    fontSize: hp('2%'),
    color: Colors.onBoardingBlack,
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
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    justifyContent: 'space-around',
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
