import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

const Divider = ({style}: {style?: StyleProp<ViewStyle>}) => {
  return <View style={[styles.divider, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'black',
  },
});

export default Divider;
