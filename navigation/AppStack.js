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

// const MyTabs = () => {
//   const [isSubmitted, setSbumitted] = useState();

//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       backBehavior="none"
//       tabBarOptions={{
//         activeTintColor: colors.icon,
//         inactiveTintColor: colors.myColor,
//         keyboardHidesTabBar: true,
//         safeAreaInset: {bottom: 0, top: 'never'},
//         style: {
//           backgroundColor: colors.tab,
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',

//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />

//       {/* <Tab.Screen
//         name="Documents"
//         component={DocNavigation}
//         options={{
//           tabBarLabel: 'Documents',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="file-document" color={color} size={size} />
//           ),
//         }}
//       /> */}

//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MyTabs;

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
