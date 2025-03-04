import React from 'react';
import { StyleSheet,Text, View} from 'react-native';
import { FriendNews } from './friendNews';
import { TransformerArea } from './transformerArea';
import { ActivityZone } from './activityZone'
export const RecommendPage = () => {
    const uri = 'https://img2.baidu.com/it/u=1006976876,3734730163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1736528400&t=2de6f1665df95b007d73679e0b5ca0ae'
    const uriList = [
        'https://img2.baidu.com/it/u=1006976876,3734730163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1736528400&t=2de6f1665df95b007d73679e0b5ca0ae',
        'https://img1.baidu.com/it/u=2722956424,1906108741&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1736528400&t=40ac05dc485527299c514638dacddb23',
        'https://img0.baidu.com/it/u=3178086179,1169036752&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1736528400&t=e020afdf4906146e78c2b025ab1f7d01'
    ]
    const functionList = [
        {uri:uri,text:'限时秒杀'},
        {uri:uri,text:'充值中心'},
        {uri:uri,text:'现金大转盘'},
        {uri:uri,text:'免费领水果'},
        {uri:uri,text:'其他'},
    ]
    const activityList = [
        {
            uri:uri,
            title:'百亿补贴',
            hint:'应有尽有',
            commodityList:[
                {
                    uri:uri,
                    price:5599,
                },
                {
                    uri:uri,
                    price:1266,
                },
                {
                    uri:uri,
                    price:272,
                }
            ]
        },
        {
            uri:uri,
            title:'多多买菜',
            hint:'次日自提',
            commodityList:[
                {
                    uri:uri,
                    price:14.99,
                },
                {
                    uri:uri,
                    price:0.1,
                },
                {
                    uri:uri,
                    price:25.89,
                }
            ]
        }
    ]
    return (
        <View style={styles.container}>
            <FriendNews uriList={uriList}></FriendNews>
            <View style={styles.divider}></View>
            <TransformerArea functionList={functionList}></TransformerArea>
            <View style={styles.divider}></View>
            <ActivityZone activityList={activityList}></ActivityZone>
            <View style={styles.divider}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    divider: {
        height: 10,
        backgroundColor: '#f0f0f0',
    },
  });