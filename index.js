import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import { SearchBar } from './rn-components/searchBar';

class RNPDDHomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar hint='格兰菲迪12年' style={[styles.child,styles.searchBar]}></SearchBar>
        <View style={[styles.child,styles.segmentBar]}></View>
        <View style={[styles.child,styles.content]}></View>
        <View style={[styles.child,styles.tabBar]}></View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  child: {
    flex: 0,
    width: '100%',
  },
  searchBar: {
    height: 60,
  },
  segmentBar: {
    height: 40,
    backgroundColor: 'blue',
  },
  content: {
    flex: 1,
    backgroundColor: 'green',
  },
  tabBar: {
    height: 80,
    backgroundColor: 'red',
  },
});

// 模块名称
AppRegistry.registerComponent('RNPDDHomePage', () => RNPDDHomePage);