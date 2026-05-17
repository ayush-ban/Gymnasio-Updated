import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 22,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#3A3A3A",
    paddingBottom: 14,
  },

  logo: {
    color: "#C6FF00",
    fontSize: 38,
    fontWeight: "900",
    // fontStyle: "italic",
    letterSpacing: 1,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#2B2B2B",
    borderWidth: 1,
    borderColor: "#555",
  },

  content: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 70,
  },

  heading: {
    color: "#C6FF00",
    fontSize: 58,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 58,
  },

  subText: {
    color: "#B5B5A7",
    fontSize: 18,
    textAlign: "center",
    marginTop: 24,
    marginBottom: 50,
  },

  card: {
    backgroundColor: "rgba(25,25,25,0.92)",
    borderRadius: 26,
    padding: 24,
    borderWidth: 1,
    borderColor: "#252525",
  },

  label: {
    color: "#B5B5A7",
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: "700",
    marginBottom: 14,
  },

  input: {
    backgroundColor: "#050505",
    borderWidth: 1,
    borderColor: "#394221",
    borderRadius: 16,
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 18,
    marginBottom: 28,
  },

  passwordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  forgot: {
    color: "#C6FF00",
    fontWeight: "700",
    fontSize: 14,
  },

  button: {
    backgroundColor: "#C6FF00",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#C6FF00",
  },

  buttonText: {
    color: "#0A0A0A",
    fontSize: 24,
    fontWeight: "900",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 40,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#434B2B",
  },

  dividerText: {
    color: "#4D4D4D",
    marginHorizontal: 14,
    fontWeight: "700",
    fontSize: 14,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  socialButton: {
    width: "47%",
    borderWidth: 1,
    borderColor: "#434B2B",
    borderRadius: 16,
    paddingVertical: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#1A1A1A",
  },

  socialText: {
    color: "#F5F5F5",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  footerText: {
    color: "#B5B5A7",
    fontSize: 16,
  },

  joinText: {
    color: "#C6FF00",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default styles;