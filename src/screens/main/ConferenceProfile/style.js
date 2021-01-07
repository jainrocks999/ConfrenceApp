import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  container1: {flex: 1, paddingHorizontal: 10},
  headView: {
    marginTop: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  profileBig: {
    height: 60,
    width: 60,
    tintColor: colors.Icongrey,
    alignContent: 'center',
    backgroundColor: colors.Icongrey,
    borderRadius: 200,
  },
  profile: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: colors.grey,
  },
  cardView1: {marginLeft: 10, width: '75%'},
  cardView2: {flexDirection: 'row', justifyContent: 'space-between'},
  text1: {fontSize: 20, textAlign: 'left'},
  cardView3: {
    marginTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text2: {fontSize: 11, fontWeight: 'bold'},
  card2: {borderBottomWidth: 0.5, paddingVertical: 10},
  text3: {fontSize: 16, fontWeight: '500'},
  flatlistView: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  flatlistItemView: {marginLeft: 10, width: '70%'},
  flatlistItemView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text4: {fontSize: 16, textAlign: 'left'},

  lastView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  BlueButton: {width: '50%', alignSelf: 'center', marginTop: 10},
});
