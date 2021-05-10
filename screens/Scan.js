import React from 'react';
//import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Scan = ({navigation}) => {
  const onSuccess = e => {
    {
      navigation.navigate('Home');
    }
  };

  return <QRCodeScanner onRead={onSuccess} showMarker={true} />;
};
export default Scan;
