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
import BlueButton from '../../../component/BlueButton';
import customText from '../../../component/customText';

let fill = [];
const ConferenceProfile = () => {
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
        <View style={styles.headView}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.profileBig}>
              <Image
                style={styles.profile}
                //source={require('../../../assets/icons/profile.png')}
              />
            </View>
            <View style={styles.cardView1}>
              <View style={styles.cardView2}>
                <Text style={styles.text1}>Collision</Text>
                <Icon name="share-variant" size={25} color="#000000" />
              </View>
              <Text style={{textAlign: 'left'}}>a tech Conference</Text>
              <View style={styles.cardView3}>
                <View>
                  <Text style={styles.text2}>9-12 Oct 2020</Text>
                </View>
                <View>
                  <Text style={{fontSize: 11}}>Enarcare center,Torronto</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card2}>
          <Text style={{fontSize: 16}}> About</Text>
          <Text>
            Collision from Home is “America's fastest growing tech conference”
            created by the team behind Web Summit, 23-25 June 2020. Join 450+
            speakers for over 100 ...
            <Text style={{color: 'blue'}}>more</Text>
          </Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.text3}>{'Theme'}</Text>

          <FlatList
            data={intrest}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{paddingHorizontal: 10}}>
                <Text style={{fontWeight: '400'}}>{item.title}</Text>
              </View>
            )}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 16}}>{'Keynote Speakers'}</Text>

          <FlatList
            style={{height: 300}}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.flatlistView}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.profileBig}>
                    <Image
                      style={styles.profile}
                      //source={require('../../../assets/icons/profile.png')}
                    />
                  </View>
                  <View style={styles.flatlistItemView}>
                    <View style={styles.flatlistItemView1}>
                      <Text style={styles.text4}>
                        Tedros Adhanom Ghebreyesus
                      </Text>
                    </View>
                    <Text style={{textAlign: 'left'}}>Director</Text>

                    <Text style={{textAlign: 'left'}}>
                      World Health Organization
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.lastView}>
          <Icon name="heart" size={25} color="#000000" />
          <Icon name="share-variant" size={25} color="#000000" />
        </View>
        <View style={styles.BlueButton}>
          <BlueButton
            onPress={() => {
              navigation.navigate('ErollConference');
            }}
            title={customText.Enroll}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default ConferenceProfile;

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
