import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';
import {windowHeight, windowWidth} from '../utils/Dimension';

import ErrorMessage from './ErrorMessage';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const FormInput = ({name, placeholderText, iconType, password, ...rest}) => {
  const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
  const [show, setShow] = useState(false);
  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name={iconType} size={25} color="#666" />
        </View>

        {password ? (
          <TextInput
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            placeholderTextColor="#666"
            secureTextEntry={!show}
            {...rest}
          />
        ) : (
          <TextInput
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            placeholderTextColor="#666"
            {...rest}
          />
        )}
        {password &&
          (show ? (
            <TouchableWithoutFeedback onPress={() => setShow(false)}>
              <View style={styles.eyeIconStyle}>
                <Entypo name="eye" size={25} color="#666" />
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => setShow(true)}>
              <View style={styles.eyeIconStyle}>
                <Entypo name="eye-with-line" size={25} color="#666" />
              </View>
            </TouchableWithoutFeedback>
          ))}
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 100,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  eyeIconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
