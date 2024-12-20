import React from 'react';
import { StyleSheet,Text, View, TextInput, Button} from 'react-native';

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
      padding: 5
    },
    hintText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });