import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './otpScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function OtpScreen() {

  const [otp, setOtp] = useState(['', '', '', '']);

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (
    text: string,
    index: number
  ) => {

    const newOtp = [...otp];
    newOtp[index] = text;

    setOtp(newOtp);

    // Move to next box
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity>
          <Ionicons
            name="arrow-back"
            size={28}
            color="#fff"
          />
        </TouchableOpacity>

        <Text style={styles.logo}>
          GIMNASIO
        </Text>

        <View style={{ width: 28 }} />

      </View>

      {/* Content */}
      <View style={styles.content}>

        {/* Title */}
        <Text style={styles.title}>
          Verify Identity
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          We’ve sent a 4-digit security code to{'\n'}
          your mobile number{' '}
          <Text style={styles.highlight}>
            +1 (•••) •••-4592
          </Text>
        </Text>

        {/* OTP Container */}
        <View style={styles.otpContainer}>

          {/* OTP Inputs */}
          <View style={styles.inputRow}>

            {otp.map((digit, index) => (

              <TextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) =>
                  handleChange(text, index)
                }

                onKeyPress={({ nativeEvent }) => {

                  if (
                    nativeEvent.key === 'Backspace' &&
                    otp[index] === '' &&
                    index > 0
                  ) {

                    const newOtp = [...otp];

                    newOtp[index - 1] = '';

                    setOtp(newOtp);

                    inputRefs.current[index - 1]?.focus();
                  }
                }}

                selectionColor="#C6FF00"
              />
            ))}

          </View>

          {/* Verify Button */}
          <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/home")}>

            <Text style={styles.buttonText}>
              Verify Code
            </Text>

            <Ionicons
              name="shield-checkmark-outline"
              size={24}
              color="#000"
              style={{ marginLeft: 10 }}
            />

          </TouchableOpacity>

        </View>

        {/* Resend Section */}
        <View style={styles.resendContainer}>

          <Text style={styles.resendLabel}>
            RESEND CODE IN
          </Text>

          <Text style={styles.timer}>
            01:45
          </Text>

          <TouchableOpacity style={styles.resendBtn}>

            <Text style={styles.resendText}>
              RESEND CODE
            </Text>

            <Ionicons
              name="refresh-outline"
              size={20}
              color="#5f5f5f"
            />

          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );
}

