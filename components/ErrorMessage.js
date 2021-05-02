import React from 'react';
import { StyleSheet,Text } from 'react-native';

export default function ErrorMessage({ error, visible, lines }) {
	if (!visible || !error) return null;
	return (
		<Text style={styles.errors} numberOfLines={lines}>
			{' '}
			{error}{' '}
		</Text>
	);
}

const styles = StyleSheet.create({
	errors: {
		color: 'red',
		padding: 5,
		margin: 5,
		textAlign: 'center'
	}
});