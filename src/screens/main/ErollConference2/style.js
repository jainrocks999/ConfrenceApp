import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  container1: {flex: 1, paddingHorizontal: 10, backgroundColor: colors.white},
  text: {fontSize: 20, fontWeight: '400'},
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue,
    marginVertical: 10,
  },
  WhiteButton: {marginTop: 20},
  BlueButton: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 40,
    justifyContent: 'center',
  },

  lastView: {marginVertical: 20, alignItems: 'center'},
});
