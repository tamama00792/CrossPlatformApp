import a from '@ant-design/react-native/lib/modal/alert';
import React from 'react';
import { StyleSheet,Text,Image, View} from 'react-native';

export const TransformerArea = ({functionList}) => {
    const components = functionList.map((item,index) => {
        return (
            <View style={styles.function}>
                <Image source={{ uri: item.uri }} style={styles.icon} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    });
    return (
        <View style={styles.container}>
            {components}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    function: {
        flex:0.2,
        alignItems:'center',
    },
    icon: {
        marginTop: 10,
        width: 40,
        height: 40,
    },
    text: {
        marginTop: 5,
        fontSize: 12,
        marginBottom: 10,
    },
});