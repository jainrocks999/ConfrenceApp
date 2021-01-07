import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  container1: {flex: 1, paddingHorizontal: 10, backgroundColor: colors.white},
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.blue,
    marginVertical: 30,
  },
  WhiteButton: {marginTop: 20},
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  text2: {fontSize: 25, color: colors.Icongrey, fontWeight: '700'},

  BlueButton: {width: '50%', alignSelf: 'center', marginTop: 10},
});
