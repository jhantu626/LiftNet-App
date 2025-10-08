import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Input = ({
  width = '100%',
  height = '40',
  backgroundColor = '#ffffff',
  otherStyles = {},
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        },
        otherStyles,
      ]}
    >
      <Text>Input</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Input;
