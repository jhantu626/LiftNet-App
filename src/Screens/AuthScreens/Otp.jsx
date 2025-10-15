import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout/Layout';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { useRoute } from '@react-navigation/native';
import { authService } from '../../services/AuthService';
import { useAuth } from '../../contexts';

const Otp = () => {
  const { login } = useAuth();
  const route = useRoute();
  const { email } = route.params;
  const [time, setTime] = useState(300);

  const [otp, setOtp] = useState(['', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const inputRef = useRef([]);

  const handleOtpChange = async (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 3) {
      setCurrentIndex(index + 1);
      inputRef.current[index + 1].focus();
    }

    const joinedOtp = newOtp.join('');
    if (joinedOtp.length === 4) {
      try {
        const data = await authService.verifyOtp(email, joinedOtp);
        if (data.status) {
          ToastAndroid.show('OTP verified successfully', ToastAndroid.SHORT);
          await login(data.token);
        } else {
          ToastAndroid.show(data?.message || 'Invalid OTP', ToastAndroid.SHORT);
          setOtp(['', '', '', '']);
          inputRef.current[0].focus();
        }
      } catch (error) {
        console.error(error);
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      setCurrentIndex(index - 1);
      inputRef.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    try {
      const newOtp = otp.join('');
      if (newOtp.length === 4) {
        const data = await authService.verifyOtp(email, newOtp);
        if (data.status) {
          ToastAndroid.show('OTP verified successfully', ToastAndroid.SHORT);
          await login(data.token);
        } else {
          ToastAndroid.show(data?.message, ToastAndroid.SHORT);
          otp.every(item => (item = ''));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}:${mins.toString().padStart(2, '0')}`;
  }

  const resetOtp = async () => {
    try {
      if (time !== 0) {
        ToastAndroid.show('Please wait for 5 minutes', ToastAndroid.SHORT);
        return;
      }
      const data = await authService.login(email);
      if (data.status) {
        ToastAndroid.show('OTP sent successfully', ToastAndroid.SHORT);
        setTime(300);
      } else {
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);

  return (
    <Layout>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Image
          style={styles.banner}
          source={require('./../../../assets/images/otp.png')}
        />
        <Text style={styles.titleText}>Verify OTP</Text>
        <View style={styles.otpContainer}>
          {otp.map((item, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRef.current[index] = ref)}
              style={[
                styles.otpBox,
                item !== '' && {
                  backgroundColor: colors.primary,
                  color: '#fff',
                },
              ]}
              maxLength={1}
              value={item}
              keyboardType="numeric"
              selectionColor={item === '' ? colors.primary : '#fff'}
              onChangeText={value => handleOtpChange(index, value)}
              onFocus={() => setCurrentIndex(index)}
              onKeyPress={e => handleKeyPress(e, index)}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.verifyButton}
          // onPress={handleVerify}
          activeOpacity={0.8}
          onPress={handleVerify}
        >
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code? </Text>
          <TouchableOpacity disabled={time > 0} onPress={resetOtp}>
            <Text style={styles.resendLink}>
              {time > 0 ? `Resend in ${minutesToTime(time)}s` : 'Resend'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBackgorund,
    gap: 10,
  },
  banner: {
    width: 250,
    height: 250,
  },
  titleText: {
    fontSize: 26,
    fontWeight: fonts.semiBold,
    letterSpacing: 2,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 15,
    height: 50,
    marginVertical: 10,
  },
  otpBox: {
    width: 50,
    height: '100%',
    borderRadius: 10,
    borderColor: '#00000060',
    borderWidth: 1,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.medium,
  },
  verifyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 10,
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: fonts.semiBold,
    textAlign: 'center',
  },
  resendContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#666',
  },
  resendLink: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: fonts.semiBold,
  },
});
