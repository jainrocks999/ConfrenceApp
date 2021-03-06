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

import CustomText from '../../../component/text';
import TitleText from '../../../component/TitleText';
import InputText from '../../../component/TextInput';
import CustomButton1 from '../../../component/button1';
import SimpleToast from 'react-native-simple-toast';
import customText1 from '../../../component/customText';
import BlueButton from '../../../component/BlueButton';
import customText from '../../../component/customText';
import CustomStatusbar from '../../../component/StatusBar';

let fill = [];
const Registration4 = () => {
  const navigation = useNavigation();
  //   const [Username, setUsername] = useState('');
  //   const [Email, setEmail] = useState('');
  //   const [Password, setPassword] = useState('');
  //   const [Name, setName] = useState('');
  //   const [LastName, setLastName] = useState('');
  //   const dispatch = useDispatch();
  //   const isFetching = useSelector((state) => state.isFetching);

  //   useEffect(() => {});

  //   const doRegister = async () => {
  //     const Password = await AsyncStorage.getItem(storage.Password);

  //     if (Username == '') {
  //       Toast.show('Please Enter Username');
  //     } else if (Email == '') {
  //       Toast.show('Please Enter Email');
  //     } else if (Password == '') {
  //       Toast.show('Please Enter Password');
  //     } else if (Name == '') {
  //       Toast.show('Please Enter Name');
  //     } else if (LastName == '') {
  //       Toast.show('Please Enter LastName');
  //     } else {
  //       dispatch({
  //         type: 'User_Register_Request',
  //         url: 'v1/user/register',
  //         Username,
  //         Email,
  //         Password,
  //         Name,
  //         LastName,
  //         props: navigation,
  //       });
  //     }
  //   };

  const [isShowingText, setIsShowingText] = useState('hey');

  const loadsearch = (text) => {
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

  return (
    <View style={{flex: 1}}>
      <CustomStatusbar />

      <ScrollView contentContainerStyle={styles.scroll}>
        <TitleText />
        <CustomText style={{fontSize: 18}} title={'Welcome Full Name'} />
        <CustomText
          style={styles.text}
          title={'Please choose your other intrests'}
        />
        <View>
          <FlatList
            data={intrest}
            keyExtractor={(item, index) => index.toString()}
            //ItemSeparatorCo mponent={itemSeparator}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.flatlistView}>
                <View style={styles.flatlistItemView}>
                  <Text>{item.title}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="NeuroSearch"
            placeholderTextColor={colors.black}
            style={styles.textInput}
            onChangeText={(search) => {
              loadsearch(search);
            }}
          />
        </View>

        <View style={styles.BlueButton}>
          <BlueButton
            onPress={() => {
              navigation.navigate('Home');
            }}
            title={customText.BtnNEXT}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Registration4;

const intrest = [
  {
    id: 1,
    title: 'Psychology',
  },
  {
    id: 2,
    title: 'psychiatry',
  },
  {
    id: 3,
    title: 'Social Work',
  },
];
