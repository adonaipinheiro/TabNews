import {useLayoutEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

export function useApp() {
  useLayoutEffect(() => {
    SplashScreen.hide();
  }, []);
}
