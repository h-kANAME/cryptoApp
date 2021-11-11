import React, {Component} from 'react';
import { StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './Screens/HomeScreen';
import {CoinScreen} from './Screens/CoinScreen';

const Drawer = createDrawerNavigator();

export default class App extends Component {

  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRoute="Home">
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="Coin" component={CoinScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
