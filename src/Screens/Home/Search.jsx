import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Layout from '../Layout/Layout';
import { SecondaryHeader } from '../../Components';
import { useRoute } from '@react-navigation/native';

const Search = () => {
  // NAVIGATION
  const route = useRoute();
  console.info(route);
  const { name } = route.params;
  return (
    <Layout>
      <SecondaryHeader title={`${name}`} />
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Search;
