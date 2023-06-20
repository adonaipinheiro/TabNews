import remoteConfig from '@react-native-firebase/remote-config';
import {useEffect} from 'react';

export function useRemoteConfig() {
  async function configure() {
    remoteConfig()
      .setDefaults({
        perPage: 10,
      })
      .then(() => remoteConfig().fetchAndActivate());
  }

  useEffect(() => {
    configure();
  }, []);

  function getNumber(key: string) {
    return remoteConfig().getNumber(key);
  }

  return {
    getNumber,
  };
}
