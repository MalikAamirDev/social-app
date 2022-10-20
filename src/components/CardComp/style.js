import {StyleSheet} from 'react-native';
import theme from '../../app/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerBox: {
    flexDirection: 'row',
  },
  profileStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  titleBox: {
    paddingLeft: 20,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.TITLE_COLOR,
  },
  subTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.TEXT_COLOR,
  },
  description: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TEXT_COLOR,
    paddingVertical: 20,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    height: 380,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  bodyImg: {
    width: '100%',
    height: 380,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  footer: {
    paddingVertical: 10,
  },
  firstBox: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  userProfile: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#E0ECF2',
  },
  secondBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0ECF2',
    width: '88%',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputInnerBox: {
    flexDirection: 'row',
  },
});

export default styles;
