import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './profileScreen.styles';

export default function ProfileScreen() {
  const menuItems = [
    {
      icon: 'person-outline',
      title: 'Personal Information',
    },
    {
      icon: 'notifications-outline',
      title: 'Training Alerts',
    },
    {
      icon: 'card-outline',
      title: 'Subscription & Billing',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Security & Privacy',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} color="#C6FF00" />
        </TouchableOpacity>

        <Text style={styles.logo}>GIMNASIO</Text>

        <Image
          source={{
            uri: 'https://i.pravatar.cc/300',
          }}
          style={styles.headerAvatar}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* PROFILE */}
        <View style={styles.profileSection}>
          <View style={styles.profileWrapper}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc',
              }}
              style={styles.profileImage}
            />

            <TouchableOpacity style={styles.badge}>
              <Ionicons
                name="star"
                size={16}
                color="#C6FF00"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>RICARDO M.</Text>

          <Text style={styles.membership}>
            ELITE MEMBERSHIP • LEVEL 42
          </Text>
        </View>

        {/* STATS */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <MaterialCommunityIcons
              name="dumbbell"
              size={28}
              color="#C6FF00"
            />

            <View>
              <Text style={styles.statNumber}>128</Text>
              <Text style={styles.statLabel}>
                TOTAL WORKOUTS
              </Text>
            </View>
          </View>

          <View style={[styles.statCard, styles.activeCard]}>
            <Ionicons
              name="trophy-outline"
              size={28}
              color="#C6FF00"
            />

            <View>
              <Text style={styles.statNumber}>14</Text>
              <Text style={styles.statLabel}>
                PERSONAL RECORDS
              </Text>
            </View>
          </View>
        </View>

        {/* GOAL CARD */}
        <View style={styles.goalCard}>
          <View>
            <Text style={styles.goalTitle}>
              NEXT GOAL PROGRESS
            </Text>

            <Text style={styles.goalText}>
              Bench Press 100kg
            </Text>
          </View>

          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>75%</Text>
          </View>
        </View>

        {/* SECTION TITLE */}
        <Text style={styles.sectionTitle}>
          ACCOUNT MANAGEMENT
        </Text>

        {/* MENU ITEMS */}
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuCard}
          >
            <View style={styles.menuLeft}>
              <View style={styles.iconBox}>
                <Ionicons
                  name={item.icon as any}
                  size={26}
                  color="#C6FF00"
                />
              </View>

              <Text style={styles.menuText}>
                {item.title}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={26}
              color="#d9d9d9"
            />
          </TouchableOpacity>
        ))}

        {/* SIGN OUT */}
        <TouchableOpacity style={styles.signOut}>
          <Ionicons
            name="log-out-outline"
            size={30}
            color="#ffb0b0"
          />

          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
