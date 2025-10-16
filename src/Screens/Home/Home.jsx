import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import {
  LocationInput,
  PrimaryBar,
  PrimaryHeader,
  SearchInput,
} from './../../Components';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors } from '../../utils/colors';
import { Text } from 'react-native-gesture-handler';
import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons';

const Home = () => {
  // STATE VARIABLES
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  return (
    <Layout>
      <PrimaryHeader />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.topSearchContainer}>
            <Ionicons
              name="search-outline"
              size={24}
              color={colors.placeholder}
            />
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
          <PrimaryBar marginVertical={0} />
          <TouchableOpacity style={styles.topSearchContainer}>
            <SimpleLineIcons
              name="location-pin"
              size={24}
              color={colors.placeholder}
            />
            <Text style={styles.searchText}>Location</Text>
          </TouchableOpacity>
        </View>

        <PrimaryBar />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 10,
    gap: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.placeholder,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topSearchContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    // backgroundColor: colors.primaryBackgorund,
    borderRadius: 10,
  },
  searchText:{
    color: colors.placeholder,
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  }
});

export default Home;
