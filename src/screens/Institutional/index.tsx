import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

import {StackNavigationProps, StackParamList} from '@routes';
import {$COLORS} from '@utils';

export function Institutional() {
  const route =
    useRoute<RouteProp<StackParamList, 'Institutional'>>();

  const url = route.params.url;

  const navigation = useNavigation<StackNavigationProps>();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, route.params.title]);

  const INJECTED_JAVASCRIPT = `(function() {
    var header = document.getElementById("header");
    header.style.display = "none";

    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].onclick = function() {return false;};
    }

    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.background = "${$COLORS.primaryDark}"
    }

    var footer = document.querySelector("footer")
    footer.style.display = "none";
})();`;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: $COLORS.white}}>
      <WebView
        source={{uri: url}}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        startInLoadingState
        onMessage={_ => {}}
      />
    </SafeAreaView>
  );
}
