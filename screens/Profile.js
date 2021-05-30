import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const ProfileScreen = ({navigation}) => {

  const {logout} = useContext(AuthContext);

  return (
    <>
      <View>
        <Button title='Log Out' onPress={() => logout()} />
      </View>
    </>
  );
};

export default ProfileScreen;
