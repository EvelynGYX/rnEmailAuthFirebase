/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import LoadingScreen from './src/LoadingScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoadingScreen />
    </SafeAreaView>
  );
};

export default App;
