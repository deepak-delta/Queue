import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';
import FormInput from '../components/FormInput';
import Form from '../components/Form';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import {windowHeight, windowWidth} from '../utils/Dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import ServerError from '../components/ServerError';
import ErrorMessage from '../components/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().min(3).max(30).label('Email'),
  firstname: Yup.string().required().max(30).label('Name'),
  password: Yup.string().required().min(8).max(20).label('Password'),
  confirmPassword: Yup.string()
    .required()
    .min(8)
    .max(20)
    .label('Confirm Password'),
});

const SignupScreen = ({navigation}) => {
  const source = require('../assets/animations/loading.json');
  const {
    register,
    server2,
    status2,
    code2,
    loading,
    setStatus2,
    setServer2,
    setCode2,
  } = useContext(AuthContext);
  const [passCheck, setPassCheck] = useState(false);

  const handleSubmit = ({firstname, email, password, confirmPassword}) => {
    setPassCheck(false);
    setStatus2(false);
    setServer2(false);
    setCode2(false);

    if (password == confirmPassword) {
      register(firstname, email, password);
    } else {
      setPassCheck(true);
    }
  };

  return (
    <>
      {loading && <ActivityIndicator visible={true} source={source} />}
      {server2 && <ServerError message={"Couldn't Connect to Server"} />}
      {code2 && (
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
          source={require('../assets/signup.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.text}>Create an account</Text>

        <Form
          initialValues={{firstname:'',email: '', password: '', confirmPassword: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage
            error="Please Enter the Same Password"
            visible={passCheck}
          />
          <ErrorMessage error="Account Exist. Please Login" visible={status2} />

          <FormInput
            name="firstname"
            placeholderText="Name"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            name="email"
            placeholderText="Email"
            iconType="mail"
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

          <FormInput
            name="confirmPassword"
            placeholderText="Confirm Password"
            iconType="lock"
            password={true}
          />

          <FormButton
            buttonTitle="Sign Up"
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonContainer}
          />
        </Form>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 250,
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

  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
    marginTop: 10,
    paddingBottom: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
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
