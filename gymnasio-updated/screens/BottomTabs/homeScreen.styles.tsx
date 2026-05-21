import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050505',
    paddingTop: 55,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginBottom: 25,
  },

  logo: {
    color: '#C6FF00',
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: '#C6FF00',
  },

  card: {
    backgroundColor: '#111',
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: '#222',
    marginBottom: 20,
  },

  circleWrapper: {
    alignItems: 'center',
    marginBottom: 25,
  },

  circleOuter: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 14,
    borderColor: '#C6FF00',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleInner: {
    alignItems: 'center',
  },

  steps: {
    color: '#C6FF00',
    fontSize: 42,
    fontWeight: '900',
  },

  stepsLabel: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 2,
  },

  statsContainer: {
    gap: 18,
  },

  statItem: {},

  statTitle: {
    color: '#AAA',
    fontSize: 15,
    letterSpacing: 1,
  },

  statValue: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 10,
  },

  progressBar: {
    height: 8,
    backgroundColor: '#222',
    borderRadius: 6,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#C6FF00',
    borderRadius: 6,
  },

  sessionCard: {
    backgroundColor: '#111',
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#222',
    marginBottom: 25,
  },

  sessionLabel: {
    color: '#AAA',
    fontSize: 15,
    letterSpacing: 1,
    marginBottom: 10,
  },

  sessionTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '900',
  },

  sessionSubtitle: {
    color: '#BBB',
    fontSize: 20,
    marginBottom: 24,
  },

  workoutBtn: {
    backgroundColor: '#C6FF00',
    height: 64,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  workoutBtnText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '900',
    marginRight: 8,
  },

  focusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 18,
  },

  focusTitle: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '900',
  },

  viewPlan: {
    color: '#C6FF00',
    fontWeight: '800',
    letterSpacing: 1,
  },

  focusCard: {
    marginHorizontal: 20,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 28,
  },

  focusImage: {
    width: '100%',
    height: 280,
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  badges: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  badgeGreen: {
    backgroundColor: '#C6FF00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 10,
  },

  badgeDark: {
    backgroundColor: '#222',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },

  badgeText: {
    color: '#000',
    fontWeight: '700',
  },

  focusWorkout: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 10,
  },

  focusMeta: {
    color: '#DDD',
    fontSize: 18,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 28,
  },

  gridCard: {
    width: '48%',
    backgroundColor: '#111',
    borderRadius: 22,
    paddingVertical: 34,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#222',
    marginBottom: 16,
  },

  gridText: {
    color: '#fff',
    marginTop: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },

  aiCard: {
    flexDirection: 'row',
    backgroundColor: '#111',
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#3A4D00',
  },

  aiIcon: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#1D2A00',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  aiTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 10,
  },

  aiText: {
    color: '#CCC',
    fontSize: 17,
    lineHeight: 28,
  },

});