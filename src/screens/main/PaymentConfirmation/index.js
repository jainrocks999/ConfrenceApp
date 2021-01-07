import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  BackHandler,
  ScrollView,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import {useDispatch, useSelector} from 'react-redux';
//import Toast from 'react-native-simple-toast';
// import AsyncStorage from '@react-native-community/async-storage';
// import storage from '../../../component/storage';
import CustomText from '../../../component/text';
import TitleText from '../../../component/TitleText';
import InputText from '../../../component/TextInput';
import CustomButton1 from '../../../component/button1';
import SimpleToast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import CustomStatusbar from '../../../component/StatusBar';
import customText from '../../../component/customText';

let fill = [];
const PaymentConfirmation = () => {
  const navigation = useNavigation();

  const [isShowingText, setIsShowingText] = useState('hey');

  loadsearch = (text) => {
    intrest = fill;
    setIsShowingText(text);
    const newData = intrest.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    fill = newData;

    if (newData == '') {
      SimpleToast.show('No item found');
      //return <Text style={{fontSize: 15}}>{'no item found'}</Text>;
    }
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: colors.white,
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <Text style={styles.text}>Payment Successful</Text>
        </View>

        <View style={styles.checkmark}>
          <Image
            style={styles.checkmarkImage}
            source={require('../../../assets/icons/check.png')}
          />
        </View>
        <Text style={styles.text1}>$399</Text>
        <Text
          style={
            styles.text2
          }>{`Your payment is complete\nplease check your schedule and\nother information at status pages`}</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Homee');
          }}
          style={styles.paperButton}>
          <Text style={styles.paperText}>Go to Homepage</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default PaymentConfirmation;

const intrest = [
  {
    id: 1,
    title: 'Explore our content themes',
  },
  {
    id: 2,
    title: 'Marketing and media',
  },
  {
    id: 3,
    title: 'Society',
  },
  {
    id: 1,
    title: 'Developers and data',
  },
  {
    id: 2,
    title: 'Commerce',
  },
  {
    id: 3,
    title: 'Business development',
  },
  {
    id: 3,
    title: 'Lifestyle',
  },
];
const data = [
  {
    id: 1,
    title: 'Explore our content themes',
  },
  {
    id: 2,
    title: 'Marketing and media',
  },
  {
    id: 3,
    title: 'Society',
  },
];
