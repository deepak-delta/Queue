import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function ListView({ name, title, subTitle, icon, color }) {
	return (
			<View style={styles.container}>
				<AntDesign
					style={{ alignSelf: 'center', padding: 10 }}
					size={50}
					name={icon}
					color={color}
				/>
				<View style={styles.detail}>
					<Text style={{ color:"grey", fontSize: 15 }}>{title}</Text>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>{name}</Text>
					<Text>{subTitle}</Text>
				</View>
			</View>
	);
}

const styles = StyleSheet.create({
	detail: {
		flexDirection: 'column',
		padding: 5,
		paddingLeft: 5
	},
	container: {
		flexDirection: 'row'
	},
	img: {
		width: 60,
		height: 60,
		margin: 5,
		borderRadius: 10
	}
});
