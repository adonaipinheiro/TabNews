/**
 * @format
 */
import 'react-native-gesture-handler';
import JailBreak from 'jail-monkey';
import {AppRegistry} from 'react-native';
import ExitApp from 'react-native-exit-app';

import {name as appName} from './app.json';
import App from './src';

if (JailBreak.isJailBroken() || JailBreak.isOnExternalStorage()) {
  ExitApp.exitApp();
} else {
  AppRegistry.registerComponent(appName, () => App);
}
