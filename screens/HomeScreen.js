import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import colors from '../utils/colors';
import {windowHeight, windowWidth} from '../utils/Dimension';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/back.png')}
      style={styles.image}>
      <View style={styles.navbar}>
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color="#a2a2db"
        />
        <TouchableOpacity onPress={() =>  navigation.navigate('Profile')}>
          <MaterialCommunityIcons
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{marginLeft: windowWidth/1.5}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Hello</Text>

        <Text style={styles.subHeading}>
          
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ScanPage')} style={styles.btn}>
            <MaterialCommunityIcons
              name="bank-plus"
              color="white"
              size={32}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate('InstitutionForm')}} style={styles.btn}>
            <MaterialCommunityIcons name="qrcode-scan" color="white" size={32} />
          </TouchableOpacity>
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
    width: '105%',
    height: '105%',
    alignSelf: 'center'
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
    marginHorizontal: 28,
  },
  ticket: {
    backgroundColor: '#ffffff',
    height: 300,
    width: windowWidth/1.2,
    borderRadius: 15,
    padding: 15,
    marginTop: 110,
  },
});
