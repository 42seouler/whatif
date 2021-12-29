import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { height, width } from '../../navigations/Navigations';
import { detailsIcons } from './List';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../../assets/fonts/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const TOP_HEADER_HEIGHT = height * 0.25;

export const SalonListDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <AntDesign
        name={'arrowleft'}
        size={hp('5%')}
        color="black"
        style={{
          padding: hp('2%'),
          position: 'absolute',
          top: Platform.OS === 'ios' ? hp('2%') : undefined,
          left: wp('3%'),
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: item.color,
            borderRadius: 0,
            height: TOP_HEADER_HEIGHT + hp('4%'),
          },
        ]}
      />
      <Text style={styles.name}>{item.title}</Text>
      {/*작성자 작성일 정보*/}
      <View style={styles.information}>
        <Text style={[styles.informationText, { marginBottom: hp('1%') }]}>
          작성자 · {item.author}
        </Text>
        <Text style={styles.informationText}>작성일 · {item.date}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
      {/*콘텐츠*/}
      <View style={styles.bg}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.content}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: hp('1%'),
              marginBottom: hp('4%'),
              padding: hp('2%'),
            }}>
            {detailsIcons.map((detail, index) => {
              return (
                <Animatable.View
                  animation={'bounceIn'}
                  delay={400 + index * 100}
                  key={`${detail.icon} - ${index}`}
                  style={{
                    backgroundColor: detail.color,
                    width: 64,
                    height: 64,
                    borderRadius: 64 / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name={detail.icon}
                    color={Colors.onBoardingWhite}
                    size={hp('3.0%')}
                  />
                </Animatable.View>
              );
            })}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: hp('1.5%'),
              backgroundColor: Colors.rallyPurple,
              width: wp('25%'),
              height: hp('3%'),
              marginBottom: hp('1%'),
              left: hp('2%'),
            }}>
            <Text
              style={{
                fontSize: hp('2%'),
                color: Colors.onBoardingBlack,
              }}>
              댓글 · 198
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              padding: hp('2%'),
            }}>
            <Text
              style={{
                marginBottom: hp('1%'),
              }}>
              작성자 · 유선우
            </Text>
            <Text>
              나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              padding: hp('2%'),
            }}>
            <Text
              style={{
                marginBottom: hp('1%'),
              }}>
              작성자 · 유선우
            </Text>
            <Text>
              나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              // borderBottomWidth: 1,
              padding: hp('2%'),
            }}>
            <Text
              style={{
                marginBottom: hp('1%'),
              }}>
              작성자 · 유선우
            </Text>
            <Text>
              나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              padding: hp('2%'),
            }}>
            <Text
              style={{
                marginBottom: hp('1%'),
              }}>
              작성자 · 유선우
            </Text>
            <Text>
              나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              padding: hp('2%'),
            }}>
            <Text
              style={{
                marginBottom: hp('1%'),
              }}>
              작성자 · 유선우
            </Text>
            <Text>
              나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              padding: hp('2%'),
            }}>
            <Text
              style={{
                marginBottom: hp('1%'),
              }}>
              작성자 · 유선우
            </Text>
            <Text>
              나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              padding: hp('2%'),
            }}>
            <Text
              style={{
                marginBottom: hp('1%'),
              }}>
              작성자 · 유선우
            </Text>
            <Text>
              나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
              시대나의 시대나의 시대나의 시대나의 시대나의 시대나의
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  information: {
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? TOP_HEADER_HEIGHT - hp('7%')
        : TOP_HEADER_HEIGHT - hp('7%'),
    left: hp('4%'),
  },
  informationText: {
    fontSize: hp('2%'),
    color: Colors.onBoardingBlack,
  },
  bg: {
    position: 'absolute',
    backgroundColor: 'white',
    transform: [{ translateY: TOP_HEADER_HEIGHT }],
    borderRadius: 32,
  },
  content: {
    paddingVertical: hp('2%'),
  },
  image: {
    width: hp('10%'),
    height: hp('10%'),
    resizeMode: 'contain',
    position: 'absolute',
    top: TOP_HEADER_HEIGHT - hp('10%'),
    right: 10,
  },
  name: {
    color: Colors.onBoardingBlack,
    width: wp('80%'),
    fontSize: hp('2.5%'),
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? TOP_HEADER_HEIGHT - hp('15%')
        : TOP_HEADER_HEIGHT - hp('17%'),
    left: hp('4%'),
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: hp('1%'),
  },
  description: {
    fontSize: hp('2%'),
    color: Colors.onBoardingBlack,
    lineHeight: hp('3%'),
    padding: hp('2%'),
  },
  contentHeader: {
    marginBottom: hp('2%'),
  },
});
