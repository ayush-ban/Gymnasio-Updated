import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#242424',
  },

  logo: {
    color: '#C6FF00',
    fontSize: 26,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  headerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#C6FF00',
  },

  profileSection: {
    alignItems: 'center',
    marginTop: 28,
  },

  profileWrapper: {
    position: 'relative',
  },

  profileImage: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 5,
    borderColor: '#C6FF00',
  },

  badge: {
    position: 'absolute',
    right: 6,
    bottom: 8,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#C6FF00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#050505',
  },

  name: {
    color: '#C6FF00',
    fontSize: 50,
    fontWeight: '900',
    marginTop: 22,
  },

  membership: {
    color: '#d7d2bf',
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 4,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginTop: 40,
  },

  statCard: {
    width: '48%',
    backgroundColor: '#121212',
    borderRadius: 22,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    height: 210,
    justifyContent: 'space-between',
  },

  activeCard: {
    borderColor: '#C6FF00',
    shadowColor: '#C6FF00',
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  statNumber: {
    color: '#C6FF00',
    fontSize: 62,
    fontWeight: '900',
  },

  statLabel: {
    color: '#d9d9d9',
    fontSize: 14,
    letterSpacing: 2,
    marginTop: 4,
    fontWeight: '700',
  },

  goalCard: {
    marginHorizontal: 22,
    marginTop: 18,
    backgroundColor: '#121212',
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  goalTitle: {
    color: '#d8d0b7',
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: '700',
  },

  goalText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 8,
  },

  progressCircle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 8,
    borderColor: '#C6FF00',
    borderLeftColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressText: {
    color: '#C6FF00',
    fontSize: 24,
    fontWeight: '800',
  },

  sectionTitle: {
    color: '#d8d0b7',
    fontSize: 16,
    letterSpacing: 4,
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 22,
  },

  menuCard: {
    marginHorizontal: 22,
    marginBottom: 18,
    backgroundColor: '#121212',
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },

  menuText: {
    color: '#e9e9e9',
    fontSize: 20,
    fontWeight: '700',
  },

  signOut: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    gap: 10,
  },

  signOutText: {
    color: '#ffb0b0',
    fontSize: 22,
    fontWeight: '700',
  },
});