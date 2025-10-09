import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { fonts } from '../../utils/fonts';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { validateEmail } from './../../utils/validations';
import { authService } from './../../services/AuthService';

const Login = () => {
  const navigation = useNavigation();
  // Loading State
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // handle chagne the email
  const handleChange = text => {
    setEmail(text);
    if (email.length > 3 && !validateEmail(text)) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const data = await authService.login(email);
      console.info(data);
      console.info(data);
      if (data?.status) {
        navigation.navigate('Otp', { email });
      } else {
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
            value={email}
            onChangeText={text => handleChange(text)}
          />
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity
          style={styles.signupBtn}
          disabled={error !== '' || email === ''}
          onPress={handleSignup}
        >
          {isLoading ? (
            <ActivityIndicator size={'small'} color={'#fff'} />
          ) : (
            <Text style={styles.btnText}>Signup</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.orText}>── or ──</Text>
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
    gap: 10,
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
  orText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: '#000000',
  },
  googleBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff90',
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
    fontSize: 16,
    fontFamily: fonts.medium,
    color: '#000000',
  },
  errorText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: 'red',
  },
});

export default Login;
