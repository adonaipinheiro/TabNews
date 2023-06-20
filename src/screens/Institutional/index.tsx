import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';

import styles from './styles';
import {useInstitutional} from './useInstitutional';

export function Institutional() {
  const {url, INJECTED_JAVASCRIPT} = useInstitutional();

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.container}>
      <WebView
        source={{uri: url}}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        startInLoadingState
        onMessage={_ => {}}
        style={styles.webView}
      />
    </SafeAreaView>
  );
}
