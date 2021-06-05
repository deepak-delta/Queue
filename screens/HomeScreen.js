import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../utils/colors';
import {windowHeight, windowWidth} from '../utils/Dimension';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import {parseSync} from '@babel/core';

const HomeScreen = ({route, navigation}) => {
  const [code, setcode] = useState(null);
  const [token, settoken] = useState(null);
  const [doc, setdoc] = useState(null);

  const data = route.params;

  useEffect(() => {
    if (data) {
      setcode(data.code);
      settoken(data.token);
      const subscriber = firestore()
        .collection('Queues')
        .doc(data.code)
        .onSnapshot(documentSnapshot => {
          setdoc(documentSnapshot.data());
          console.log(documentSnapshot.data());
        });
      return () => subscriber();
    }
  }, [data]);

  return (
    <ImageBackground
      source={require('../assets/images/back.png')}
      style={styles.image}>
      <View style={styles.navbar}>
        <MaterialCommunityIcons name="menu" size={30} color="#a2a2db" />
        <TouchableOpacity onPress={() => navigation.navigate('Profile', {doc})}>
          <MaterialCommunityIcons
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{marginLeft: windowWidth / 1.5}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Hello</Text>

        <Text style={styles.subHeading}></Text>

        {!code && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('InstitutionForm')}
              style={styles.btn}>
              <MaterialCommunityIcons
                name="bank-plus"
                color="white"
                size={32}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ScanPage');
              }}
              style={styles.btn}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                color="white"
                size={32}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ticket}>
          {code ? (
            doc && (
              <View>
                <Text style={styles.ticketNumber}>{token}</Text>
                <Text style={styles.ticketCurrent}>
                  Current Token: {doc.CurrentT}
                </Text>
                {/* <Text style={styles.ticketDate}>Token Date 01/02/2021</Text>
              <Text style={styles.ticketDate}>Token Time 10:52 AM</Text> */}
                <Text style={styles.ticketService}>
                  Institution: {doc.InstitutionName}
                </Text>
                <Text style={styles.ticketService}>Location: {doc.Place}</Text>
              </View>
            )
          ) : (
            <View>
              <Text>Scan the Qr Code to join the Queue</Text>
            </View>
          )}
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
    alignSelf: 'center',
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
    paddingBottom: 30,
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
    paddingTop: 40,
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
