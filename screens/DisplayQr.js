import React from 'react';
import{StyleSheet, View} from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import QRCode from 'react-native-qrcode-generator';
import auth from '@react-native-firebase/auth';


const DisplayQr = () => {
    const userId = auth().currentUser.uid;
    return (
        <>
        <View style={styles.container}>

            <QRCode
            value={userId}
            size={300}
            bgColor='black'
            fgColor='white'/>
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