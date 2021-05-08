import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanPage from '../screens/ScanPage';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScanPage"
          component={ScanPage}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;