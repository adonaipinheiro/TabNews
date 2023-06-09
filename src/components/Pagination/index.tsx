import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './styles';
import {Divider} from '../Divider';

interface PaginationProps {
  onPressNext(): void;
  onPressPrev(): void;
  currentPage: number;
}

export const Pagination = memo(
  ({onPressNext, onPressPrev, currentPage = 1}: PaginationProps) => {
    return (
      <View style={styles.container}>
        {currentPage === 1 ? (
          <View style={styles.emptyPrev} />
        ) : (
          <TouchableOpacity
            onPress={onPressPrev}
            activeOpacity={0.7}
            style={styles.prevAndNextPage}>
            <Text style={styles.prevAndNextPageText}>
              {currentPage - 1}
            </Text>
          </TouchableOpacity>
        )}

        <Divider size={20} horizontal />
        <TouchableOpacity style={styles.currentPage}>
          <Text style={styles.currentPageText}>{currentPage}</Text>
        </TouchableOpacity>
        <Divider size={20} horizontal />
        <TouchableOpacity
          onPress={onPressNext}
          activeOpacity={0.7}
          style={styles.prevAndNextPage}>
          <Text style={styles.prevAndNextPageText}>
            {currentPage + 1}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);
