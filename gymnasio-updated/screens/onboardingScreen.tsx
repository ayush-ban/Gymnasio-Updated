import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import styles from "./onboardingScreen.styles";

const onboardingScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      

      <View style={styles.overlay} />

      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>GIMNASIO</Text>

          <TouchableOpacity>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.subHeading}>PEAK PERFORMANCE</Text>

          <Text style={styles.heading}>
            UNLEASH{"\n"}YOUR{"\n"}
            <Text style={styles.highlight}>POTENTIAL</Text>
          </Text>

          <Text style={styles.description}>
            Access elite training protocols, real-time AI feedback, and
            precision data tracking designed for the top 1%.
          </Text>

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>

          {/* Small Line */}
          <View style={styles.line} />

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>ACTIVE PROS</Text>
              <Text style={styles.cardNumber}>12K+</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>WORKOUTS</Text>
              <Text style={styles.cardNumber}>500+</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 GIMNASIO PERFORMANCE LABS
          </Text>

          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>TERMS</Text>
            <Text style={styles.footerLink}>PRIVACY</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default onboardingScreen;