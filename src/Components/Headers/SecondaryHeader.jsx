import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { fonts } from '../../utils/fonts';

const SecondaryHeader = ({ title = 'HOME' }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default SecondaryHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  back: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  titleText: {
    fontSize: 20,
    fontWeight: fonts.medium,
  },
});
