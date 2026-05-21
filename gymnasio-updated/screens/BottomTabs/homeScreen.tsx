import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { styles } from './homeScreen.styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* Header */}
        <View style={styles.header}>

          <TouchableOpacity>
            <Ionicons
              name="menu"
              size={30}
              color="#C6FF00"
            />
          </TouchableOpacity>

          <Text style={styles.logo}>
            GIMNASIO
          </Text>

          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=12',
            }}
            style={styles.profile}
          />

        </View>

        {/* Stats Card */}
        <View style={styles.card}>

          <View style={styles.circleWrapper}>

            <View style={styles.circleOuter}>
              <View style={styles.circleInner}>
                <Text style={styles.steps}>
                  8.4k
                </Text>

                <Text style={styles.stepsLabel}>
                  STEPS
                </Text>
              </View>
            </View>

          </View>

          <View style={styles.statsContainer}>

            <View style={styles.statItem}>
              <Text style={styles.statTitle}>
                CALORIES
              </Text>

              <Text style={styles.statValue}>
                1,240 kcal
              </Text>

              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: '75%' },
                  ]}
                />
              </View>
            </View>

            <View style={styles.statItem}>
              <Text style={styles.statTitle}>
                MINUTES
              </Text>

              <Text style={styles.statValue}>
                48 mins
              </Text>

              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: '45%' },
                  ]}
                />
              </View>
            </View>

          </View>

        </View>

        {/* Session Card */}
        <View style={styles.sessionCard}>

          <Text style={styles.sessionLabel}>
            NEXT SESSION
          </Text>

          <Text style={styles.sessionTitle}>
            Leg Day Ultra
          </Text>

          <Text style={styles.sessionSubtitle}>
            High intensity • 55m
          </Text>

          <TouchableOpacity style={styles.workoutBtn}>

            <Text style={styles.workoutBtnText}>
              START WORKOUT
            </Text>

            <Ionicons
              name="play-outline"
              size={22}
              color="#000"
            />

          </TouchableOpacity>

        </View>

        {/* Focus */}
        <View style={styles.focusHeader}>

          <Text style={styles.focusTitle}>
            {"Today's Focus"}
          </Text>

          <TouchableOpacity>
            <Text style={styles.viewPlan}>
              VIEW PLAN
            </Text>
          </TouchableOpacity>

        </View>

        {/* Focus Card */}
        <View style={styles.focusCard}>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200',
            }}
            style={styles.focusImage}
          />

          <View style={styles.overlay}>

            <View style={styles.badges}>

              <View style={styles.badgeGreen}>
                <Text style={styles.badgeText}>
                  STRENGTH
                </Text>
              </View>

              <View style={styles.badgeDark}>
                <Text style={styles.badgeText}>
                  ADVANCED
                </Text>
              </View>

            </View>

            <Text style={styles.focusWorkout}>
              POWERLIFTING{'\n'}
              FOUNDATIONS
            </Text>

            <Text style={styles.focusMeta}>
              4 Blocks • 12 Exercises • 650 Cal Est.
            </Text>

          </View>

        </View>

        {/* Grid Buttons */}
        <View style={styles.grid}>

          <TouchableOpacity style={styles.gridCard}>
            <Ionicons
              name="timer-outline"
              size={28}
              color="#C6FF00"
            />

            <Text style={styles.gridText}>
              STOPWATCH
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard}>
            <Ionicons
              name="restaurant-outline"
              size={28}
              color="#C6FF00"
            />

            <Text style={styles.gridText}>
              NUTRITION
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard}>
            <Ionicons
              name="reload-outline"
              size={28}
              color="#C6FF00"
            />

            <Text style={styles.gridText}>
              LOG HISTORY
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard}>
            <Ionicons
              name="trending-up-outline"
              size={28}
              color="#C6FF00"
            />

            <Text style={styles.gridText}>
              ANALYTICS
            </Text>
          </TouchableOpacity>

        </View>

        {/* AI Card */}
        <View style={styles.aiCard}>

          <View style={styles.aiIcon}>
            <MaterialIcons
              name="smart-toy"
              size={28}
              color="#C6FF00"
            />
          </View>

          <View style={{ flex: 1 }}>

            <Text style={styles.aiTitle}>
              AI COACH INSIGHT
            </Text>

            <Text style={styles.aiText}>
              {"You've hit your volume peak for"}
              {" the week. Today's leg session"}
              {" should focus on explosive power"}
              {" rather than absolute load."}
            </Text>

          </View>

        </View>

        <View style={{ height: 100 }} />

      </ScrollView>

    </View>
  );
}

