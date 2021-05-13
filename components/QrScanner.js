import React from 'react';
import { StyleSheet,Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRScanner=() =>{
	return (
		<QRCodeScanner
          reactivate={true}
          showMarker={true}
          onRead={onSuccess}
          topContent={
            <Text style={styles.centerText}>
              Scanning....
          </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
	);
}

export default QRScanner;

const styles = StyleSheet.create({
	centerText: {
	  flex: 1,
	  fontSize: 18,
	  padding: 32,
	  color: '#777'
	},
	textBold: {
	  fontWeight: '500',
	  color: '#000'
	},
	buttonText: {
	  fontSize: 21,
	  color: 'rgb(0,122,255)'
	},
	buttonTouchable: {
	  padding: 16
	}
  });