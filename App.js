import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { colors } from "./src/constants";
import Game from "./src/components/Game/Game";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="light" /> */}

      <Text style={styles.title}>WORDLE</Text>
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.lightgrey,
    fontSize: 33,
    fontWeight: "bold",
    letterSpacing: 7,
  },
});
