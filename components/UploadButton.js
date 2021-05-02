import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { windowHeight, windowWidth } from '../utils/Dimension';

function UploadButton({color, uploadbuttonTitle, ...rest}) {
  return (
    <TouchableOpacity style={[{backgroundColor:color},styles.container]} {...rest}>
      <Text style={styles.caption}>{uploadbuttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:5,
    marginHorizontal:10,
    width: windowWidth / 4,
    height: windowHeight / 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,

  },
  caption: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  }
});

export default UploadButton;
