import React from 'react';
import{StyleSheet, View} from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import QRCode from 'react-native-qrcode-generator';

const DisplayQr = ({id}) => {
    return (
        <>
        <View style={styles.container}>
            <QRCode
            value={!id ? 'http://facebook.github.io/react-native/' : id}
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