import React from 'react';
import {FlatList, Text} from 'react-native';
import {Markdown} from 'react-native-markdown-display';

import {GetContentChildrenResponseType} from '@store/services/tabNews/types';
import {$COLORS, calculeDiffDate, markdownStyles} from '@utils';

interface CommentsItemProps {
  item: GetContentChildrenResponseType;
  owner?: string;
}

export function CommentsItem({item, owner}: CommentsItemProps) {
  return (
    <>
      <Text
        style={{
          backgroundColor: $COLORS.blueLight300,
          color: $COLORS.blue,
        }}>
        {item.owner_username} {owner && `em resposta à ${owner}`}
      </Text>
      <Text>{calculeDiffDate(item.published_at)}</Text>
      <Markdown
        style={{
          ...markdownStyles,
          body: {
            ...markdownStyles.body,
            paddingBottom: 10,
          },
        }}>
        {item.body}
      </Markdown>
      {item.children?.length > 0 && (
        <FlatList
          data={item.children}
          renderItem={child => (
            <CommentsItem
              item={child.item}
              owner={item.owner_username}
            />
          )}
        />
      )}
    </>
  );
}
