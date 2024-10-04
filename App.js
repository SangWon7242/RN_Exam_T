import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {GOOGLE_API_KEY} from '@env';

/*
const {width: SCREEN_WIDTH} = Dimensions.get('window');

console.log(SCREEN_WIDTH);
*/

const SCREEN_WIDTH = Dimensions.get('window').width;

const App = () => {
  const [errorMsg, setErrorMsg] = useState(null); // 오류 메시지 상태
  const [city, setCity] = useState('');

  const myApiKey = GOOGLE_API_KEY;

  const getAddressFromCoordinates = async ({latitude, longitude}) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${myApiKey}`;

    try {
      const response = await fetch(apiUrl); // API 요청
      const data = await response.json(); // JSON 데이터로 변환

      // console.log(data.results[5].formatted_address);
      const cityAddress = data.results[5].formatted_address;
      setCity(cityAddress);
    } catch (error) {
      setErrorMsg(error);
      console.error('주소를 불러오는데 실패했습니다. :', error);
      return 'Error fetching address';
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      getAddressFromCoordinates({latitude, longitude});
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.regDate}>Friday, 20, January</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>31</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.regDate}>Friday, 20, January</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>31</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.regDate}>Friday, 20, January</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>31</Text>
          </View>
        </View>
      </ScrollView>
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
  weather: {},
  weatherInner: {
    width: SCREEN_WIDTH,
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
