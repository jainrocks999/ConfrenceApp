import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  container1: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  checkmark: {justifyContent: 'center', alignItems: 'center'},
  checkmarkImage: {height: 150, width: 150},
  text1: {fontWeight: '400', fontSize: 20, marginVertical: 10},
  text2: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
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
    width: '90%',
    alignSelf: 'center',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: colors.Darkgrey,
  },

  paperText: {
    alignSelf: 'center',
    padding: 10,

    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
});
