import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { fonts } from '../../utils/fonts';

const JobCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContaienr}>
        <Text style={styles.topTag}>New</Text>
        <Text style={styles.jobTitle} numberOfLines={1}>
          Junior Software Developer
        </Text>
        <Text style={styles.companyText} numberOfLines={1}>
          {' '}
          Turain Software Private Limited
        </Text>
        <Text style={styles.locationText} numberOfLines={1}>
          {' '}
          Kolkata, WestBengal
        </Text>
        <View style={styles.tagsContainer}>
          {['$5000-$6000 per month','Full Time', 'Day Shift', ].map(
            (item, index) => (
              <Text style={styles.tagsText}>{item}</Text>
            ),
          )}
        </View>

        <View style={styles.applyBtn}>
          <FontAwesome name="location-arrow" size={24} color={colors.primary} />
          <Text>Easy Apply</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <FontAwesome name="bookmark-o" size={24} color={'#000'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1.2,
    borderColor: '#dbdbdb',
    borderRadius: 10,
  },
  leftContaienr: {
    flex: 1,
    paddingRight: 10,
    gap: 0,
  },
  topTag: {
    maxWidth: 50,
    backgroundColor: '#EEF1FF',
    padding: 5,
    paddingVertical: 3,
    borderRadius: 5,
    textAlign: 'center',
    fontFamily: fonts.bold,
    color: '#1255C3'
  },
  jobTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
  },
  companyText: {
    color: colors.placeholder,
    fontSize: 14,
    fontFamily: fonts.medium,
    letterSpacing: 1,
  },
  locationText: {
    color: colors.placeholder,
    fontSize: 14,
    fontFamily: fonts.medium,
    letterSpacing: 1,
  },
  applyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tagsText: {
    backgroundColor: colors.tagBackground,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    margin: 5,
    color: colors.tagBackground+200,
    fontFamily: fonts.semiBold
  },
});

export default JobCard;
