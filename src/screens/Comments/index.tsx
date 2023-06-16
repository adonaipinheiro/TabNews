import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Markdown} from 'react-native-markdown-display';

import {ErrorScreen, LoadingScreen} from '@components';
import {markdownStyles} from '@utils';

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data.map((comment, index) => {
          return (
            <Markdown key={index} style={markdownStyles}>
              {comment.body}
            </Markdown>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
