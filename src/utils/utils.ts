import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';
import {Dimensions, Platform} from 'react-native';

export function getHeaderHeight() {
  return getDefaultHeaderHeight(
    {
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
    },
    false,
    Platform.OS === 'android' ? 0 : 44,
  );
}

export function calculeDiffDate(dateParam: string) {
  const date = new Date(dateParam);
  const dateNow = new Date();

  const diffInDays = differenceInDays(dateNow, date);

  if (diffInDays > 0) {
    return `${diffInDays} dia${diffInDays > 1 ? 's' : ''} atrás`;
  }

  const diffInHours = differenceInHours(dateNow, date);

  if (diffInHours > 0) {
    return `${diffInHours} hora${diffInHours > 1 ? 's' : ''} atrás`;
  }

  const diffInMinutes = differenceInMinutes(dateNow, date);

  if (diffInMinutes > 0) {
    return `${diffInMinutes} minuto${
      diffInMinutes > 1 ? 's' : ''
    } atrás`;
  }

  return 'momentos atrás';
}
