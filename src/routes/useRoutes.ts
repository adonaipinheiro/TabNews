import {useNavigationContainerRef} from '@react-navigation/native';
import {useRef} from 'react';

import {logScreen} from '@analytics';

export function useRoutes() {
  const routeNameRef = useRef<string>();
  const navigationRef = useNavigationContainerRef();

  function onReady() {
    routeNameRef.current =
      navigationRef.current?.getCurrentRoute()?.name;
  }

  async function onScreenChange() {
    const previousRouteName = routeNameRef.current;
    const currentRouteName =
      navigationRef.current?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      logScreen(currentRouteName);
    }
    routeNameRef.current = currentRouteName;
  }

  return {
    routeNameRef,
    navigationRef,
    onReady,
    onScreenChange,
  };
}
