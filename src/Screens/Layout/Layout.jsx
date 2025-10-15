import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.screenBackground }}>
      <StatusBar barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({});
