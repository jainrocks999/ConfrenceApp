import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  container1: {flex: 1, paddingHorizontal: 10},
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
  textInput: {width: '75%', alignSelf: 'center', padding: 10},
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 8,
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
  cardView1: {marginLeft: 10, width: '70%'},
  text1: {fontSize: 20, textAlign: 'left'},
  cardView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: 14,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  text3: {fontSize: 14, fontWeight: 'bold', marginTop: 35},
  cardView3: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
