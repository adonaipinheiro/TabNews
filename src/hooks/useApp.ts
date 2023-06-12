import {useLayoutEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {logCrashlytics} from '@analytics';

export function useApp() {
  useLayoutEffect(() => {
    SplashScreen.hide();
    logCrashlytics('App mounted');
  }, []);
}
