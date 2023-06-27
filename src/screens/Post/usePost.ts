import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import {Dimensions} from 'react-native';
import Share from 'react-native-share';

import {StackNavigationProps, StackParamList} from '@routes';
import {
  useGetContentQuery,
  usePrefetch,
} from '@store/services/tabNews';

import {renderHeaderRight} from './components';

export function usePost() {
  const route = useRoute<RouteProp<StackParamList, 'Post'>>();
  const navigation = useNavigation<StackNavigationProps>();
  const {data, isLoading, refetch, error} = useGetContentQuery({
    owner_username: route.params.owner_username,
    slug: route.params.slug,
  });
  const prefetch = usePrefetch('getContentChildren');
  prefetch({
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

  const onPressComments = useCallback(() => {
    navigation.navigate('Comments', {
      owner_username: route.params.owner_username,
      slug: route.params.slug,
    });
  }, [navigation, route.params.owner_username, route.params.slug]);

  const onPressShare = () => {
    Share.open({
      message:
        'https://www.tabnews.com.br/adonaipinheiro/tabnews-react-native-v0-0-3-wip',
      title: 'Olá, mundo',
      url: 'https://www.tabnews.com.br/api/v1/contents/adonaipinheiro/tabnews-react-native-v0-0-3-wip/thumbnail',
    }).catch(() => {});
  };

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
          onPress: onPressComments,
        }),
    });
  }, [navigation, onPressComments, route.params]);

  return {
    data,
    isLoading,
    refetch,
    error,
    onPressLike,
    onPressUnlike,
    onPressComments,
    onPressShare,
    owner_username: route.params.owner_username,
  };
}
