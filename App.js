import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
