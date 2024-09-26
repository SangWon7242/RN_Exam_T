import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Ansan</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.regDate}>Friday, 20, January</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>31</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff42',
  },
  city: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  weather: {
    flex: 3,
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  regDate: {
    borderRadius: 20,
    backgroundColor: 'black',
    color: '#ffff42',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  desc: {
    marginTop: 10,
    color: 'black',
    fontSize: 17,
  },
  tempCon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 173,
  },
});

export default App;
