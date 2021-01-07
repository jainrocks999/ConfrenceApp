import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../colors';

export default (CustomStatusBar) => {
  return <StatusBar barStyle="dark-content" backgroundColor={colors.white} />;
};
