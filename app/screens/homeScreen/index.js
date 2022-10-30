import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import SettingsIcon from 'react-native-vector-icons/MaterialIcons';
import AddIcon from 'react-native-vector-icons/FontAwesome';
import SunIcon from 'react-native-vector-icons/Fontisto';
import TempIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AirIcon from 'react-native-vector-icons/Entypo';
import styles from './styles';
export default function Home({navigation}) {
  const [lat, setlat] = useState([]);
  const [long, setlong] = useState([]);
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setlat('30.741482');
      setlong('76.768066');

      console.log('Latitude is:', lat);
      console.log('Longitude is:', long);

      const apiKey = '3382d47b6fee349053b5a2caec124c01';

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
      )
        .then(res => res.json())
        .then(result => {
          setdata(result);
          console.log(result);
        });
    };

    fetchData();
  }, [lat, long]);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainBack}
        source={require('../../assets/mainBackground.jpg')}>
        <View style={styles.header}>
          <View style={styles.addCity}>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('add')}>
              <AddIcon name="plus" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.currentCity}>
            <Text style={styles.cityTitle}>{data?.name}</Text>
          </View>
          <View style={styles.settings}>
            <TouchableOpacity
              style={styles.settingBtn}
              onPress={() => navigation.navigate('setting')}>
              <SettingsIcon name="settings" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.highlight}>
            <SunIcon name="day-sunny" size={58} color="#fff" />
            <Text style={styles.todaysTitle}>{data.weather?.[0]?.main}</Text>
            <View style={styles.mainWeather}>
              <Text style={styles.todaysTempTitle}>{data?.main?.temp}</Text>
              <View style={styles.tempIcon}>
                {/* <TempIcon name="temperature-celsius" size={30} color="#fff" /> */}
              </View>
            </View>
            <View>
              <Text style={styles.miniTitles}>
                Feels like {data?.main?.feels_like}{' '}
              </Text>
            </View>
          </View>
          <View style={styles.weekList}>
            <View style={styles.weatherCard}>
              <Text style={styles.miniTitles}>12:00</Text>
              <SunIcon name="day-sunny" size={25} color="#fff" />
              <Text style={styles.miniTitles}>31</Text>
              <AirIcon name="air" size={25} color="#fff" />
              <Text style={styles.miniTitles}>2km/h</Text>
            </View>
            <View style={styles.weatherCard}>
              <Text style={styles.miniTitles}>13:00</Text>
              <SunIcon name="day-sunny" size={25} color="#fff" />
              <Text style={styles.miniTitles}>30</Text>
              <AirIcon name="air" size={25} color="#fff" />
              <Text style={styles.miniTitles}>3km/h</Text>
            </View>
            <View style={styles.weatherCard}>
              <Text style={styles.miniTitles}>14:00</Text>
              <SunIcon name="day-sunny" size={25} color="#fff" />
              <Text style={styles.miniTitles}>30</Text>
              <AirIcon name="air" size={25} color="#fff" />
              <Text style={styles.miniTitles}>2km/h</Text>
            </View>
            <View style={styles.weatherCard}>
              <Text style={styles.miniTitles}>15:00</Text>
              <SunIcon name="day-sunny" size={25} color="#fff" />
              <Text style={styles.miniTitles}>31</Text>
              <AirIcon name="air" size={25} color="#fff" />
              <Text style={styles.miniTitles}>4km/h</Text>
            </View>
            <View style={styles.weatherCard}>
              <Text style={styles.miniTitles}>16:00</Text>
              <SunIcon name="day-sunny" size={25} color="#fff" />
              <Text style={styles.miniTitles}>30</Text>
              <AirIcon name="air" size={25} color="#fff" />
              <Text style={styles.miniTitles}>2.3km/h</Text>
            </View>
          </View>
          <View style={styles.otherDetails}>
            <View style={styles.sec1}>
              <View style={styles.tommorowRep}>
                <View style={styles.tommRepSec}>
                  <SunIcon name="day-sunny" size={38} color="#fff" />
                  <Text style={styles.repSecTitle}>Tommorow - Clear</Text>
                </View>
                <View style={styles.tempSec}>
                  <Text style={styles.repSecTitle}>
                    {data?.main?.temp_min} / {data?.main?.temp_max}
                  </Text>
                </View>
              </View>
              <View style={styles.tommorowRep1}>
                <View style={styles.tommRepSec}>
                  <SunIcon name="day-sunny" size={38} color="#fff" />
                  <Text style={styles.repSecTitle}>Tommorow - Clear</Text>
                </View>
                <View style={styles.tempSec}>
                  <Text style={styles.repSecTitle}>
                    {data?.main?.temp_min} / {data?.main?.temp_max}{' '}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.sec2}>
              <View style={styles.moreInfo1}>
                <View style={styles.infoTitles}>
                  <Text style={styles.miniTitles}>Wind</Text>
                  <Text style={styles.miniTitles}>Humidity</Text>
                </View>
                <View style={styles.infoTitles}>
                  <Text style={styles.infoVals}>{data?.wind?.speed} km/h</Text>
                  <Text style={styles.infoVals}>{data?.main?.humidity}%</Text>
                </View>
              </View>
              <View style={styles.moreInfo2}>
                <View style={styles.infoTitles}>
                  <Text style={styles.miniTitles}>UV Index</Text>
                  <Text style={styles.miniTitles}>Visibility</Text>
                </View>
                <View style={styles.infoTitles}>
                  <Text style={styles.infoVals}>0.18</Text>
                  <Text style={styles.infoVals}>{data?.visibility}</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.fdayForcast}>
            <Text style={styles.fdayTitle}>5-day forecast</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
