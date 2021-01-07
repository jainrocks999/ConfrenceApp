import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  container1: {flex: 1, paddingHorizontal: 10},

  text: {fontSize: 22, fontWeight: '400', marginTop: 15},
  card: {
    marginTop: 15,
    backgroundColor: colors.grey,
    padding: 10,
  },
  cardView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  text1: {fontSize: 16, fontWeight: 'bold'},
  text2: {fontSize: 16, fontWeight: 'bold', marginRight: 40},
  cardView2: {
    marginTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
