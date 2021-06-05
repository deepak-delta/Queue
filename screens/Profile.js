import React, {useContext, useState} from 'react';
import {View, TextInput, StyleSheet, ImageBackground, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import RNUpiPayment from 'react-native-upi-payment';
import {windowWidth, windowHeight} from '../utils/Dimension';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import RNUpiPayment from 'react-native-upi-pay';

const ProfileScreen = ({route}) => {
  const [user, setuser] = useState(auth().currentUser);
  const {logout} = useContext(AuthContext);
  const doc = route.params;
  const [amount, setamount] = useState('');

  const successCallback = data => console.log(data);
  const failureCallback = data => console.log(data);

  return (
    <ImageBackground
      source={require('../assets/images/back2.png')}
      style={styles.image}>
      <View style={{paddingTop: 20, alignItems: 'center'}}>
        <Text style={styles.heading}>{user.email}</Text>
        <TouchableOpacity style={styles.resetbtn} onPress={() => logout()}>
          <Text style={styles.resettxt}>Log Out</Text>
        </TouchableOpacity>
      </View>
      {doc.doc && (
        <View style={styles.container}>
          <View style={styles.ticket}>
            <Text style={styles.ticketCurrent}>
              Pay {doc.doc.InstitutionName} using UPI
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: '#ECECFB',
                borderWidth: 1,
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onChangeText={text => setamount(text)}
              value={amount}
              placeholder="Amount"
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons
                  name="arrow-right-circle-outline"
                  color="#ECECFB"
                  size={62}
                  onPress={() => {
                    RNUpiPayment.initializePayment(
                      {
                        vpa: doc.doc.UpiId,
                        payeeName: doc.doc.InstitutionName,
                        amount: amount,
                        transactionRef: 'aasf-332-aoei-fn',
                      },
                      successCallback,
                      failureCallback,
                    );
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

export default ProfileScreen;

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
    color: '#a2a2db',
    fontFamily: 'RobotoBold',
    textAlign: 'center',
    paddingTop: 40,
  },
  subHeading: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'RobotoRegular',
    color: '#a2a2db',
    textAlign: 'center',
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
    paddingTop: 50,
    paddingBottom: 30,
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
  btn: {
    paddingTop: 20,
  },

  resetbtn: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#A4A4DC',
    paddingVertical: 10,
  },
  resettxt: {
    fontSize: 14,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
