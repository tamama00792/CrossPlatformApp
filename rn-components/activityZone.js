import React from 'react';
import { StyleSheet,Text,Image, View} from 'react-native';
import { Flex } from '@ant-design/react-native';
import FlexItem from '@ant-design/react-native/lib/flex/FlexItem';

const ActivityCard = ({activity}) => {
    const title = activity?.title ?? '- -'
    const icon = activity?.uri
    const hint = activity?.hint ?? '- -'
    const list = activity?.commodityList ?? []
    return (
        <View style={styles.card}>
            <Flex direction='column' align='stretch' style={{flex:1}}>
                <Flex.Item style={{flex:0.3}}>
                    <Flex direction='row' align='start' justify='between' style={{flex:1}}>
                        <Flex.Item>
                            <View style={{flexDirection:'row',alignItems:'center',padding:5}}>
                                <Image source={{uri:icon}} style={{width: 20, height: 20}} />
                                <Text style={{fontSize:16,marginLeft:5}}>{title}</Text>
                            </View>
                            
                        </Flex.Item>
                        <Flex.Item style={{flex:0.7}}>
                        <Text style={{fontSize:15,color:'gray',textAlign:'right',marginTop:5,marginRight:5}}>{hint}</Text>                             
                        </Flex.Item>
                    </Flex>
                </Flex.Item>
                <Flex.Item>
                    <Flex direction='row' style={{flex:1}}>
                        {list.map((item, i) => (
                            <Flex.Item key={i} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={{uri:item?.uri}} style={{width: 40, height: 40}} />
                                <Text style={{color:'#ED3437'}}>¥{item?.price}</Text>
                            </Flex.Item>
                        ))}
                    </Flex>
                </Flex.Item>
            </Flex>
        </View>
    );
};
export const ActivityZone = ({activityList}) => {
    return (
        <View style={styles.container}>
            <Flex justify='around'>
                <Flex.Item style={{paddingLeft:10,paddingRight:5}}>
                    <ActivityCard activity={activityList[0]}>
                    </ActivityCard>
                </Flex.Item>
                <Flex.Item style={{paddingLeft:5,paddingRight:10}}>
                    <ActivityCard activity={activityList[1]}>
                    </ActivityCard>
                </Flex.Item>
            </Flex>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0'
    },
    card: {
        backgroundColor: 'white',
        borderRadius:10,
        height:100,
    }
});