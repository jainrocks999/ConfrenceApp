import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  header: {height: 40, width: '100%', backgroundColor: colors.orange},
  imageBackground: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'center',
  },
  logoContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {justifyContent: 'center', alignItems: 'center'},
  or: {marginVertical: 20, textAlign: 'center'},
  WhiteButton: {width: '50%', marginTop: 20},
});
