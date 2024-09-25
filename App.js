import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'darkorange'}}></View>
      <View style={{flex: 3, backgroundColor: 'red'}}></View>
      <View style={{flex: 1, backgroundColor: 'green'}}></View>
    </View>
  );
};

export default App;
