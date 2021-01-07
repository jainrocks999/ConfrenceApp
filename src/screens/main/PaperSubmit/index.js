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
const PaperSubmit = () => {
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
        <Text style={styles.text}>Present an Oral Presentation</Text>

        <InputText placeholder="Title of Paper" style={styles.textInput} />

        <View style={styles.textInputView}>
          <InputText placeholder="Authors" style={styles.textInput1} />
          <Icon
            name="plus"
            style={{marginTop: 10}}
            size={35}
            color={colors.Icongrey}
          />
        </View>

        <View style={styles.textInputView1}>
          <View style={styles.iconView}>
            <Icon
              name="format-bold"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
            <Icon
              name="format-italic"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
            <Icon
              name="format-align-left"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
            <Icon
              name="format-align-right"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
            <Icon
              name="format-indent-increase"
              style={{marginRight: 10}}
              size={25}
              color={colors.black}
            />
          </View>
          <TextInput
            placeholder="Authors"
            placeholderTextColor={colors.black}
            style={styles.bigTextView}
          />
        </View>

        <InputText placeholder="Keywords" style={styles.textInput2} />
        <TouchableOpacity style={styles.attachment}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="attachment"
              style={{marginRight: 10, marginHorizontal: 10}}
              size={25}
              color={colors.black}
            />
            <Text style={styles.text2}>Upload Attachments</Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Save a Draft</Text>
          <View style={styles.BlueButton}>
            <BlueButton
              onPress={() => {
                navigation.navigate('ReviewSubmission');
              }}
              title={customText.submit}
            />
          </View>
        </View>
      </ScrollView>
      <CustomStatusbar />
    </View>
  );
};

export default PaperSubmit;

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
