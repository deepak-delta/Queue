import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';

export default function NetworkError({message}) {
	return (
		<View style={styles.errorStyle}>
			<Text style={{ color: 'white', fontSize: 15 }}>{message}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	errorStyle: {
		width: '100%',
		backgroundColor: colors.red,
		alignItems: 'center',
		zIndex: 1
	}
});
