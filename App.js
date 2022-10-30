import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './app/screens/homeScreen';
import Splash from './app/screens/splashScreen/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Add from './app/screens/addCities';
import Settings from './app/screens/settings';
const Stack = createNativeStackNavigator();
const App = () => {
  const [show, setshow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 2000);
  }, []);

  return (
    <>
      {show ? (
        <Splash />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="add"
              component={Add}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="setting"
              component={Settings}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
