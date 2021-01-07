import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {borderWidth: 1, height: 100, width: 100, borderRadius: 50},
  mainView: {justifyContent: 'center', alignItems: 'center'},

  InputText: {borderColor: colors.black, marginVertical: 10},
  BlueButton: {width: '50%', alignSelf: 'flex-end', marginTop: 10},
});
