import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import colors from '../utils/colors';

const HomeScreen = () => {
  const {height} = Dimensions.get('window');

  useEffect(() => {
    StatusBar.setBackgroundColor(colors.bg);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 50, paddingHorizontal: 14}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 26, color: colors.myColor}}>
              Welcome Back,
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: 0,
  },
});
