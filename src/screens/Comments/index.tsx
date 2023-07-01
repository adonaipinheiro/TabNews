import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ErrorScreen, LoadingScreen} from '@components';

import {CommentsList} from './components';
import styles from './styles';
import {useComments} from './useComments';

export function Comments() {
  const {data, isLoading, error, refetch} = useComments();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error || !data) {
    return <ErrorScreen retry={refetch} />;
  }

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.container}>
      <CommentsList data={data} />
    </SafeAreaView>
  );
}
