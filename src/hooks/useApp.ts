import {useCallback, useLayoutEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {logCrashlytics} from '@analytics';

import {useRemoteConfig} from './useRemoteConfig';

export function useApp() {
  const {configureRemoteConfig} = useRemoteConfig();

  const setupApp = useCallback(async () => {
    await configureRemoteConfig();
    SplashScreen.hide();
    logCrashlytics('App mounted');
  }, [configureRemoteConfig]);

  useLayoutEffect(() => {
    setupApp();
  }, [setupApp]);
}
