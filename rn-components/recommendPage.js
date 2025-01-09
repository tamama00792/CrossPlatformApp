import React from 'react';
import { StyleSheet,Text, View} from 'react-native';
import { FriendNews } from './friendNews';
export const RecommendPage = () => {
    return (
        <View style={styles.container}>
            <FriendNews ></FriendNews>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
  });