import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const PRIMARY = "#C6FF00";

export default StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.72)",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  header: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: PRIMARY,
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 1,
    // fontStyle: "italic",
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
  },

  content: {
    marginTop: 60,
  },

  subHeading: {
    color: PRIMARY,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 18,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 54,
    fontWeight: "900",
    lineHeight: 55,
  },

  highlight: {
    color: PRIMARY,
  },

  description: {
    color: "#B8B8B8",
    fontSize: 18,
    lineHeight: 30,
    marginTop: 18,
    width: "92%",
    fontWeight: "500",
  },

  button: {
    marginTop: 35,
    backgroundColor: PRIMARY,
    height: 55,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#111111",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 1,
  },

  line: {
    width: 85,
    height: 4,
    backgroundColor: PRIMARY,
    marginTop: 26,
    borderRadius: 10,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 34,
  },

  card: {
    width: "48%",
    backgroundColor: "rgba(24,24,24,0.95)",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  cardTitle: {
    color: PRIMARY,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 10,
  },

  cardNumber: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "900",
  },

  footer: {
    alignItems: "center",
    marginBottom: 24,
  },

  footerText: {
    color: "#8C8C8C",
    fontSize: 11,
    marginBottom: 14,
    fontWeight: "600",
  },

  footerLinks: {
    flexDirection: "row",
    gap: 28,
  },

  footerLink: {
    color: "#BDBDBD",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
  },
});