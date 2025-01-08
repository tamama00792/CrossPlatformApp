import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';
import { SearchBar } from './rn-components/searchBar';
import { Tabs } from '@ant-design/react-native';
import { RecommendPage } from './rn-components/recommendPage';
import { PhonePage } from './rn-components/phonePage';
import { EventPage } from './rn-components/eventPage';

class RNPDDHomePage extends Component {
  
  render() {
    const tabs = [
      { title: '推荐' },
      { title: '11.11返场！' },
      { title: '手机' },
    ]

    return (
      <View style={styles.container}>
        <SearchBar hint='格兰菲迪12年' style={[styles.child,styles.searchBar]}></SearchBar>
        <Tabs tabs={tabs} tabBarActiveTextColor='red' tabBarUnderlineStyle={{backgroundColor:'red'}} style={[styles.child,styles.segmentBar]}>
          <RecommendPage></RecommendPage>
          <PhonePage></PhonePage>
          <EventPage></EventPage>
        </Tabs>
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
    flex:1,
  },
  segmentBarContent: {
    flex:1,
  },
  tabBar: {
    height: 80,
    backgroundColor: 'red',
  },
});

// 模块名称
AppRegistry.registerComponent('RNPDDHomePage', () => RNPDDHomePage);