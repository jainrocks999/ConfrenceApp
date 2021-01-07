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

import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../component/header';
import colors from '../component/colors';
import {useDispatch, useSelector} from 'react-redux';
import CustomText from '../component/text';
import TitleText from '../component/TitleText';
import InputText from '../component/TextInput';
import CustomButton1 from '../component/button1';
import SimpleToast from 'react-native-simple-toast';
import OTPTextInput from 'react-native-otp-textinput'
let fill = [];
const demo2 = () => {
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

  renderItem = (item) => {
    //console.log('itemm',item);
    return (
      <View style={{marginTop: 15, width: '50%'}}>
        <CustomButton1
          style={{width: '93%', alignItems: 'space-between'}}
          title={item.title}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          flex: 0.3,
          alignItems: 'center',
          backgroundColor: '#e1ed87',
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', marginVertical: 50}}>
          LOGO
        </Text>
        <Text style={{fontSize: 16, marginBottom: 20, fontWeight: '500'}}>
          Login
        </Text>
      </View>
      <View
        style={{
          flex: 0.7,
          marginHorizontal: 30,
        }}>
        <CustomText
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 40,
          }}
          title={'Enter OTP'}
        />
 <OTPTextInput ref={e => (otpInput = e)} 
 textInputStyle={{borderWidth:1,borderColor:'#000000'}}
 containerStyle={{marginTop:15}}
 defaultValue={'*'}
 />
 <Text style={{textAlign:'center',marginTop:15}} >
Enter the OTP sent to your mobile number. We are here to secure your login details.

 </Text>
        {/* <View style={{flexDirection:'row'}}>

        <TextInput
          style={{
            alignSelf: 'center',
            width:40,
            height: 40,
            marginTop: 10,
            backgroundColor: colors.white,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: colors.Darkgrey,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.6,
            shadowRadius: 2,
            elevation: 6,
          }}
          placeholder={'*'}
          placeholderTextColor={colors.black}
          />
          </View> */}

        <CustomButton1
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            width: '100%',
            height: 35,
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: colors.textGrey,
            marginTop: '45%',
          }}
          title="Verify"
          textStyle={{color: colors.white}}
        />
      </View>

      <StatusBar backgroundColor="#e1ed87" barStyle="dark-content" />
    </View>
  );
};

export default demo2;
