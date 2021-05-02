import React,{useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { useFormikContext } from 'formik';
import {windowHeight, windowWidth} from '../utils/Dimension';

import ErrorMessage from './ErrorMessage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ApplicationInput = ({name, placeholder, iconName, ...rest}) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
            <>
            <View style={styles.action}>
                <FontAwesome name={iconName}  size={20} />
                <TextInput
                    placeholder={placeholder}
                    onBlur={() => setFieldTouched(name)} 
                    onChangeText={handleChange(name)}
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}
                    {...rest}
                    />
            </View>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
            </>


        
        
        
  );
};

export default ApplicationInput;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',

    },
    action: {
        flexDirection: 'row',
        marginTop: windowHeight / 80,
        marginBottom: windowHeight / 90,
        marginLeft: windowWidth / 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,      
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },
  
});