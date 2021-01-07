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
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import {useDispatch, useSelector} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
// import AsyncStorage from '@react-native-community/async-storage';
// import storage from '../../../component/storage';
import CustomText from '../../../component/text';
import TitleText from '../../../component/TitleText';
import InputText from '../../../component/TextInput';
import CustomButton1 from '../../../component/button1';
import CustomStatusbar from '../../../component/StatusBar';
import BlueButton from '../../../component/BlueButton';
import customText from '../../../component/customText';

const Registration3 = () => {
  const navigation = useNavigation();
  const [Subject, setSubject] = useState('');
  const [Name, setName] = useState('');
  //   const [Username, setUsername] = useState('');
  //   const [Email, setEmail] = useState('');
  //   const [Password, setPassword] = useState('');
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

  const doValidate = async () => {
    if (Name == '') {
      SimpleToast.show('Please Enter Name ');
    } else if (Subject == '') {
      SimpleToast.show('Please enter Subject');
    } else {
      navigation.navigate('Registration4');
    }
  };

  return (
    <View style={{flex: 1}}>
      <CustomStatusbar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View
          style={{
            flex: 1,
          }}>
          <TitleText />
          <View style={styles.logoContainer}>
            <Image style={styles.logo} />
          </View>

          <View style={styles.mainView}>
            <InputText
              style={styles.InputText}
              placeholder={customText.UserName}
              onChangeText={(text) => setName(text)}
            />
            <InputText
              style={styles.InputText}
              placeholder="Your core subject"
              onChangeText={(text) => setSubject(text)}
            />

            <View style={styles.BlueButton}>
              <BlueButton onPress={doValidate} title={customText.BtnNEXT} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Registration3;
