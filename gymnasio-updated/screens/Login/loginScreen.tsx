import React from "react";
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import styles from "./loginScreen.styles";

export default function LoginScreen() {
  return (
    <LinearGradient
      colors={["#050505", "#0b0f05", "#050505"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="#C6FF00" />
          </TouchableOpacity>

          <Text style={styles.logo}>GIMNASIO</Text>

          <View style={styles.avatar} />
        </View>

        {/* Main */}
        <View style={styles.content}>
          <Text style={styles.heading}>
            WELCOME
          </Text>

          <Text style={styles.subText}>
            Precision performance starts here.
          </Text>

          {/* Login Card */}
          <View style={styles.card}>
            {/* Email */}
            <Text style={styles.label}>EMAIL ADDRESS</Text>

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#4B4B4B"
              style={styles.input}
            />

            {/* Password */}
            <View style={styles.passwordRow}>
              <Text style={styles.label}>PASSWORD</Text>

              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#4B4B4B"
              secureTextEntry
              style={styles.input}
            />

            {/* Button */}
            <TouchableOpacity style={styles.button} onPress={() => router.push("/otp")}>
              <Text style={styles.buttonText}>ACCESS FACILITY</Text>
            </TouchableOpacity>
            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />

              <Text style={styles.dividerText}>OR CONTINUE WITH</Text>

              <View style={styles.divider} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="google" size={24} color="#fff" />

                <Text style={styles.socialText}>GOOGLE</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-apple" size={28} color="#fff" />

                <Text style={styles.socialText}>APPLE</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>New to the roster? </Text>

            <TouchableOpacity>
              <Text style={styles.joinText}>Join Gimnasio</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}