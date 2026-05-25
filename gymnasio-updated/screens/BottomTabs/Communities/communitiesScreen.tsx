import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './communitiesScreen.styles';

export default function CommunitiesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#C6FF00" />
        </TouchableOpacity>

        <Text style={styles.logo}>GIMNASIO</Text>

        <Image
          source={{
            uri: 'https://i.pravatar.cc/100',
          }}
          style={styles.profile}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Community</Text>
          <Text style={styles.live}>LIVE FEED</Text>
        </View>

        {/* Share Box */}
        <View style={styles.shareBox}>
          <View style={styles.shareLeft}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
              }}
              style={styles.shareAvatar}
            />

            <TextInput
              placeholder="Share your progress, athlete..."
              placeholderTextColor="#8c8c8c"
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add" size={28} color="#000" />
          </TouchableOpacity>
        </View>

        {/* POST 1 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.userRow}>
              <Image
                source={{
                  uri: 'https://i.pravatar.cc/150?img=12',
                }}
                style={styles.avatar}
              />

              <View>
                <Text style={styles.name}>Marcus V.</Text>
                <Text style={styles.subText}>2h ago • Leg Day</Text>
              </View>
            </View>

            <Ionicons
              name="ellipsis-vertical"
              size={20}
              color="#CFCFCF"
            />
          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd',
            }}
            style={styles.postImage}
          />

          <View style={styles.badge}>
            <Text style={styles.badgeText}>PERSONAL BEST</Text>
          </View>

          <Text style={styles.postText}>
            Crushed the morning session. Squats felt explosive today.
            180kg x 5 reps is a new baseline. Keep pushing!
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>180</Text>
              <Text style={styles.statLabel}>WEIGHT (KG)</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>REPS</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>SETS</Text>
            </View>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.iconRow}>
              <Ionicons
                name="heart-outline"
                size={24}
                color="#d9d9d9"
              />
              <Text style={styles.bottomText}>124</Text>
            </View>

            <View style={styles.iconRow}>
              <Ionicons
                name="chatbubble-outline"
                size={22}
                color="#d9d9d9"
              />
              <Text style={styles.bottomText}>18</Text>
            </View>

            <Ionicons
              name="share-social-outline"
              size={22}
              color="#d9d9d9"
            />
          </View>
        </View>

        {/* POST 2 */}
        <View style={[styles.card, styles.highlightCard]}>
          <View style={styles.cardHeader}>
            <View style={styles.userRow}>
              <Image
                source={{
                  uri: 'https://i.pravatar.cc/150?img=32',
                }}
                style={styles.avatar}
              />

              <View>
                <Text style={styles.name}>Sarah K.</Text>
                <Text style={styles.subText}>5h ago • HIIT Session</Text>
              </View>
            </View>

            <Text style={styles.levelUp}>⚡ LEVEL UP</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>WEEKLY SUMMARY</Text>

            <View style={styles.summaryStats}>
              <View>
                <Text style={styles.summaryNumber}>12.5</Text>
                <Text style={styles.summaryLabel}>KILOMETERS</Text>
              </View>

              <View style={styles.divider} />

              <View>
                <Text style={styles.summaryNumber}>480</Text>
                <Text style={styles.summaryLabel}>MINUTES</Text>
              </View>
            </View>

            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>

            <Text style={styles.goalText}>
              85% of weekly goal achieved
            </Text>
          </View>

          <Text style={styles.postText}>
            The new endurance program from GIMNASIO AI is no joke.
            Consistency is the only metric that matters.
          </Text>

          <View style={styles.bottomRow}>
            <View style={styles.iconRow}>
              <Ionicons
                name="heart-outline"
                size={24}
                color="#d9d9d9"
              />
              <Text style={styles.bottomText}>82</Text>
            </View>

            <View style={styles.iconRow}>
              <Ionicons
                name="chatbubble-outline"
                size={22}
                color="#d9d9d9"
              />
              <Text style={styles.bottomText}>5</Text>
            </View>

            <Ionicons
              name="share-social-outline"
              size={22}
              color="#d9d9d9"
            />
          </View>
        </View>

        {/* POST 3 */}
        <View style={[styles.card, { marginBottom: 120 }]}>
          <View style={styles.cardHeader}>
            <View style={styles.userRow}>
              <Image
                source={{
                  uri: 'https://i.pravatar.cc/150?img=24',
                }}
                style={styles.avatar}
              />

              <View>
                <Text style={styles.name}>Jordan T.</Text>
                <Text style={styles.subText}>
                  8h ago • Back & Biceps
                </Text>
              </View>
            </View>

            <Ionicons
              name="ellipsis-vertical"
              size={20}
              color="#CFCFCF"
            />
          </View>

          <Text style={styles.postText}>
            Finally back in the zone after that minor injury.
            Focus on form over weight today. The community support
            kept me motivated during the recovery! 💪🏻
          </Text>

          <View style={styles.bottomRow}>
            <View style={styles.iconRow}>
              <Ionicons
                name="heart-outline"
                size={24}
                color="#d9d9d9"
              />
              <Text style={styles.bottomText}>256</Text>
            </View>

            <View style={styles.iconRow}>
              <Ionicons
                name="chatbubble-outline"
                size={22}
                color="#d9d9d9"
              />
              <Text style={styles.bottomText}>42</Text>
            </View>

            <Ionicons
              name="share-social-outline"
              size={22}
              color="#d9d9d9"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

