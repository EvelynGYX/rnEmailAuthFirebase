import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default Loading = ({}) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#664633" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
