import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { fonts } from './../../utils/fonts';
import Layout from '../Layout/Layout';
import {
  Input,
  LocationInput,
  PrimaryHeader,
  SearchInput,
} from './../../Components';

const Home = () => {
  return (
    <Layout>
      <PrimaryHeader />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          <SearchInput />
          <LocationInput />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 10,
  },
});

export default Home;
