import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Layout from '../Layout/Layout';
import { fonts } from '../../utils/fonts';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { colors } from '../../utils/colors';

const Login = () => {
  return (
    <Layout>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('./../../../assets/images/signup.png')}
          style={styles.image}
        />
        <Text style={styles.signupText}>Signup</Text>
        <View style={styles.inputBox}>
          <MaterialDesignIcons name="email-outline" size={24} />
          <TextInput
            style={styles.inputText}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.btnText}>Signup</Text>
        </TouchableOpacity>
        <Text>--or--</Text>
        <TouchableOpacity style={styles.googleBtn}>
          <Image
            style={styles.googleIcon}
            source={require('./../../../assets/images/google.png')}
          />
          <Text style={styles.googleText}>Signup with Google</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 250,
    height: 250,
  },
  signupText: {
    fontSize: 30,
    fontWeight: fonts.semiBold,
    marginBottom: 20,
    letterSpacing: 2,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#00000060',
    borderRadius: 10,
  },
  inputText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    flex: 1,
  },
  signupBtn: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnText: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: '#ffffff',
  },
  googleBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  googleText: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: '#000000',
  },
});

export default Login;
