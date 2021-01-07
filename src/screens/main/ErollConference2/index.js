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
const ErollConference2 = () => {
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
      <ScrollView style={styles.container1}>
        <TitleText style={{alignSelf: 'flex-start'}} />
        <Text style={styles.text}>13 days untill submission closes</Text>

        <Text style={styles.text1}>Submit a paper...</Text>

        <View style={styles.WhiteButton}>
          <WhiteButton title={customText.OralPresentation} onPress={() => {}} />
        </View>
        <View style={styles.WhiteButton}>
          <WhiteButton
            title={customText.PosterPresentation}
            onPress={() => {}}
          />
        </View>
        <View style={styles.WhiteButton}>
          <WhiteButton
            title={customText.VirtualPresentation}
            onPress={() => {}}
          />
        </View>
        <View style={styles.BlueButton}>
          <BlueButton
            onPress={() => {
              navigation.navigate('PaperSubmit');
            }}
            title={customText.submitAbstract}
          />
        </View>
        <View style={styles.lastView}>
          <Text style={styles.text1}>{customText.submitLater}</Text>
        </View>
      </ScrollView>
      <CustomStatusbar />
    </View>
  );
};

export default ErollConference2;

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
