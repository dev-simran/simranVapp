import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainBack: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
  },
  main: {
    height: '90%',
    width: '100%',
    padding: 15,
  },
  sec1: {
    width: '20%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec2: {
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
    height: 50,
    width: 50,
    borderRadius: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    marginLeft: '-20%',
  },
  seachSection: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(90, 90, 90, 0.6)',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 12,
  },
  citySection: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(90, 90, 90, 0.6)',
    marginTop: 18,
    borderRadius: 12,
    padding: 10,
  },
  seachView: {
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  searchIconSec: {
    width: '20%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
  },
  cityTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  weatherSec: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  subTitle: {
    fontSize: 18,
    marginLeft: '5%',
    color: '#fff',
  },
});

export default styles;
