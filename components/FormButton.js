import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useFormikContext } from 'formik';

const FormButton = ({buttonStyle, textStyle, buttonTitle, ...rest}) => {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity onPress={handleSubmit} style={buttonStyle} {...rest}>
      <Text style={textStyle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
