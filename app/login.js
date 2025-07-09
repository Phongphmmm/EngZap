import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/Button";
import Colors from "../constants/Colors";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleLogin = async () => {
    await signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Engzap</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: Colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});
