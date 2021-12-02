import React, {useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';
import {globalColors} from '../globalStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StackScreenProps} from '@react-navigation/stack/src/types';
import {HomeStackParamList} from '../navigations/HomeStackNavigation';
import HomeLogo from '../components/home/HomeLogo';
import AddCategoryButton from '../components/home/AddCategoryButton';
import HomeCategory from '../components/home/HomeCategory';
import CardHeader from '../components/card/card-header';
import Content from '../components/card/content';

export type HomeProps = StackScreenProps<HomeStackParamList, 'Home'>;

function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HomeLogo />
      </View>
      {/*카테고리 뷰*/}
      <View style={styles.category}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContentContainerStyle}
          style={styles.categoryScrollView}>
          <AddCategoryButton navigation={navigation} />
          {HomeCategory()}
        </ScrollView>
      </View>
      {/*콘텐츠 시작*/}
      <Content />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: Platform.OS === 'ios' ? 1 : 0.5,
    backgroundColor: globalColors.darkGrey,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  category: {
    flex: 1,
  },
  categoryContentContainerStyle: {
    alignItems: 'center',
  },
  categoryScrollView: {
    backgroundColor: globalColors.darkGrey,
  },
});
