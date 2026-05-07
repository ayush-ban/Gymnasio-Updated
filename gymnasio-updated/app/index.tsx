import { View, Button } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Go to Onboarding"
        onPress={() => router.push("/onboarding")}
      />
    </View>
  );
}