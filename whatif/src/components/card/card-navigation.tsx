import {globalColors, globalFonts} from '../../globalStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Color from 'color';

function CardNavigation() {
  return (
    <View style={styles.container}>
      <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={'ios-heart-outline'}
          // name={'ios-heart-outline'}
          color={globalColors.fontWhiteColor}
          size={hp('3%')}
        />
        <Text
          style={{
            marginLeft: wp('1%'),
            color: globalColors.fontWhiteColor,
            fontSize: hp('2%'),
            fontFamily: globalFonts.bmhannaProOtf,
          }}>
          if
        </Text>
      </Pressable>
      <View
        style={{
          position: 'absolute',
          marginLeft: wp('25%'),
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Icon
          name={'ios-chatbox-outline'}
          color={globalColors.fontWhiteColor}
          size={hp('3%')}
        />
        <Text
          style={{
            marginLeft: wp('1%'),
            color: globalColors.fontWhiteColor,
            fontSize: hp('2%'),
            fontFamily: globalFonts.bmhannaProOtf,
          }}>
          댓글
        </Text>
      </View>
      <View>
        <Icon
          name={'bookmark-outline'}
          color={globalColors.fontWhiteColor}
          size={hp('3%')}
        />
      </View>
    </View>
  );
}

export default CardNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color(globalColors.darkGrey).lighten(1.5).string(),
    height: hp('4%'),
    paddingHorizontal: wp('2.5%'),
  },
});
