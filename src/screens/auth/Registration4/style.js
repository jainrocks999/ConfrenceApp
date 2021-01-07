import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  text: {fontSize: 16, fontWeight: 'bold', marginTop: 15},
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

  textInput: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
  },

  BlueButton: {width: '50%', alignSelf: 'flex-end', marginTop: 10},
});
