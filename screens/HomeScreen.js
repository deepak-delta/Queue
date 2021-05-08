import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import colors from '../utils/colors';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import { default as theme } from '../custom-theme.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  const {height} = Dimensions.get('window');

  useEffect(() => {
    StatusBar.setBackgroundColor(colors.bg);
  }, []);

  const [selection, setSelection] = useState("");

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button style = {styles.btn} size='giant' onPress={()=>navigation.navigate('ScanPage')}>Join Queue</Button>
      <Text>---or---</Text>
      <Button style = {styles.btn} size='giant' onPress={() => (setSelection('create'))}>Create Queue</Button>
    </Layout>
  </ApplicationProvider>
  );

};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    
  },
  btn: {
    margin: 5
  }
});
