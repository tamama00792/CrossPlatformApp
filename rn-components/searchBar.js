import React from 'react';
import { StyleSheet,Text, View} from 'react-native';
import {
  Icon,
} from '@ant-design/react-native'
export const SearchBar = ({hint, onSearch }) => {
//   const contents = scores.map(score => (
//     <Text key={score.name}>
//       {score.name}:{score.value}
//       {'\n'}
//     </Text>
//   ));
  return (
    <View style={styles.container}>
      <View style = {styles.innerContainer}>
        <Text style={styles.hintText}>
          {hint}
        </Text>
      </View>
      <Icon name="SearchOutlined"/>
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
    },
    hintText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });