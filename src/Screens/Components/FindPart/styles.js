import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImg: {
    height: height / 3.2,
  },
  watermark: {
    display: 'flex',
    width: Platform.OS === 'ios' ? width / 2.5 : width / 2.8,
    height: Platform.OS === 'ios' ? height / 1.15 : height / 1.25,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  safeview: {
    flex: 1,
    // margin: 15,
    alignItems: 'center',
  },
  dotMain: {
    display: 'flex',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: -(height / 28),
    paddingRight: 30,
  },
  dotStyle: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderRadius: 50,
    marginHorizontal: 3,
  },
  select: {
    flex: 1,
    margin: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlContainer: {
    borderRadius: 4,
    marginHorizontal: 0,
    marginVertical: 13,
    padding: 4,
    backgroundColor: '#6e757c',
  },
  partInput: {
    borderRadius: 4,
    borderWidth: 4,
    marginHorizontal: 0,
    width: width * 0.8,
    borderColor: '#6e757c',
    padding: 3,
    height: 45,
    backgroundColor: 'white',
  },
  refTxt: {
    marginTop: 13,
    fontFamily: 'EurostileBQ-Regular',
  },
  ORtxt: {
    fontFamily: 'EurostileBQ-Regular',
    textAlign: 'center',
    fontSize: width / 12,
    fontWeight: '900',
    color: '#1b7139',
  },
});

export default styles;
