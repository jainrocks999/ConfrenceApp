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

let fill = [];
const Home = () => {
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

  return (
    <View style={styles.container}>
      <CustomStatusbar />
      <View style={styles.container1}>
        <View style={styles.mainView}>
          <View style={styles.header}>
            <TitleText style={{alignSelf: 'flex-start'}} />
            <View style={{flexDirection: 'row'}}>
              <Icon
                onPress={() => {
                  navigation.toggleDrawer();
                }}
                name="egg-outline"
                size={30}
                color={colors.textGrey}
              />
              <Icon
                onPress={() => {
                  navigation.toggleDrawer();
                }}
                name="bell-outline"
                size={30}
                color={colors.textGrey}
              />
            </View>
          </View>

          <View style={styles.searchInput}>
            <Icon
              onPress={() => {
                navigation.toggleDrawer();
              }}
              name="menu"
              size={30}
              color={colors.textGrey}
            />

            <TextInput
              placeholder="Search"
              placeholderTextColor={colors.black}
              style={styles.textInput}
              onChangeText={(search) => {
                this.loadsearch(search);
              }}
            />

            <TouchableOpacity style={styles.profileIcon}>
              <Icon1
                onPress={() => {
                  navigation.toggleDrawer();
                }}
                name="user-circle"
                size={30}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={intrest}
            keyExtractor={(item, index) => index.toString()}
            //ItemSeparatorCo mponent={itemSeparator}
            //numColumns={2}
            //ItemSeparatorComponent={renderSeparator}
            renderItem={({item}) => (
              <View style={styles.card}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.profileBig}>
                    <Image
                      style={{
                        tintColor: colors.grey,
                      }}
                      //source={require('../../../assets/icons/profile.png')}
                    />
                  </View>
                  <View style={styles.cardView1}>
                    <Text style={styles.text1}>
                      31st International neurotoxin association{' '}
                    </Text>

                    <View style={styles.cardView2}>
                      <Text style={styles.text2}>Monteral, Canada</Text>
                      <Icon
                        style={{marginTop: 10}}
                        name="plus-circle"
                        size={45}
                        color={colors.textGrey}
                      />
                    </View>
                  </View>
                </View>

                <View style={{marginTop: 15}}>
                  <Text style={{fontSize: 16}}>Department of Neorology</Text>
                  <Text>Gandhi Medical college, Indore</Text>
                  <Text style={styles.text3}>09-12 Oct 2020</Text>
                </View>

                <View style={styles.cardView3}>
                  <Text style={{fontSize: 14}}>Symposium</Text>
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
      </View>
    </View>
  );
};

export default Home;

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
