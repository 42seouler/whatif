import faker from 'faker';
import {globalColors, PickToArr} from '../../globalStyles';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React from 'react';

const dummyCategory = Array(20)
  .fill(null)
  .map(() => faker.name.firstName());

const categoryButtonColor = PickToArr(globalColors, [
  'rallyGreen',
  'rallyYellow',
  'rallyOrange',
  'rallyDarkGreen',
  'rallyPurple',
  'rallyBlue',
]);

function HomeCategory() {
  const categoryRendering = () => {
    const result = [];
    let currentColor = 0;
    for (let idx = 0; idx < dummyCategory.length; idx++) {
      if (currentColor === categoryButtonColor.length) {
        currentColor = 0;
      }
      result.push(
        <View
          style={[
            styles.container,
            {
              backgroundColor: categoryButtonColor[currentColor],
              marginRight:
                idx === dummyCategory.length - 1 ? wp('5%') : wp('2%'),
            },
          ]}
          key={idx}>
          <Text style={styles.text}>{dummyCategory[idx]}</Text>
        </View>,
      );
      currentColor++;
    }
    return result;
  };

  return categoryRendering();
}

export default HomeCategory;

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
