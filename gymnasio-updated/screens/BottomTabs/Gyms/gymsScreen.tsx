import React from 'react';
import {
  View,
 Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';
import { styles } from './gymsScreen.styles';

const gyms = [
  {
    id: 1,
    name: 'Iron Temple Elite',
    distance: '0.8 MILES AWAY',
    rating: '4.9',
    tags: ['24/7 Access', 'Sauna', 'Elite Gear'],
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200',
  },

  {
    id: 2,
    name: 'Urban Velocity',
    distance: '1.5 MILES AWAY',
    rating: '4.7',
    tags: ['Pool', 'HIIT Classes', 'Juice Bar'],
    image:
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200',
  },

  {
    id: 3,
    name: 'The Lab Performance',
    distance: '2.3 MILES AWAY',
    rating: '4.8',
    tags: ['AI Analysis', 'Cryo Therapy', 'PT Pro'],
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200',
  },
];

export default function GymsScreen() {

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
              size={28}
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

        {/* Title */}
        <Text style={styles.title}>
          Find a Gym
        </Text>

        {/* Search */}
        <View style={styles.searchContainer}>

          <Ionicons
            name="search"
            size={22}
            color="#AAA"
          />

          <TextInput
            placeholder="Search by name or city..."
            placeholderTextColor="#666"
            style={styles.searchInput}
          />

        </View>

        {/* Gym Cards */}
        {gyms.map((gym) => (

          <View
            key={gym.id}
            style={styles.gymCard}
          >

            <Image
              source={{ uri: gym.image }}
              style={styles.gymImage}
            />

            {/* Rating */}
            <View style={styles.ratingBox}>

              <Ionicons
                name="star-outline"
                size={14}
                color="#000"
              />

              <Text style={styles.ratingText}>
                {gym.rating}
              </Text>

            </View>

            {/* Content */}
            <View style={styles.gymContent}>

              <Text style={styles.gymName}>
                {gym.name}
              </Text>

              <View style={styles.locationRow}>

                <Ionicons
                  name="location-outline"
                  size={16}
                  color="#BBB"
                />

                <Text style={styles.distance}>
                  {gym.distance}
                </Text>

              </View>

              {/* Tags */}
              <View style={styles.tagsContainer}>

                {gym.tags.map((tag, index) => (

                  <View
                    key={index}
                    style={styles.tag}
                  >

                    <Text style={styles.tagText}>
                      {tag}
                    </Text>

                  </View>

                ))}

              </View>

              {/* Button */}
              <TouchableOpacity
                style={styles.detailsBtn}
              >

                <Text style={styles.detailsBtnText}>
                  VIEW DETAILS
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        ))}

        {/* Map Section */}
        <View style={styles.mapCard}>

          <View style={styles.mapHeader}>

            <Text style={styles.mapTitle}>
              Map View
            </Text>

            <TouchableOpacity>

              <Text style={styles.openMap}>
                OPEN FULL MAP
              </Text>

            </TouchableOpacity>

          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200',
            }}
            style={styles.mapImage}
          />

          <View style={styles.mapOverlay}>

            <View style={styles.greenDot} />

            <Text style={styles.mapText}>
              3 Gyms Nearby
            </Text>

          </View>

        </View>

        <View style={{ height: 120 }} />

      </ScrollView>

    </View>
  );
}

