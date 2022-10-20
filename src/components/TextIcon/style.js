import {StyleSheet} from 'react-native';
import theme from '../../app/theme';

const styles = StyleSheet.create({
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TEXT_COLOR,
    paddingHorizontal: 5,
  },
});

export default styles;
