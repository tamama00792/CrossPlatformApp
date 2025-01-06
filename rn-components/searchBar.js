import React from 'react';
import { StyleSheet,Text, View} from 'react-native';
import { Icon } from '@ant-design/react-native'

export const SearchBar = ({hint}) => {
  return (
    <View style={styles.container}>
      <View style = {styles.innerContainer}>
        <View style = {styles.hint}>
          <Icon style = {styles.cameraIcon } name="search"/>
          <Text style={styles.hintText}>
            {hint}
          </Text>
        </View>
        <Icon style = {styles.cameraIcon } name="camera"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    innerContainer: {
      backgroundColor: '#ECECEC',
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 15,
      marginRight: 15,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    hint: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    hintText: {
      fontSize: 20,
      color: 'gray',
    },
    searchIcon: {
      color: 'gray',
    },
    cameraIcon: {
      color: 'gray',
    },
  });