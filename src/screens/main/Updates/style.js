import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  container1: {flex: 1, paddingHorizontal: 10},

  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  text: {fontSize: 22, fontWeight: '400', marginTop: 15},
  flatlistView: {marginTop: 15, width: '50%'},
  flatlistItemView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
  textInputView: {
    height: '30%',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 10,
  },

  textInput: {width: '75%', alignSelf: 'center', padding: 10},

  text1: {fontSize: 16, fontWeight: 'bold'},
  cardView2: {
    marginTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text2: {fontSize: 16, fontWeight: 'bold', marginRight: 40},
  text3: {fontSize: 14, fontWeight: 'bold', marginTop: 35},
  cardView3: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {borderWidth: 1, height: 100, width: 100, borderRadius: 50},
  mainView: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.Darkgrey,
    padding: 5,
  },
  profileIcon: {
    height: 40,
    width: 40,
    tintColor: colors.Icongrey,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Icongrey,
    borderRadius: 20,
  },

  card: {
    marginTop: 15,
    backgroundColor: colors.grey,
    padding: 10,
  },
  profileBig: {
    height: 80,
    width: 80,
    tintColor: colors.Icongrey,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Icongrey,
    borderRadius: 200,
  },
  cardView1: {
    marginTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
