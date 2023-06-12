import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {StackNavigationProps, StackParamList} from '@routes';
import {useGetContentQuery} from '@store/services/tabNews';

import {renderHeaderRight} from './components';

export function usePost() {
  const route = useRoute<RouteProp<StackParamList, 'Post'>>();
  const navigation = useNavigation<StackNavigationProps>();
  const {data, isLoading, refetch, error} = useGetContentQuery({
    owner_username: route.params.owner_username,
    slug: route.params.slug,
  });

  function onPressLike() {
    navigation.setParams({
      ...route.params,
      tabcoins: route.params.tabcoins + 1,
    });
  }

  function onPressUnlike() {
    navigation.setParams({
      ...route.params,
      tabcoins: route.params.tabcoins - 1,
    });
  }

  function onPressComments() {}

  useEffect(() => {
    const {title, children_deep_count, tabcoins} = route.params;
    navigation.setOptions({
      headerTitle: title,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        maxWidth: Dimensions.get('window').width / 2.2,
      },
      headerRight: ({tintColor}) =>
        renderHeaderRight({
          childrenDeepCount: children_deep_count,
          color: tintColor,
          tabCoins: tabcoins,
        }),
    });
  }, [navigation, route.params]);

  return {
    data,
    isLoading,
    refetch,
    error,
    onPressLike,
    onPressUnlike,
    onPressComments,
  };
}