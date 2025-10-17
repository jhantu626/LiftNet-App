import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import {
  JobCard,
  LocationInput,
  PrimaryBar,
  PrimaryHeader,
  SearchInput,
} from './../../Components';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors } from '../../utils/colors';
import { Text } from 'react-native-gesture-handler';
import SimpleLineIcons from '@react-native-vector-icons/simple-line-icons';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../utils/fonts';

const Home = () => {
  // NAVIGATION
  const navigation = useNavigation();

  // STATE VARIABLES
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const navigateToSearch = name => {
    navigation.navigate('Search', { name });
  };

  return (
    <Layout>
      <PrimaryHeader />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.topSearchContainer}
            onPress={() => {
              navigateToSearch('Search');
            }}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color={colors.placeholder}
            />
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
          <PrimaryBar marginVertical={0} />
          <TouchableOpacity
            style={styles.topSearchContainer}
            onPress={() => {
              navigateToSearch('Location');
            }}
          >
            <SimpleLineIcons
              name="location-pin"
              size={24}
              color={colors.placeholder}
            />
            <Text style={styles.searchText}>Location</Text>
          </TouchableOpacity>
        </View>

        <PrimaryBar />

        <View style={styles.searchTitle}>
          <Text style={styles.jobsTitleText}>Jobs For You</Text>
          <Text style={styles.jobsSubTitleText}>
            Jobs based on your activity
          </Text>
        </View>

        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={styles.jobContainer}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(_, index) => 'jobcard-' + index}
          renderItem={(item, index) => <JobCard />}
        />
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
  searchText: {
    color: colors.placeholder,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  searchTitle: {
    paddingHorizontal: 10,
    gap: 2,
  },
  jobsTitleText: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: fonts.bold,
  },
  jobsSubTitleText: {
    fontSize: 16,
    fontWeight: fonts.regular,
     marginBottom: 4,
  },
  jobContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 10,
  },
});

export default Home;
