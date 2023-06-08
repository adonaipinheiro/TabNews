import type {TextInputProps} from 'react-native/types';

export interface InputProps extends TextInputProps {
  error?: string;
  label: string;
}
