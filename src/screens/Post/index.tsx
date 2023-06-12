import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Markdown} from 'react-native-markdown-display';

import {ErrorScreen, LoadingScreen} from '@components';

import {FAB} from './components';
import styles, {markdownStyles} from './styles';
import {usePost} from './usePost';

export function Post() {
  const {
    data,
    isLoading,
    error,
    refetch,
    onPressLike,
    onPressUnlike,
  } = usePost();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error || !data) {
    return <ErrorScreen retry={refetch} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Markdown style={markdownStyles}>
          {`# ${data.title}\n${data.body}`}
        </Markdown>
      </ScrollView>
      <FAB
        onLike={onPressLike}
        onUnlike={onPressUnlike}
        onComments={() => {}}
      />
    </SafeAreaView>
  );
}
