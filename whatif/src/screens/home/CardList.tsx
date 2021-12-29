import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import List from './List';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StackScreenProps } from '@react-navigation/stack';
import { width, height, HomeRoutes } from '../../navigations/Navigations';
import { Colors } from '../../assets/fonts/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export type SalonProps = StackScreenProps<HomeRoutes, 'SalonList'>;

export default function CardList({ navigation }: SalonProps) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={List}
        keyExtractor={item => item.key}
        contentContainerStyle={{ padding: hp('1.5%') }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate('CardDetail', { item });
              }}
              style={styles.cardContainer}>
              <View style={styles.card}>
                <View
                  style={[
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: item.color, borderRadius: hp('2%') },
                  ]}
                />
                <View
                  style={[
                    styles.category,
                    { width: hp('1.5%') * item.category.length },
                  ]}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text numberOfLines={2} style={styles.description}>
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    left: wp('3%'),
                    bottom: 0,
                  }}>
                  <Icon
                    name={'ios-heart'}
                    color={Colors.onBoardingBlack}
                    size={hp('3.0%')}
                    style={{
                      marginRight: wp('1%'),
                    }}
                  />
                  <Text
                    style={{
                      marginRight: wp('5%'),
                      width: wp('10%'),
                    }}>
                    좋아요
                  </Text>
                  <Icon
                    name={'ios-chatbubble'}
                    color={Colors.onBoardingBlack}
                    size={hp('3.0%')}
                    style={{
                      marginRight: wp('1%'),
                    }}
                  />
                  <Text
                    style={{
                      marginRight: wp('1%'),
                    }}>
                    댓글
                  </Text>
                </View>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginBottom: hp('2%'),
    height: Platform.OS === 'ios' ? hp('23%') : hp('25%'),
  },
  card: {
    flex: 1,
    padding: hp('2%'),
  },
  category: {
    height: hp('3%'),
    marginBottom: hp('1%'),
    backgroundColor: Colors.onBoardingWhite,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  categoryText: {
    fontSize: hp('1.5%'),
    color: Colors.onBoardingBlack,
  },
  image: {
    width: hp('10%'),
    height: hp('10%'),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: wp('4%'),
  },
  title: {
    fontSize: hp('2.5%'),
    color: Colors.onBoardingBlack,
    marginBottom: hp('1%'),
  },
  description: {
    fontSize: hp('2%'),
    width: wp('62%'),
    color: Colors.onBoardingBlack,
    marginBottom: hp('1%'),
  },
});
