import React, {useState, useRef} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {colors} from '../../../../../../../presious/whatif/whatif/src/assets/fonts/theme/colors';
import {fonts} from '../../../../../../../presious/whatif/whatif/src/assets/fonts/theme/fonts';

interface PropTypes {
  category: string;
  title: string;
  text: string;
}
function CardContent({category, title, text}: PropTypes) {
  const length = category.length;

  const startingHeight = hp('8%');
  const [expander, setExpander] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState(startingHeight);
  const animatedHeight = useRef(new Animated.Value(startingHeight)).current;

  const handlePressIn = () => {
    setExpanded(!expanded);
    Animated.timing(animatedHeight, {
      duration: 100,
      toValue: expander ? fullHeight : startingHeight,
      useNativeDriver: false,
    }).start();
  };

  // @ts-ignore
  const onTextLayout = e => {
    const totalLineLength = e.nativeEvent.lines.length;
    const lineHeight = hp('2%');
    if (totalLineLength * lineHeight > lineHeight * 3 && !expander) {
      setExpander(!expander);
      setExpanded(!expanded);
      setFullHeight(totalLineLength * lineHeight + hp('2%'));
    }
  };

  return (
    <View style={styles.container}>
      {/*category*/}
      <View style={[styles.category, {width: hp('1.5%') * (length + 1)}]}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
      {/*title 최대 글자수는 36로 제한 */}
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <Animated.View
        style={[
          styles.contentContainer,
          {
            height: expander ? animatedHeight : undefined,
          },
        ]}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={expanded ? 3 : undefined}
          ellipsizeMode={'tail'}
          style={styles.contentText}>
          {text || ''}
        </Text>
      </Animated.View>
      {expander && expanded ? (
        <View style={styles.readMoreContainer}>
          <Text onPress={handlePressIn} style={styles.readMoreText}>
            더 보기
          </Text>
        </View>
      ) : (
        <View style={{height: hp('2%')}} />
      )}
    </View>
  );
}

export default CardContent;

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp('2.5%'),
    paddingRight: wp('2.5%'),
  },
  category: {
    height: hp('3%'),
    marginBottom: hp('0.5%'),
    backgroundColor: colors.darkGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  categoryText: {
    color: colors.fontWhiteColor,
    fontSize: hp('1.5%'),
    fontFamily: fonts.NanumBarunGothicBold,
  },
  titleText: {
    color: colors.fontWhiteColor,
    fontSize: hp('2.5%'),
    fontFamily: fonts.bmhannaProOtf,
    lineHeight: hp('3.5%'),
  },
  contentContainer: {
    paddingVertical: hp('1%'),
  },
  contentText: {
    color: colors.fontWhiteColor,
    fontSize: hp('2.0%'),
    fontFamily: fonts.bmhannaAirOtf,
  },
  readMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('2%'),
  },
  readMoreText: {
    color: colors.fontWhiteColor,
  },
});
