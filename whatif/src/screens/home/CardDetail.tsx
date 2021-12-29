import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { height, HomeRoutes, width } from '../../navigations/Navigations';
import { detailsIcons } from './List';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../../assets/fonts/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';

const TOP_HEADER_HEIGHT = height * 0.25;

export type SalonProps = StackScreenProps<HomeRoutes, 'CardDetail'>;

export default function CardDetail({ navigation, route }) {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      {/*배경색 설정*/}
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: item.color,
          },
        ]}
      />
      <View style={styles.header}>
        <AntDesign
          name={'arrowleft'}
          size={hp('5%')}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View
          style={[
            styles.category,
            { width: hp('1.5%') * item.category.length },
          ]}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.information}>
          <Text style={[styles.informationText, { marginBottom: hp('1%') }]}>
            작성자 · {item.author}
          </Text>
          <Text style={styles.informationText}>작성일 · {item.date}</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: hp('3%'),
          borderTopRightRadius: hp('3%'),
        }}>
        <ScrollView>
          {/*본문*/}
          <View style={styles.content}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          {/*좋아요 댓글쓰기*/}
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
          {/*댓글 카운터*/}
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
          <View style={styles.commentContainer}>
            <View style={styles.comment}>
              <View style={{ flexDirection: 'row', marginBottom: hp('0.5%') }}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.commentImage}
                />
                <Text style={styles.commentText}>
                  <Text style={{ fontWeight: 'bold' }}>{item.author} </Text>
                  <Text>
                    나는 왕이다! 나는 왕이다! 나는 왕이다! 나는 왕이다! 나는
                    왕이다! 나는 왕이다! 나는 왕이다! 나는 왕이다! 나는 왕이다!
                    나는 왕이다! 나는 왕이다! 나는 왕이다!
                  </Text>
                </Text>
              </View>
              <View style={{ left: wp('12') }}>
                <Text style={{ fontWeight: '700', opacity: 0.5 }}>
                  8시간 전
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width,
    height: hp('25%'),
    paddingHorizontal: wp('4%'),
  },
  category: {
    height: hp('3%'),
    marginVertical: hp('1%'),
    backgroundColor: Colors.onBoardingWhite,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  categoryText: {
    fontSize: hp('1.5%'),
    color: Colors.onBoardingBlack,
  },
  title: {
    color: Colors.onBoardingBlack,
    fontSize: hp('2.5%'),
  },
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
  image: {
    width: hp('10%'),
    height: hp('10%'),
    resizeMode: 'contain',
    position: 'absolute',
    top: TOP_HEADER_HEIGHT - hp('10%'),
    right: 10,
  },
  content: {
    paddingVertical: hp('2%'),
  },
  description: {
    fontSize: hp('2%'),
    color: Colors.onBoardingBlack,
    lineHeight: hp('3%'),
    padding: hp('2%'),
  },
  commentContainer: {
    borderTopWidth: 5,
    borderTopColor: Colors.darkGrey,
    padding: hp(2),
    justifyContent: 'center',
  },
  commentImage: {
    width: wp('10%'),
    height: wp('10%'),
    resizeMode: 'contain',
    marginRight: wp('2%'),
  },
  comment: {
    marginBottom: hp('2%'),
  },
  commentText: {
    fontSize: hp('1.5%'),
    color: Colors.onBoardingBlack,
    width: wp('80%'),
  },
});
