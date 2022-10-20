import {Pressable} from 'react-native';
import React from 'react';
import theme from '../../app/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const IconBtn = ({IconComp}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.box,
        {
          backgroundColor: pressed ? theme.HOVER_COLOR : 'white',
        },
      ]}>
      {IconComp}
    </Pressable>
  );
};

export default IconBtn;
