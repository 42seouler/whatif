import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {globalColors} from '../globalStyles';
import * as faker from 'faker';

function Category() {
  return (
    <View>
      <Image
        style={{
          width: 200,
          height: 200,
          backgroundColor: globalColors.buttonBackgroundColor,
        }}
        source={{uri: faker.image.image()}}
      />
      <Text>무엇이 문제야</Text>
    </View>
  );
}

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
