import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from '../../assets/fonts/theme/colors';
import Category from '../../components/atoms/home/Category';
import Logo from '../../components/atoms/home/Logo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AddCategory from '../../components/atoms/home/AddCategory';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeRoutes } from '../../navigations/Navigations';
import Color from 'color';

export type HomeProps = StackScreenProps<HomeRoutes, 'Board'>;

export default function Board({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Logo />
      </SafeAreaView>
      <View style={styles.category}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContentContainerStyle}
          style={styles.categoryScrollView}>
          <AddCategory navigation={navigation} />
          {Category()}
        </ScrollView>
      </View>
      <View style={styles.body}>
        <Text>sdfdsf</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.darkGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    borderBottomWidth: 3,
    borderColor: Color(Colors.darkGrey).lighten(0.5).string(),
    height: hp('8%'),
  },
  categoryContentContainerStyle: {
    alignItems: 'center',
  },
  categoryScrollView: {
    backgroundColor: Colors.darkGrey,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.onBoardingWhite,
  },
});
