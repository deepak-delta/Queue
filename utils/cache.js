import AsyncStorage from '@react-native-community/async-storage';

const store = async (key, value) => {
	try {
		const item = {
			value,
			timestamp: Date.now()
		};
		await AsyncStorage.setItem(key, JSON.stringify(item));
		return {status:'ok'}
	} catch (error) {
		console.log(error);
	}
};

const get = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		const item = JSON.parse(value);

		if (!item) return null;
		return item;
	} catch (error) {
		console.log(error);
	}
};

export default {
	store,
	get
};
