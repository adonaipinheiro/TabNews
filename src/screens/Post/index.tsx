import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Markdown} from 'react-native-markdown-display';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider, ErrorScreen, LoadingScreen} from '@components';
import {StackNavigationProps, StackParamList} from '@routes';
import {useGetContentQuery} from '@store/services/tabNews';
import {$COLORS} from '@utils';

export function Post() {
  const route = useRoute<RouteProp<StackParamList, 'Post'>>();
  const {data, isLoading, refetch} = useGetContentQuery({
    owner_username: route.params.owner_username,
    slug: route.params.slug,
  });

  const navigation = useNavigation<StackNavigationProps>();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        maxWidth: Dimensions.get('window').width / 2.2,
      },
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: ({tintColor}) => {
        return (
          <View style={styles.contentArea}>
            <View style={styles.tabcoinsIcon} />
            <Divider size={5} horizontal />
            <Text style={styles.contentText}>
              {route.params.tabcoins}
            </Text>
            <View style={styles.separator} />
            <Icon name="comments" light size={14} color={tintColor} />
            <Divider size={5} horizontal />
            <Text style={styles.contentText}>
              {route.params.children_deep_count}
            </Text>
            <View style={styles.separator} />
          </View>
        );
      },
    });
  }, [
    navigation,
    route.params.children_deep_count,
    route.params.owner_username,
    route.params.tabcoins,
    route.params.title,
  ]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!data) {
    return <ErrorScreen retry={refetch} />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, padding: 10}}>
        <Markdown style={markdownStyles}>
          {`# ${data.title}\n${data.body}`}
        </Markdown>
      </ScrollView>
    </SafeAreaView>
  );
}

const markdownStyles = StyleSheet.create({
  body: {
    paddingBottom: 80,
  },
  heading1: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 10,
    color: $COLORS.primary,
  },
  heading2: {
    fontSize: 24,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: $COLORS.grayDark,
    marginBottom: 10,
    marginTop: 20,
  },
  heading3: {
    fontSize: 18,
    fontWeight: '600',
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 14,
  },
  heading6: {
    fontSize: 12,
  },
  text: {
    color: $COLORS.primary,
  },
  image: {
    borderRadius: 6,
  },
  code_inline: {
    color: $COLORS.grayLight,
    backgroundColor: $COLORS.primary,
    borderRadius: 6,
  },
  code_block: {
    color: $COLORS.grayLight,
    backgroundColor: $COLORS.primary,
    borderRadius: 6,
  },
  fence: {
    color: $COLORS.grayLight,
    backgroundColor: $COLORS.primary,
    borderRadius: 6,
  },
  paragraph: {
    fontSize: 18,
  },
  list_item: {
    marginVertical: 10,
    fontSize: 16,
  },
  link: {
    color: $COLORS.link,
  },
  blocklink: {
    color: $COLORS.link,
  },
});

const styles = StyleSheet.create({
  contentArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabcoinsIcon: {
    backgroundColor: $COLORS.link,
    width: 14,
    height: 14,
    borderRadius: 3,
  },
  contentText: {
    fontWeight: '600',
    fontSize: 16,
    color: $COLORS.white,
  },
  separator: {
    marginHorizontal: 5,
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: $COLORS.text,
  },
});
