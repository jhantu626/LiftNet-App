import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { fonts } from './../../utils/fonts';
import Layout from '../Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Text style={fonts.h1}>Home</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Home;
