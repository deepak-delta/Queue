import React from 'react';
import { Button } from 'react-native';
import{StyleSheet, View} from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import QRCode from 'react-native-qrcode-generator';


const DisplayQr = ({navigation, route}) => {
    const userId = route.params;
    return (
        <>
        <View style={styles.container}>

            <QRCode
            value={userId.userId}
            size={300}
            bgColor='black'
            fgColor='white'/>
            <Button title='Goto Dashboard'onPress={() => navigation.navigate('Dashboard')} />
        </View>
        </>
    )
}
export default DisplayQr;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            
        }
    }
);