/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  interpolateColor,
  scrollTo,
  useAnimatedRef,
} from 'react-native-reanimated';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { AuthNavigationProps } from '../../navigations/Navigations';

import Slide, { SLIDE_HEIGHT } from '../../components/atoms/on-boarding/Slide';
import SubSlide from '../../components/atoms/on-boarding/SubSlide';
import Dot from '../../components/atoms/on-boarding/Dot';
import { Colors } from '../../assets/fonts/theme/colors';
const { width } = Dimensions.get('window');

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  picture: {
    width: number;
    height: number;
    src: number;
  };
}

export const slides: Slide[] = [
  {
    title: 'Shared',
    subtitle: 'Find Your Solution',
    description: '고민이 있으신가요? 걱정 마세요!\n 함께 찾을 수 있을거에요!',
    color: '#BFEAF5',
    picture: {
      src: require('../assets/undraw_Online_posts_re_7ucl-removebg.png'),
      width: 1146,
      height: 891,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Talk it First',
    description: '다른 사람의 생각을 살펴보세요!\n 당신의 이야기를 말해보세요!',
    color: '#BEECC4',
    picture: {
      src: require('../assets/undraw_Social_interaction_re_dyjh_ccexpress.png'),
      width: 1146,
      height: 891,
    },
  },
  {
    title: 'Advise',
    subtitle: 'Your Style, Your Way',
    description:
      '다양한 "참견 고수"들의 시시콜콜한 참견!\n 당신의 인생에 참견해드립니다!',
    color: '#FFE4D9',
    picture: {
      src: require('../assets/second.png'),
      width: 800,
      height: 450,
    },
  },
  {
    title: 'Reality',
    subtitle: 'Make Things Happen',
    description: '당신의 생각을 현실로 만들어드립니다.\n 당신을 더 행복하게!',
    color: '#FFDDDD',
    picture: {
      src: require('../assets/undraw_in_real_life_v8fk_ccexpress.png'),
      width: 2738,
      height: 3244,
    },
  },
];

const OnBoarding = ({ navigation }: AuthNavigationProps<'OnBoarding'>) => {
  const scroll = useAnimatedRef<Animated.ScrollView>();

  const translateX = useSharedValue(0);
  const translateButtonX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      translateX.value = contentOffset.x;
    },
  });

  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      translateX.value,
      slides.map((_, i) => i * width),
      slides.map(slide => slide.color),
    ),
  );

  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const currentIndex = useDerivedValue(() => translateX.value / width);

  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -translateX.value }],
  }));

  useDerivedValue(() => {
    scrollTo(scroll, translateButtonX.value * width, 0, true);
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slider]}>
        {slides.map(({ picture }, index) => {
          const style = useAnimatedStyle(() => ({
            opacity: interpolate(
              translateX.value,
              [(index - 0.5) * width, index * width, (index + 0.5) * width],
              [0, 1, 0],
              Extrapolate.CLAMP,
            ),
          }));
          return (
            <Animated.View style={[styles.underlay, style]} key={index}>
              <Image
                source={picture.src}
                resizeMode={'center'}
                style={{
                  width: wp('80%'),
                  height: hp('40%'),
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFill, background]} />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={currentIndex} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                width: width * slides.length,
              },
              footerStyle,
            ]}>
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      if (translateButtonX.value === slides.length - 1) {
                        translateButtonX.value = 2;
                      }
                      translateButtonX.value = index + 1;
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardingWhite,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomRightRadius: hp('9.0%'),
    overflow: 'hidden',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: hp('9.0%'),
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: Colors.onBoardingWhite,
    borderTopLeftRadius: hp('9.0%'),
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: hp('9.0%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
