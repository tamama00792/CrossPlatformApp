import { Icon } from '@ant-design/react-native';
import React from 'react';
import { StyleSheet,Text,Image, View} from 'react-native';

export const FriendNews = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftPart}>
            <Image style={styles.tinyLogo} source={{uri:'https://rn.nodejs.cn/img/tiny_logo.png'}}
      />
                <Text style={{flex:2}}>拼小圈</Text>
            </View>
            <View style={styles.rightPart}>
                <Image source={{ uri: 'https://img2.baidu.com/it/u=1006976876,3734730163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1736528400&t=2de6f1665df95b007d73679e0b5ca0ae' }} style={styles.image} />
                <Image source={{ uri: 'https://img1.baidu.com/it/u=2722956424,1906108741&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1736528400&t=40ac05dc485527299c514638dacddb23' }} style={styles.image} />
                <Image source={{ uri: 'https://img0.baidu.com/it/u=3178086179,1169036752&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1736528400&t=e020afdf4906146e78c2b025ab1f7d01' }} style={styles.image} />
                <Text>新动态和提醒</Text>
                <Text>34</Text>
                <Icon name="right" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      flex:1
    },
    leftPart: {
        flex:1,
        flexDirection:'row',
    },
    rightPart: {
        flex:2,
        flexDirection:'row',
    },
    image: {
        width: 40,
        height: 40,
    },
    tinyLogo: {
        width: 40,
        height: 40,
      },
  });