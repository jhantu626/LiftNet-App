import {
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
import React, { useRef, useState } from 'react';
import Layout from '../Layout/Layout';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const inputRef = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    console.log(newOtp, index, value);

    if (value !== '' && index < 3) {
      setCurrentIndex(index + 1);
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      setCurrentIndex(index - 1);
      inputRef.current[index - 1].focus();
    }
  };

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
              selectionColor={colors.primary}
              onChangeText={value => handleOtpChange(index, value)}
              onFocus={() => setCurrentIndex(index)}
              onKeyPress={e => handleKeyPress(e, index)}
            />
          ))}
        </View>

 <TouchableOpacity
          style={styles.verifyButton}
          // onPress={handleVerify}
          activeOpacity={0.8}>
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code? </Text>
          <TouchableOpacity >
            <Text style={styles.resendLink}>Resend</Text>
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
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 20,
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
