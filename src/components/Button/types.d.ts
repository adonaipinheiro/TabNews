import type {TouchableOpacityProps} from 'react-native/types';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}
