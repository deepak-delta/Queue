import React, {useState} from 'react';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import colors from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
