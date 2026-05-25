import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },

  logo: {
    color: '#C6FF00',
    fontSize: 24,
    fontWeight: '800',
    fontStyle: 'italic',
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C6FF00',
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },

  title: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '800',
  },

  live: {
    color: '#D4D4B0',
    letterSpacing: 2,
    fontSize: 12,
  },

  shareBox: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#151515',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  shareLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  shareAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  input: {
    flex: 1,
    backgroundColor: '#090909',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C6FF00',
    paddingHorizontal: 16,
    color: '#fff',
    height: 50,
  },

  addBtn: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: '#C6FF00',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },

  card: {
    backgroundColor: '#121212',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#222',
    paddingBottom: 18,
  },

  highlightCard: {
    borderColor: '#C6FF00',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  subText: {
    color: '#aaa',
    marginTop: 2,
  },

  postImage: {
    width: '100%',
    height: 220,
  },

  badge: {
    position: 'absolute',
    right: 18,
    top: 280,
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#C6FF00',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30,
  },

  badgeText: {
    color: '#C6FF00',
    fontWeight: '700',
    fontSize: 13,
  },

  postText: {
    color: '#ECECEC',
    fontSize: 18,
    lineHeight: 28,
    paddingHorizontal: 16,
    marginTop: 18,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 16,
  },

  statBox: {
    width: '31%',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 14,
  },

  statNumber: {
    color: '#C6FF00',
    fontSize: 40,
    fontWeight: '800',
  },

  statLabel: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
  },

  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  bottomText: {
    color: '#fff',
    fontSize: 16,
  },

  levelUp: {
    color: '#C6FF00',
    fontWeight: '700',
    fontSize: 14,
  },

  summaryCard: {
    marginHorizontal: 16,
    backgroundColor: '#2A2A2A',
    borderRadius: 18,
    padding: 18,
  },

  summaryTitle: {
    color: '#C6FF00',
    fontWeight: '700',
    marginBottom: 18,
  },

  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryNumber: {
    color: '#fff',
    fontSize: 46,
    fontWeight: '800',
  },

  summaryLabel: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 4,
  },

  divider: {
    width: 1,
    height: 80,
    backgroundColor: '#555',
  },

  progressBar: {
    height: 14,
    backgroundColor: '#111',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
  },

  progressFill: {
    width: '85%',
    height: '100%',
    backgroundColor: '#C6FF00',
  },

  goalText: {
    color: '#ddd',
    marginTop: 10,
    fontSize: 14,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#0B0B0B',
    borderTopWidth: 1,
    borderTopColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },

  navItem: {
    alignItems: 'center',
  },

  navText: {
    color: '#555',
    fontSize: 11,
    marginTop: 4,
    letterSpacing: 1,
  },

  activeNav: {
    color: '#C6FF00',
    fontSize: 11,
    marginTop: 4,
    letterSpacing: 1,
    fontWeight: '700',
  },
});