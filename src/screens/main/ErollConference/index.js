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
import TitleText from '../../../component/TitleText';
import CustomButton1 from '../../../component/button1';
import SimpleToast from 'react-native-simple-toast';

import CustomStatusbar from '../../../component/StatusBar';
import customText from '../../../component/customText';
import BlueButton from '../../../component/BlueButton';
import WhiteButton from '../../../component/WhiteButton';

let fill = [];
const ErollConference = () => {
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
      <CustomStatusbar />
      <View style={styles.container1}>
        <TitleText style={{alignSelf: 'flex-start'}} />
        <Text style={styles.text}>ENROLL AS</Text>
        <View style={styles.WhiteButton}>
          <WhiteButton title={customText.Presenter} onPress={() => {}} />
        </View>
        <View style={styles.WhiteButton}>
          <WhiteButton title={customText.Participant} onPress={() => {}} />
        </View>

        <View
          style={{
            alignSelf: 'flex-end',
            marginVertical: 20,
          }}>
          <Text style={styles.text1}>See All Charges</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text2}>{'$249'}</Text>

        <View style={styles.BlueButton}>
          <BlueButton
            onPress={() => {
              navigation.navigate('ErollConference2');
            }}
            title={customText.pay}
          />
        </View>
      </View>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default ErollConference;

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
