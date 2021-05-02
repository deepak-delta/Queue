import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';

import LottieView from 'lottie-react-native';

export default function ActivityIndicator({source, visible = false }) {
	if (!visible) return null;
	return (
		<View style={styles.container}>
			<LottieView autoPlay loop source={source} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		height: '100%',
		width: '100%',
		zIndex: 1,
		backgroundColor: colors.white,
		opacity: 0.6
	}
});
