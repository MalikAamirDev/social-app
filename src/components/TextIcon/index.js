import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../../app/theme';
import styles from './style';

const TextIcon = ({iconComp, name}) => {
  return (
    <Pressable style={styles.iconBox}>
      {iconComp}
      <Text style={styles.iconText}>{name}</Text>
    </Pressable>
  );
};

export default TextIcon;
