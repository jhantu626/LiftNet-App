import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { fonts } from './../../utils/fonts';
import Layout from '../Layout/Layout';
import { PrimaryHeader } from './../../Components';

const Home = () => {
  return ( 
    <Layout>
      <PrimaryHeader />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
       
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Home;
