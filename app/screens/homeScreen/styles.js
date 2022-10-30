import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainBack: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  main: {
    height: '90%',
    width: '100%',
    padding: 15,
  },
  addCity: {
    width: '25%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentCity: {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings: {
    width: '25%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
    width: 50,
    height: 50,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
  },
  highlight: {
    height: '30%',
    display: 'flex',
    alignItems: 'center',
  },
  weekList: {
    height: '20%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'scroll',
  },
  otherDetails: {
    height: '40%',
  },
  fdayForcast: {
    height: '8%',
    backgroundColor: '#FF9300',
    borderRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  todaysTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  todaysTempTitle: {
    fontSize: 52,
    color: '#fff',
    fontWeight: '600',
  },
  tempIcon: {
    marginTop: 10,
  },
  mainWeather: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  sec1: {
    height: '45%',
    backgroundColor: 'rgba(90, 90, 90, 0.4)',
    borderRadius: 10,
    padding: 10,
  },
  sec2: {
    height: '45%',
    backgroundColor: 'rgba(90, 90, 90, 0.4)',
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
  },
  fdayTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  tommorowRep: {
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
  },
  tommorowRep1: {
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
  },

  tommRepSec: {
    height: '100%',
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempSec: {
    width: '30%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  repSecTitle: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
  },
  moreInfo1: {
    height: '50%',
  },
  infoTitles: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },
  moreInfo2: {
    height: '50%',
  },
  weatherCard: {
    height: '100%',
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniTitles: {
    fontSize: 14,
    color: '#fff',
  },
  infoVals: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;
