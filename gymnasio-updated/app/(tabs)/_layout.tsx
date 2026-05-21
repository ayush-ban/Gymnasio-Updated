import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#050505',
          borderTopColor: '#222',
        },
        tabBarActiveTintColor: '#C6FF00',
        tabBarInactiveTintColor: '#777',
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="gyms"
        options={{
          title: 'Gyms',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="location"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="trainer"
        options={{
          title: 'AI Trainer',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="fitness"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: 'Communities',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="people"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  );
}
              