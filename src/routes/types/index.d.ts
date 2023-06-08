import type {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  RecoverPass: undefined;
};

export type StackNavigationProps =
  StackNavigationProp<StackParamList>;
