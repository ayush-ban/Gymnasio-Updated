import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050505',
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 25,
  },

  logo: {
    color: '#C6FF00',
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  title: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '900',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  searchContainer: {
    height: 56,
    backgroundColor: '#0D0D0D',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },

  gymCard: {
    backgroundColor: '#111',
    borderRadius: 22,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#222',
  },

  gymImage: {
    width: '100%',
    height: 190,
  },

  ratingBox: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#C6FF00',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    color: '#000',
    fontWeight: '800',
    marginLeft: 4,
  },

  gymContent: {
    padding: 16,
  },

  gymName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  distance: {
    color: '#BBB',
    marginLeft: 4,
    letterSpacing: 1,
    fontSize: 16,
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 18,
  },

  tag: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },

  tagText: {
    color: '#DDD',
    fontSize: 14,
  },

  detailsBtn: {
    backgroundColor: '#C6FF00',
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  detailsBtnText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '900',
  },

  mapCard: {
    backgroundColor: '#111',
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#222',
    marginBottom: 20,
  },

  mapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  mapTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },

  openMap: {
    color: '#C6FF00',
    fontWeight: '800',
    letterSpacing: 1,
  },

  mapImage: {
    width: '100%',
    height: 150,
    borderRadius: 16,
  },

  mapOverlay: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },

  greenDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#C6FF00',
    marginRight: 10,
  },

  mapText: {
    color: '#fff',
    fontSize: 20,
  },

  bottomTabs: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },

  tabItem: {
    alignItems: 'center',
  },

  activeTab: {
    color: '#C6FF00',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '800',
  },

  inactiveTab: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },

  centerTab: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#C6FF00',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -35,
  },

});