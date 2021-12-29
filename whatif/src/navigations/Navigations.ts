import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SalonListDetails } from '../screens/home/SalonListDetails';
import CardList from '../screens/home/CardList';
import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes,
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    StackNavigationProp<AppRoutes, 'MainTapNavigation'>
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  MainTapNavigation: undefined;
};

export type AuthenticationRoutes = {
  OnBoarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Mail: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
};

export type HomeRoutes = {
  Board: undefined;
  Category: undefined;
  List: undefined;
  CardDetail: undefined;
  SalonList: undefined;
};
