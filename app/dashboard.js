import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import Colors from "../constants/Colors";
import { AuthContext } from "../context/AuthContext";

export default function DashboardScreen() {
  const { progress, streak } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>English Learning</Text>
      <Text style={styles.progressText}>Your Progress: {progress * 100}%</Text>
      <ProgressBar progress={progress} />
      <Text style={styles.streakText}>Streak: {streak} days</Text>
      <CustomButton title="Vocabulary" onPress={() => {}} />
      <CustomButton title="Chatbot" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.background },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: Colors.text,
  },
  progressText: { fontSize: 16, marginBottom: 10, color: Colors.text },
  streakText: { fontSize: 14, marginVertical: 10, color: "#666" },
});
