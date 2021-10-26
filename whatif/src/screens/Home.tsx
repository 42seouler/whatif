import React, {useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Platform,
  Animated,
  Button,
  ScrollView,
} from 'react-native';
import {globalColors} from '../globalStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StackScreenProps} from '@react-navigation/stack/src/types';
import {HomeStackParamList} from '../navigations/HomeStackNavigation';
import faker from 'faker';

type HomeProps = StackScreenProps<HomeStackParamList, 'Home'>;

const name = faker.name.firstName();

function Home({route, navigation}: HomeProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const fontColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'black'],
  });

  const handlePressIn = () =>
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();

  const handlePressOut = () =>
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Animated.Text
            style={[{fontSize: 30, left: wp('7%')}, {color: fontColor}]}>
            {name}
          </Animated.Text>
        </Pressable>
      </View>
      <View style={{flex: 1, backgroundColor: globalColors.yellow}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pressable>
            <Text>category 추가버튼</Text>
          </Pressable>
          <Text style={{fontSize: 30}} />
        </ScrollView>
      </View>
      <View style={{flex: 8, backgroundColor: globalColors.green}}>
        <Text>카드 섹션</Text>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: globalColors.red,
    flexDirection: 'row',
    alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
  },
});
