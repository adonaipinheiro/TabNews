import {useLayoutEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {logCrashlytics} from '@analytics';

import {useRemoteConfig} from './useRemoteConfig';

export function useApp() {
  useRemoteConfig();

  useLayoutEffect(() => {
    SplashScreen.hide();
    logCrashlytics('App mounted');
  }, []);
}
