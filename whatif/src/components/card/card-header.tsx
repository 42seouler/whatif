import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {globalColors} from '../../globalStyles';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import * as faker from 'faker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import ModalButton from './modal-button';
import Color from 'color';

function CardHeader() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {/*유저 정보*/}
      <Pressable style={styles.userInfo}>
        <Image
          style={styles.avatarImage}
          source={{
            uri: faker.image.image(),
          }}
        />
        <Text style={styles.comment}>{faker.name.lastName()}</Text>
      </Pressable>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriverForBackdrop
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['down']}
        style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Icon
              name={'remove-sharp'}
              color={globalColors.fontWhiteColor}
              size={hp('5%')}
            />
          </View>
          <View style={styles.modalButtonContainer}>
            <ModalButton
              iconName={'ios-cut'}
              iconColor={globalColors.fontWhiteColor}
              iconText={'숨기기'}
              iconTextColor={globalColors.fontWhiteColor}
            />
            <ModalButton
              iconName={'link-outline'}
              iconColor={globalColors.fontWhiteColor}
              iconText={'링크'}
              iconTextColor={globalColors.fontWhiteColor}
            />
            <ModalButton
              iconName={'ios-alert-circle-outline'}
              iconColor={globalColors.rallyOrange}
              iconText={'신고'}
              iconTextColor={globalColors.rallyOrange}
            />
          </View>
        </View>
      </Modal>
      <Pressable style={styles.threeDots} onPress={toggleModal}>
        <Icon
          name={'ellipsis-horizontal'}
          size={hp('2.5%')}
          color={globalColors.fontWhiteColor}
        />
      </Pressable>
    </View>
  );
}

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color(globalColors.darkGrey).lighten(1.5).string(),
    height: hp('6%'),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('2.5%'),
  },
  avatarImage: {
    width: wp('7.5%'),
    height: wp('7.5%'),
    borderRadius: hp('7.5%') / 2,
    marginRight: wp('2.5%'),
  },
  comment: {
    fontSize: hp('2%'),
    color: globalColors.fontWhiteColor,
  },
  threeDots: {
    marginRight: wp('2.5%'),
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    width: wp('100%'),
    height: hp('20'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: globalColors.darkGrey,
    alignItems: 'center',
  },
  modalButtonContainer: {
    width: wp('100%'),
    paddingLeft: wp('5%'),
    flexDirection: 'row',
  },
});
