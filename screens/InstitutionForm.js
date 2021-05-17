import React, {useContext} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet, ImageBackground, View} from 'react-native';
import * as Yup from 'yup';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Form from '../components/Form';
import {AuthContext} from '../navigation/AuthProvider';

import {windowHeight, windowWidth} from '../utils/Dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const InstitutionForm = ({navigation}) => {
  const source = require('../assets/animations/loading.json');
  const {login, server, status, code, loading} = useContext(AuthContext);

  const handleSubmit = () => {
    console.log('h');
  };

  const validationSchema = Yup.object().shape({
    InstitutionName: Yup.string().min(3),
    Place: Yup.string().min(3),
    UpiId: Yup.string().min(3),
  })

  return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}
        enableOnAndroid={true}>
          
        <ImageBackground
          source={require('../assets/images/back.png')}
          style={styles.backImage}>
          
          <View style={{flex:3}}>
            {/* <Image
              source={require('../assets/login.png')}
              resizeMode="center"
              style={styles.image}
            /> */}
          </View>
          <View style={{
              flex: 1,
              
              
              padding: 40
            }}>
          <Form
            initialValues={{InstitutionName: '', place:'', UpiId: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            
            
            >
            <FormInput
              name="InstitutionName"
              placeholderText='Name of the Institution'
              iconType="office-building"
              autoCorrect={false}
            />

            <FormInput
              name="place"
              placeholderText='place'
              iconType='source-commit-start-next-local'
            />

            <FormInput
              name="UpiId"
              placeholderText='UPI Id'
              iconType='contactless-payment'
            />

            <FormButton
              buttonTitle="Submit"
              textStyle={styles.buttonText}
              buttonStyle={styles.buttonContainer}
            />
          </Form>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
      
    
  );
};

export default InstitutionForm;

const styles = StyleSheet.create({
  backImage: {
    width: '105%',
    height: '105%',
    alignSelf: 'center'
  },
  image: {
    alignSelf: 'center',
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 5,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

