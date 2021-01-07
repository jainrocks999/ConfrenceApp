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
  mainView: {justifyContent: 'center', alignItems: 'center'},
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  InputText: {marginTop: 150, width: '100%'},

  BlueButton: {width: '50%', alignSelf: 'flex-end', marginTop: 10},
});
