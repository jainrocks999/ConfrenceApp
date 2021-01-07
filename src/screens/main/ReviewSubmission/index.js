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

let fill = [];
const ReviewSubmission = () => {
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
      <ScrollView style={styles.container1}>
        <Text style={styles.text}>Submission</Text>

        <View style={styles.cardView1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={styles.paperButton}>
            <Text style={styles.paperText}>Paper</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.text1}>Title</Text>
          <Text style={styles.text2}>
            Can voilent games can affect aggression
          </Text>
          <Text style={styles.text1}>Authors</Text>
          <Text style={styles.text2}>Astha Sharma</Text>
          <Text style={styles.text1}>Abstract</Text>
          <Text style={styles.text2}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          </Text>
          <Text style={styles.text1}>Keywords</Text>
          <Text style={styles.text2}>
            {'Aggressiveness,video games,voilance'}
          </Text>
          <Text style={styles.text1}>Subbmission format</Text>
          <Text style={styles.text2}>{'Oral'}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomTab}>
        <View style={styles.iconView}>
          <Icon name="pencil-outline" size={25} color={colors.black} />
          <Text style={styles.text3}>Edit</Text>
        </View>
        <View style={styles.iconView}>
          <Icon name="delete" size={25} color={colors.black} />
          <Text style={styles.text3}>Delete</Text>
        </View>

        <View style={styles.BlueButton}>
          <BlueButton
            onPress={() => {
              navigation.navigate('PaymentGateway');
            }}
            title={customText.submit}
          />
        </View>

        <View style={styles.iconView}>
          <Icon name="contact-support" size={25} color={colors.black} />
          <Text style={styles.text3}>Withdraw</Text>
        </View>
        <View style={styles.iconView}>
          <Icon name="contact-support" size={25} color={colors.black} />
          <Text style={styles.text3}>Contact</Text>
          <Text style={{fontSize: 12}}>Organiser</Text>
        </View>
      </View>

      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default ReviewSubmission;

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
