import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {globalColors, globalFonts} from '../../globalStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React, {useRef, useState} from 'react';
import CardHeader from '../card/card-header';
import CardContent from './card-content';
import CardNavigation from './card-navigation';
import CardFooter from './card-footer';
import Card from './Card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    category: '백엔드 개발',
    title: '백엔드 개발자 김남형입니다.',
    content: '타입스크립트에 익숙해지기 위해 타입스크립트를 사용하자!',
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
      '나는 잘하는 개발자가 될거야! 나는 잘하는 개발자가 될거야! 나는 잘하는 개발자가 될거야! 나는 잘하는 개발자가 될거야! 나는 잘하는 개발자가 될거야! 나는 잘하는 개발자가 될거야! 나는 잘하는 개발자가 될거야! 나는 잘하는 개발자가 될거야!',
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
    backgroundColor: globalColors.darkGrey,
    paddingTop: hp('0.5%'),
    alignItems: 'center',
  },
  lessMoreStyle: {
    color: globalColors.rallyBlue,
  },
});
