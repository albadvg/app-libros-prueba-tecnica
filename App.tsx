import React from 'react';

import {
  View,
  SafeAreaView,
  Text,
  Image,
  useColorScheme,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Gallery from './components/Gallery';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import AddBook from './components/AddBook';
import Home from './components/Home';

const App = () => {
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    // eslint-disable-next-line react/no-unstable-nested-components
    headerBackground: () => (
      <ImageBackground
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0083/4060/2985/files/tosswill_quarantinromance_2021_1024x1024.jpg?v=1622325463',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1, width: '150%'}}
      />
    ),
    headerTitleAlign: 'center',
    headerStyle: {
      height: 80,
    },
    headerTitleStyle: {
      fontSize: 30,
      color: '#4b3e3a'
    },
    tabBarStyle: {
      backgroundColor: 'white',
      position: 'static',
      height: 60,
    },
  };
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Inicio" screenOptions={screenOptions}>
          <Tab.Screen
            name="Biblioteca"
            component={Gallery}
            options={{
              tabBarIcon: ({focused}) => (
                <Icons
                  name="list"
                  size={30}
                  color={focused ? 'black' : '#9bb2b1'}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Inicio"
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <Icons
                  name="home"
                  size={30}
                  color={focused ? 'black' : '#9bb2b1'}
                />
              ),
              headerShown: false,
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Añadir"
            component={AddBook}
            options={{
              tabBarIcon: ({focused}) => (
                <Icons
                  name="plus"
                  size={30}
                  color={focused ? 'black' : '#9bb2b1'}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
