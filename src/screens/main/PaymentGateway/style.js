import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  container1: {
    backgroundColor: colors.midGrey,
    marginTop: 10,
    padding: 10,
    borderRadius: 25,
    flex: 0.98,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 20,
  },

  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    padding: 10,
  },
  bottomTab: {
    flexDirection: 'row',
    backgroundColor: colors.Darkgrey,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },

  text1: {fontWeight: '400', fontSize: 18},
  text2: {fontSize: 22, color: colors.Icongrey, fontWeight: '700'},

  paperButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    height: 50,

    opacity: 87,
    justifyContent: 'center',

    borderRadius: 5,
    width: '40%',
    alignItems: 'flex-start',
    marginRight: 10,
    backgroundColor: colors.Icongrey,
  },

  paperText: {
    color: colors.white,
    alignSelf: 'flex-start',
    padding: 10,

    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },

  lastView: {marginVertical: 20, alignItems: 'center'},
  flatlistView: {marginTop: 15, width: '50%'},
  flatlistItemView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
  textInputView: {flexDirection: 'row', alignItems: 'center'},
  textInputView1: {borderWidth: 1, marginTop: 10},
  iconView: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigTextView: {
    borderColor: colors.black,
    height: 250,
  },

  textInput: {
    backgroundColor: colors.grey,
    width: '95%',
    borderColor: colors.black,
    borderWidth: 1,
  },
  textInput1: {
    width: '85%',
    backgroundColor: colors.grey,
    borderColor: colors.black,
    borderWidth: 1,
  },
  textInput2: {
    backgroundColor: colors.grey,
    width: '90%',
    borderColor: colors.black,
    borderWidth: 1,
  },

  attachment: {
    marginTop: 20,
    borderWidth: 2,
    width: '90%',
    padding: 10,
    borderColor: colors.black,
    borderRadius: 8,
    borderStyle: 'dotted',
    backgroundColor: colors.grey,
  },

  cardView2: {
    marginTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text3: {fontSize: 12, marginTop: 8},
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
    backgroundColor: colors.midGrey,
    marginTop: 10,
    padding: 10,
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
    backgroundColor: colors.Darkgrey,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  WhiteButton: {marginTop: 20},
  BlueButton: {
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
