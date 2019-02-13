import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  itemLeft: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRight: {
    flex: 1,
  },
  name: {
    marginLeft: 10,
  },
  nameTxt: {
    fontSize: 18,
  },
  btnFollow: {
    alignItems: 'center',
  },
  btnFollowTxt: {
    color: '#FFF',
    backgroundColor: '#1449BF',
    width: 90,
    paddingVertical: 3,
    textAlign: 'center',
  },
});

export default styles;
