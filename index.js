import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';
import { SearchBar } from './rn-components/searchBar';
import { Tabs } from '@ant-design/react-native';

const renderContent = (tab, index) =>{
  const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  }
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
    return (
      <View key={`${index}_${i}`} style={style}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>
    )
  })
}

class RNPDDHomePage extends Component {
  
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ]
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    }

    return (
      <View style={styles.container}>
        <SearchBar hint='格兰菲迪12年' style={[styles.child,styles.searchBar]}></SearchBar>
        <View style={[styles.child,styles.segmentBar]}></View>
        <Tabs tabs={tabs}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
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