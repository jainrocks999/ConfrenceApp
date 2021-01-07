import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../colors';

export default Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button1, props.style]}
      onPress={props.onPress}>
      <Text style={styles.buttonText1}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    height: 50,
    width: '100%',

    backgroundColor: colors.blue,
    opacity: 87,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText1: {
    alignSelf: 'center',
    color: colors.black,
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
});
