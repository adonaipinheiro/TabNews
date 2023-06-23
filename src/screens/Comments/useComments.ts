import {RouteProp, useRoute} from '@react-navigation/native';

import {StackParamList} from '@routes';
import {useGetContentChildrenQuery} from '@store/services/tabNews';

export function useComments() {
  const route = useRoute<RouteProp<StackParamList, 'Comments'>>();
  const {data, isLoading, refetch, error} =
    useGetContentChildrenQuery({
      owner_username: route.params.owner_username,
      slug: route.params.slug,
    });

  console.log(data);

  return {
    data,
    isLoading,
    refetch,
    error,
  };
}
