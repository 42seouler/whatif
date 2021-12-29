import { StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React from 'react';
import { PickToArr } from '../../../utils/utils';
import { Colors } from '../../../assets/fonts/theme/colors';

const dummyCategory = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
  'Category 6',
];

const categoryButtonColor = PickToArr(Colors, [
  'rallyGreen',
  'rallyYellow',
  'rallyOrange',
  'rallyDarkGreen',
  'rallyPurple',
  'rallyBlue',
]);

export default function Category() {
  const categoryRendering = () => {
    const result = [];
    for (let idx = 0; idx < dummyCategory.length; idx++) {
      result.push(
        <View
          style={[
            styles.container,
            {
              backgroundColor: categoryButtonColor[idx % 6],
              marginRight:
                idx === dummyCategory.length - 1 ? wp('5%') : wp('2%'),
            },
          ]}
          key={idx}>
          <Text style={styles.text}>{dummyCategory[idx]}</Text>
        </View>,
      );
    }
    return result;
  };

  return categoryRendering();
}

const styles = StyleSheet.create({
  container: {
    width: wp('24%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: hp('2%'),
  },
});
