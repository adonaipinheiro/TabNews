import remoteConfig from '@react-native-firebase/remote-config';

export function useRemoteConfig() {
  async function configureRemoteConfig() {
    remoteConfig()
      .setDefaults({
        perPage: 10,
      })
      .then(() => remoteConfig().fetchAndActivate());
  }

  function getNumber(key: string) {
    return remoteConfig().getNumber(key);
  }

  return {
    getNumber,
    configureRemoteConfig,
  };
}
