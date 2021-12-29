import {FlatList, StyleSheet, View} from 'react-native';
import {colors} from '../../../../../../../presious/whatif/whatif/src/assets/fonts/theme/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React, {useRef, useState} from 'react';
import Card from './Card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    category: '백엔드 개발',
    title: '백엔드 개발자 김남형입니다.',
    content:
      '백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발 백엔드 개발',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    category: '자바스크립트',
    title: 'NestJS 사용법 숙지하자!',
    content:
      'NestJS를 통해 백엔드를 구현하자 NestJS를 통해 백엔드를 구현하자 NestJS를 통해 백엔드를 구현하자 NestJS를 통해 백엔드를 구현하자 NestJS를 통해 백엔드를 구현하자 NestJS를 통해 백엔드를 구현하자',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    category: '훌륭한 개발자',
    title: '나는 개발자가 될 수 있을 것인가?',
    content:
      '개발자가 될 수 있을 것인가? 개발자가 될 수 있을 것인가? 개발자가 될 수 있을 것인가? 개발자가 될 수 있을 것인가? 개발자가 될 수 있을 것인가? 개발자가 될 수 있을 것인가? 개발자가 될 수 있을 것인가? 개발자가 될 수 있을 것인가?',
  },
];

function Content() {
  // @ts-ignore
  const renderItem = ({item}) => (
    <Card category={item.category} title={item.title} content={item.content} />
  );
  return (
    //todo FlatList로 변경
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: colors.darkGrey,
    paddingTop: hp('0.5%'),
    alignItems: 'center',
  },
  lessMoreStyle: {
    color: colors.rallyBlue,
  },
});
