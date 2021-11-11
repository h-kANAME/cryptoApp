import React, {Component,useEffect, useState} from 'react';
import {StyleSheet,View,StatusBar, Text, TextInput, FlatList} from 'react-native';

import CoinItem from "./CoinItem";


export default function HomeScreen() {
    const [coins, setCoins] = useState([]);
  
    const loadData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    };
  
    useEffect(() => {
      loadData();
    }, []);
  
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#141414" />
        <View style={styles.header}>
          <Text style={styles.title}>Criptos-Nft</Text>
          <TextInput styles={styles.searchInput}/>
          
        </View>
  
        <FlatList
          style={styles.list}
          data={coins}
          renderItem={({ item }) => {
            return <CoinItem coin={item} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#141414",
      alignItems: "center",
      flex: 1,
    },
    title: {
      color: "#ffffff",
      marginTop: 10,
      fontSize: 30,
    },
    list: {
      width: "90%",
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 10,
      marginTop: 80
    },
    searchInput: {
      color: '#fff',
      borderBottomColor: '#FFFFFF',
      borderBottomWidth: 1,
      width: '100%',
      textAlign: 'center'
    }
  });
  
