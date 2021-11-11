import React, {Component} from 'react';
import {StyleSheet,Text ,View} from 'react-native';



export class ItemsScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
            <Text>This is the ItemsScreen</Text>
            <StatusBar style="auto"/>
            </View>
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
  