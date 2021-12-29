import { StyleSheet, View } from 'react-native';
import CardHeader from './card-header';
import CardContent from './card-content';
import CardNavigation from './card-navigation';
import CardFooter from './card-footer';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Color from 'color';

type CardProps = {
  category: string;
  title: string;
  content: string;
};

function Card({ category, title, content }: CardProps) {
  return (
    <View
      // 카드 영역
      style={styles.card}>
      <CardHeader />
      <CardContent category={category} title={title} text={content} />
      <CardNavigation />
      <CardFooter />
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    width: wp('100%'),
    backgroundColor: Color(colors.darkGrey).lighten(1.5).string(),
    marginBottom: hp('1%'),
  },
});
