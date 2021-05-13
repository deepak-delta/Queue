import React from 'react';
import { StyleSheet,Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScanPage = ({navigation}) =>{
    
    const onSuccess = (e) => {
        console.log(e.data);
        navigation.navigate('Home');
    }
    return(
        <QRCodeScanner
        onRead={onSuccess}
    /> 
    )
}
    
       

export default ScanPage
