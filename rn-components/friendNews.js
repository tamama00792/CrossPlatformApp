import { Icon } from '@ant-design/react-native';
import React from 'react';
import { StyleSheet,Text,Image, View} from 'react-native';

export const FriendNews = ({uriList}) => {
    const avatarStyles = [styles.avatar1,styles.avatar2,styles.avatar3];
    const components = uriList.map((item,index) => {
        return (
            <Image source={{ uri: item }} style={[styles.avatar,avatarStyles[index]]} />
        );
    });
    return (
        <View style={styles.container}>
            <View style={styles.leftPart}>
                <Image style={styles.tinyLogo} source={{uri:'https://rn.nodejs.cn/img/tiny_logo.png'}}/>
                <Text style={styles.title}>拼小圈</Text>
            </View>
            <View style={styles.rightPart}>
                {components}
                <Text style={styles.hint}>新动态和提醒</Text>
                <View style={styles.mark}>
                <Text style={styles.markText}>34</Text>
                </View>
                <Icon name="right" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      height: 60,
    },
    leftPart: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    rightPart: {
        flex:2,
        flexDirection:'row',
        alignItems:'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    avatar1: {
        marginLeft:60,
    },
    avatar2: {
        marginLeft:-70,
    },
    avatar3: {
        marginLeft:-70,
        marginRight:65,
    },
    tinyLogo: {
        width: 30,
        height: 30,
        marginLeft:20,
        marginRight:10,
    },
    title: {
        fontSize: 20,
        flex:2,
    },
    hint: {
        fontSize: 18,
        color: 'gray',
    },
    mark: {
        backgroundColor: '#ed3437',
        borderRadius: 10,
        paddingHorizontal:3,
    },
    markText: {
        fontSize: 18,
        color: 'white',
    }
  });