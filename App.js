/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import Providers from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Providers />
    </SafeAreaView>
  );
};

export default App;
