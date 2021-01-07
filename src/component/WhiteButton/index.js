import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../colors';

export default Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button2, props.style]}
      onPress={props.onPress}>
      <Text style={styles.buttonText2}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button2: {
    borderWidth: 2,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderColor: colors.blue,
    borderRadius: 8,
  },
  buttonText2: {fontSize: 18, fontWeight: 'bold', color: colors.blue},
});
