import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import colors from '../utils/colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/back.png')}
      style={styles.image}>
      <View style={styles.navbar}>
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color="#a2a2db"
          style={{width: 20}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <MaterialCommunityIcons
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{marginLeft: 230}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Hello</Text>

        <Text style={styles.subHeading}>
          Lorem ipsum dolor sit amet, consectetuer adipscing elit.
        </Text>

        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <MaterialCommunityIcons
              name="office-building"
              color="white"
              size={32}
            />
          </View>

          <View style={styles.btn}>
            <MaterialCommunityIcons name="bus" color="white" size={32} />
          </View>
        </View>

        <View style={styles.ticket}>
          <Image
            source={require('../assets/images/3.jpg')}
            style={{
              width: 100,
              borderRadius: 100,
              height: 100,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: 150,
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'RobotoRegular',
                  fontSize: 11,
                  color: '#a2a2db',
                }}>
                Lorem impsum dolor sit amet, consectetuer adipscing elit,
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  navbar: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  container: {
    paddingHorizontal: 40,
    marginTop: 25,
  },
  heading: {
    fontSize: 40,
    color: '#522289',
    fontFamily: 'RobotoBold',
  },
  subHeading: {
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    fontFamily: 'RobotoRegular',
    color: '#a2a2db',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#ff5c83',
    marginHorizontal: 22,
  },
  ticket: {
    backgroundColor: '#ffffff',
    height: 300,
    width: 280,
    borderRadius: 15,
    padding: 5,
    marginTop: 110,
  },
});
