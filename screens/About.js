import { StyleSheet, Text, View, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
