import { StyleSheet, Text, View, Button } from "react-native";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export default function Details({ navigation }) {
  const { user } = useContext(DataContext);
  return (
    <View style={styles.container}>
      <Text>Details Page</Text>
      <Text> Hello {user.email}!!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
