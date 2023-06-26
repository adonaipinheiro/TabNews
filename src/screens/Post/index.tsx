import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Markdown} from 'react-native-markdown-display';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ErrorScreen, LoadingScreen} from '@components';
import {markdownStyles} from '@utils';

import {FAB} from './components';
import styles from './styles';
import {usePost} from './usePost';

export function Post() {
  const {
    data,
    isLoading,
    error,
    refetch,
    onPressLike,
    onPressUnlike,
    onPressComments,
    owner_username,
  } = usePost();

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
      <ScrollView style={styles.scrollView}>
        <View style={styles.postOwnerNameContainer}>
          <Text style={styles.postOwnerText}>{owner_username}</Text>
        </View>
        <Markdown style={markdownStyles}>
          {`# ${data.title}\n${data.body}`}
        </Markdown>
      </ScrollView>
      <FAB
        onLike={onPressLike}
        onUnlike={onPressUnlike}
        onComments={onPressComments}
      />
    </SafeAreaView>
  );
}
