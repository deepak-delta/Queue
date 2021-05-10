import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import {windowWidth, windowHeight} from '../utils/Dimension';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/back2.png')}
      style={styles.image}>
      <View style={styles.navbar}>
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

        <View style={styles.ticket}>
          {/* <Text style={styles.ticketText}>Scan to join queue</Text> */}
          <Text style={styles.ticketNumber}>007</Text>
          <Text style={styles.ticketCurrent}>Current Token 002</Text>
          <Text style={styles.ticketDate}>Token Date 01/02/2021</Text>
          <Text style={styles.ticketDate}>Token Time 10:52 AM</Text>
          <Text style={styles.ticketService}>Service : Shop</Text>
          <Text style={styles.ticketService}>Location: abdc</Text>
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

  ticket: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#A4A4DC',
    height: windowHeight / 2.6,
    width: windowWidth / 1.1,
    marginTop: windowHeight / 5.5,
    borderRadius: 50,
  },

  ticketText: {
    textAlign: 'center',
    color: '#ECECFB',
    marginTop: 100,
  },
  ticketNumber: {
    textAlign: 'center',
    color: '#ECECFB',
    fontSize: 100,
  },
  ticketCurrent: {
    textAlign: 'center',
    color: '#ECECFB',
    fontSize: 30,
  },
  ticketDate: {
    textAlign: 'center',
    color: '#ECECFB',
    fontSize: 20,
  },
  ticketService: {
    textAlign: 'center',
    color: '#ECECFB',
    fontSize: 15,
  },
});
