import React, {useState, useEffect} from 'react';
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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Button} from 'react-native';

const Dashboard = ({navigation}) => {
  const userId = auth().currentUser.uid;
  const [doc, setdoc] = useState(null);
  const [currentUid, setcurrentUid] = useState(null);
  const [currentT, setcurrentT] = useState(0);
  const [userdata, setuserdata] = useState(null);
  const [totalT, settotalT] = useState(null);

  const updateQueue = () => {
    if (currentT < totalT) {
      firestore()
        .collection('Users')
        .doc(currentUid)
        .onSnapshot(documentSnapshot => {
          setuserdata(documentSnapshot.data());
        });

      firestore()
        .collection('Queues')
        .doc(userId)
        .update({
          CurrentT: currentT + 1,
        });
      dataFetch();
    }
  };

  const dataFetch = () => {
    const subscriber = firestore()
      .collection('Queues')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        setdoc(documentSnapshot.data());
        setcurrentUid(
          documentSnapshot.data().Tokens[documentSnapshot.data().CurrentT + 1],
        );
        setcurrentT(documentSnapshot.data().CurrentT);
        settotalT(documentSnapshot.data().TotalT);
      });

    return () => subscriber();
  };

  const reset = () => {
    firestore().collection('Queues').doc(userId).update({
      TotalT: 0,
      CurrentT: 0,
      Tokens: {},
    });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/back2.png')}
      style={styles.image}>
      {doc && (
        <View style={styles.container}>
          <Text style={styles.heading}>{doc.InstitutionName}</Text>

          <Text style={styles.subHeading}>{doc.Place}</Text>

          <View style={styles.ticket}>
            <Text style={styles.ticketNumber}>{doc.CurrentT}</Text>
            <Text style={styles.ticketCurrent}>Total Tokens: {doc.TotalT}</Text>
            {userdata ? (
              <View>
                <Text style={styles.ticketDate}>
                  Customer Name: {userdata.firstname}
                </Text>
                <Text style={styles.ticketDate}>
                  Customer Email: {userdata.email}
                </Text>
              </View>
            ) : (
              <View>
                <Text style={styles.ticketDate}>Customer Name: </Text>
                <Text style={styles.ticketDate}>Customer Email: </Text>
              </View>
            )}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  updateQueue();
                }}>
                <MaterialCommunityIcons
                  name="arrow-right-circle-outline"
                  color="#ECECFB"
                  size={62}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.resetbtn} onPress={reset}>
            <Text style={styles.resettxt}>Reset Queue</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
};

export default Dashboard;

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
    backgroundColor: '#de0909',
    paddingVertical: 10,
  },
  resettxt: {
    fontSize: 14,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
