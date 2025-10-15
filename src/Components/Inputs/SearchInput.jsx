import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { getAppInfo } from 'react-native/types_generated/Libraries/LogBox/Data/LogBoxData';
import { fonts } from '../../utils/fonts';
import { colors } from '../../utils/colors';

const SearchInput = ({
  width = '100%',
  height = 45,
  backgroundColor = '#ffffff',
  placeholder = 'Search',
  isBorder = true,
  value,
  setValue,
}) => {
  return (
    <View
      style={[
        styles.container,
        { width: width, height: height },
        isBorder && {
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.placeholder,
        },
      ]}
    >
      <Ionicons name="search-outline" size={24} color={colors.placeholder} />
      <TextInput
        placeholder={placeholder}
        style={styles.inputContainer}
        selectionColor={colors.primary}
        value={value}
        onChangeText={text => {
          setValue(text);
        }}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});
