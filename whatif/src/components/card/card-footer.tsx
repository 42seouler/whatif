import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {globalColors, globalFonts} from '../../globalStyles';
import * as faker from 'faker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Color from 'color';

function CardFooter() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.userInfo} onPress={toggleModal}>
        <Image
          style={styles.avatarImage}
          source={{
            uri: faker.image.avatar(),
          }}
        />
        <Text style={styles.comment}>댓글달기...</Text>
      </Pressable>
      <Pressable style={[styles.textInputIcon, {marginRight: wp('5%')}]}>
        <Icon
          name={'ios-happy-outline'}
          color={globalColors.fontGreyColor}
          size={hp('3%')}
        />
      </Pressable>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriverForBackdrop
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['down']}
        avoidKeyboard={true}
        style={styles.modalContainer}>
        <View
          style={{
            width: wp('100%'),
            paddingHorizontal: wp('2.5%'),
            paddingVertical: hp('1%'),
            backgroundColor: globalColors.darkGrey,
            borderTopWidth: 1,
            borderColor: globalColors.fontGreyColor,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                width: wp('6%'),
                marginRight: wp('2%'),
              }}>
              <Icon
                name={'md-add-circle-outline'}
                color={globalColors.fontGreyColor}
                size={hp('3%')}
              />
            </View>
            <View
              style={{
                width: wp('87%'),
                flexDirection: 'row',
                alignItems: 'flex-end',
                borderWidth: 1,
                borderRadius: 15,
                borderColor: globalColors.fontGreyColor,
                backgroundColor: globalColors.fontWhiteColor,
              }}>
              <TextInput
                style={{
                  paddingHorizontal: wp('2%'),
                  paddingVertical: hp('0.5%'),
                  width: wp('69%'),
                  maxHeight: hp('12%'),
                }}
                multiline={true}
              />
              <View style={[styles.textInputIcon, {marginRight: wp('2%')}]}>
                <Icon
                  name={'ios-happy-outline'}
                  color={globalColors.fontGreyColor}
                  size={hp('3%')}
                />
              </View>
              <View style={styles.textInputIcon}>
                <Icon
                  name={'paper-plane-outline'}
                  // name={'paper-plane-outline'}
                  color={globalColors.fontGreyColor}
                  size={hp('3%')}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default CardFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color(globalColors.darkGrey).lighten(1.5).string(),
    height: hp('3%'),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('2.5%'),
  },
  avatarImage: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: hp('7.5%') / 2,
    marginRight: wp('2.5%'),
  },
  comment: {
    fontSize: hp('2%'),
    color: globalColors.fontGreyColor,
    fontFamily: globalFonts.bmhannaProOtf,
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  textInputIcon: {
    width: wp('6.5%'),
  },
});
