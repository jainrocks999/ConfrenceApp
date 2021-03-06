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
import BlueButton from '../../../component/BlueButton';
import WhiteButton from '../../../component/WhiteButton';
import style from '../ConferenceProfile/style';

let fill = [];
const PaymentGateway = () => {
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
    <View style={{flex: 1, backgroundColor: colors.grey}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>Payment Gateway</Text>

          <View style={styles.view1}>
            <Text style={styles.text1}>Credit Card</Text>
            <Icon
              name="chevron-right"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
          </View>

          <View style={styles.view1}>
            <Text style={styles.text1}>Debit Card</Text>
            <Icon
              name="chevron-right"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
          </View>

          <View style={styles.view1}>
            <Text style={styles.text1}>Net Banking</Text>
            <Icon
              name="chevron-right"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
          </View>

          <View style={[styles.view1, {borderBottomWidth: 1}]}>
            <Text style={styles.text1}>UPI</Text>
            <Icon
              name="chevron-right"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomTab}>
        <Text style={styles.text2}>{'$249'}</Text>

        <View style={styles.BlueButton}>
          <BlueButton
            onPress={() => {
              navigation.navigate('PaymentConfirmation');
            }}
            title={customText.checkout}
          />
        </View>
      </View>

      <CustomStatusbar />
    </View>
  );
};

export default PaymentGateway;

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
