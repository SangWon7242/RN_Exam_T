import React, {useState} from 'react';
import {StyleSheet, StatusBar, View, Text, Button} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Text style={styles.text}>결과 : {number}</Text>
      <View style={styles.btnGroup}>
        <Button title="증가" onPress={() => setNumber(number + 1)} />
        <Button title="감소" onPress={() => setNumber(number - 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default App;
