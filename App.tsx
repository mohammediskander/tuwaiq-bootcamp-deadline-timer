import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import moment from "moment";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>{}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
