import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {StyleSheet,Text ,View} from 'react-native';

import { CartScreen } from './CartScreen';
import { ItemsScreen } from './ItemsScreen';

const Tab = createBottomTabNavigator();



export class CoinScreen extends Component {

    render(){
        return(
           <Tab.Navigator initialRoute="Items">
               <Tab.Screen name="Cart" component={CartScreen}/>
               <Tab.Screen name="Item" component={ItemsScreen}/>
           </Tab.Navigator>
        )
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
  