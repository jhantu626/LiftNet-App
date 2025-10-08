import { StyleSheet, Text, View } from 'react-native';
import { colors } from './../../utils/colors';

const Layout = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryBackgorund,
      }}
    >
      {children}
    </View>
  );
};

export default Layout;