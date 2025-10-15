import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import Ionicons from '@react-native-vector-icons/ionicons';

const PrimaryHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.notificationBtn}>
        <Ionicons name="notifications-outline" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
  },
  notificationBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 30,
    resizeMode: 'contain'
  },
});

export default PrimaryHeader;
