import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';

const PrimaryBar = ({
  width = '100%',
  height = 1,
  marginVertical=10,
  backgroundColor = colors.placeholder,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          marginVertical: marginVertical
        },
      ]}
    />
  );
};

export default PrimaryBar;

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
  },
});
