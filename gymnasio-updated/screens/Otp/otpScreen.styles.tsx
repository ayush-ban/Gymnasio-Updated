import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050505',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },

  logo: {
    fontSize: 36,
    fontWeight: '900',
    color: '#C6FF00',
    fontStyle: 'italic',
    letterSpacing: 1,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 60,
  },

  title: {
    fontSize: 46,
    fontWeight: '800',
    color: '#F2F2F2',
    marginBottom: 18,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 32,
    textAlign: 'center',
    color: '#B9B9A7',
    marginBottom: 50,
  },

  highlight: {
    color: '#C6FF00',
    fontWeight: '700',
  },

  otpContainer: {
    width: '100%',
    backgroundColor: '#111',
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#222',
    padding: 24,
  },

  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  otpInput: {
    width: 64,
    height: 82,
    borderWidth: 1,
    borderColor: '#556B2F',
    borderRadius: 18,
    backgroundColor: '#050505',
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
  },

  button: {
    marginTop: 30,
    width: '100%',
    height: 72,
    borderRadius: 18,
    backgroundColor: '#C6FF00',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    color: '#000',
    fontSize: 22,
    fontWeight: '800',
  },

  resendContainer: {
    marginTop: 55,
    alignItems: 'center',
  },

  resendLabel: {
    color: '#C9C4AF',
    letterSpacing: 3,
    fontSize: 16,
    marginBottom: 10,
  },

  timer: {
    color: '#C6FF00',
    fontSize: 44,
    fontWeight: '900',
    marginBottom: 25,
  },

  resendBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  resendText: {
    color: '#5f5f5f',
    fontSize: 18,
    letterSpacing: 2,
    marginRight: 8,
  },

});