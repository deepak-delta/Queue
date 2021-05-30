import React, {useContext} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Form from '../components/Form';
import {AuthContext} from '../navigation/AuthProvider';

import {windowHeight, windowWidth} from '../utils/Dimension';
import auth from '@react-native-firebase/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ServerError from '../components/ServerError';
import ErrorMessage from '../components/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().min(3).max(30).label('Email'),
  password: Yup.string().required().min(8).max(20).label('Password'),
});

const LoginScreen = ({navigation}) => {
  const source = require('../assets/animations/loading.json');
  const {login, server, status, code, loading} = useContext(AuthContext);

  const handleSubmit = ({email, password}) => {
    login(email, password);
  };

  const forgotPassword = Email => {
    auth()
      .sendPasswordResetEmail(Email)
      .then(function (user) {
        alert('Please check your email...');
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <>
      {loading && <ActivityIndicator visible={true} source={source} />}
      {server && <ServerError message={"Couldn't Connect to Server"} />}
      {code && (
        <ServerError message={'Too Many Requests.Try after some time'} />
      )}
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          padding: 20,
        }}
        enableOnAndroid={true}>
        <Image
          source={require('../assets/login.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.text}>Welcome back</Text>
        <Form
          initialValues={{email: '', password: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage error="Invalid Username or Password" visible={status} />
          <FormInput
            name="email"
            placeholderText="Email"
            iconType="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            name="password"
            placeholderText="Password"
            iconType="lock"
            password={true}
          />

          <FormButton
            buttonTitle="Sign In"
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonContainer}
          />
        </Form>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 400,
    marginVertical: 10,
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
