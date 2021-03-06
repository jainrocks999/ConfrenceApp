import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
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
let fill = [];
const favoriteEvents = () => {
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
        <Text style={styles.text}>Favorite Events</Text>
        <FlatList
          data={intrest}
          keyExtractor={(item, index) => index.toString()}
          //ItemSeparatorCo mponent={itemSeparator}
          //numColumns={2}
          //ItemSeparatorComponent={renderSeparator}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={{fontSize: 20}}>Conference Title</Text>
              <View style={styles.cardView1}>
                <Text style={styles.text1}>09-12 Oct 2020</Text>
                <Text style={styles.text2}>Indore</Text>
              </View>

              <View style={styles.cardView2}>
                <Text style={{fontSize: 16}}>Symposium</Text>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{marginHorizontal: 10}}
                    name="heart"
                    size={25}
                    color={colors.Icongrey}
                  />
                  <Icon
                    style={{marginHorizontal: 10}}
                    name="share-variant"
                    size={25}
                    color="#000000"
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>

      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default favoriteEvents;

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
