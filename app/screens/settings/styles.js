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
    height: '10%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    height: '90%',
    width: '100%',
    padding: 25,
  },
  card: {
    height: 70,
    width: '100%',
    marginTop: 10,
  },
  wrapper: {
    height: '60%',
    width: 130,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#FF9300',
    borderRadius: 5,
  },
  sec1: {
    width: '50%',
    height: '100%',
    backgroundColor: '#FF9300',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec2: {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '700',
  },
  miniTitle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },
});

export default styles;
