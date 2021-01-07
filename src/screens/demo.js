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
let fill = [];
const demo = () => {
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
    <View style={{flex: 1, backgroundColor: '#e1ed87'}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <CustomText
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 50,
            textAlign: 'center',
          }}
          title={'Choose your persona'}
        />
        <CustomText
          style={{
            fontSize: 14,
            marginTop: 10,
            textAlign: 'center',
          }}
          title={'( You can select multiple personas )'}
        />

        <View
          style={{
            marginTop:20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <FlatList
            
            data={intrest}
            keyExtractor={(item, index) => index.toString()}
            //ItemSeparatorCo mponent={itemSeparator}
            numColumns={2}
            renderItem={({item}) => (
              <View
                style={{
                  flexL:1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding:10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                  alignItems: 'center',
                    width:90,
                    height:90,
                    padding: 10,
                    borderRadius: 8,
                    backgroundColor: 'white',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 2,
                    elevation: 6,
                  }}>
                  <Image 
                  style={{alignSelf:'center',height:40,width:40}}
                  source={require('../assets/icons/store.png')} />
                  <Text style={{fontSize: 10,marginTop:8,textAlign:'center'}}>{item.title}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <CustomButton1
          onPress={() => {
            navigation.navigate('Demo1');
          }}
          style={{width: '65%',height:35,borderRadius:10, alignSelf: 'center',backgroundColor:colors.textGrey,marginTop:35}}
          title="NEXT"
          textStyle={{color:colors.white}}
        />
      </View>

      <StatusBar backgroundColor='#e1ed87' barStyle="dark-content" />
      
    </View>
  );
};

export default demo;

const intrest = [
  {
    id: 1,
    title: 'Online Store',
  },
  {
    id: 2,
    title: 'Visiting Vender',
  },
  {
    id: 3,
    title: 'Resident',
  },
  {
    id: 3,
    title: 'Professional',
  },
];
