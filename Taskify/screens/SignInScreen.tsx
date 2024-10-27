import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../styles/styles";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [rememberPassword, setRememberPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (text.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in</Text>
      <View style={styles.form}>
        <Text>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="black" />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email"
          />
        </View>
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        <Text>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="black" />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        <View style={styles.checkboxContainer}>
          <Switch
            value={rememberPassword}
            onValueChange={setRememberPassword}
          />
          <Text>Remember Password</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signinButtonText}>Sign in Now</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={20} color="white" />
            <Text style={styles.socialButtonText}>Signup with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={20} color="white" />
            <Text style={styles.socialButtonText}>Signup with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.taskify25,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  form: {
    backgroundColor: colors.taskify50,
    borderRadius: 10,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    marginLeft: 10,
    height: 40,
    width: "100%",
    borderColor: "gray",
  },
  errorText: {
    color: "red",
    marginVertical: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: colors.taskify100,
  },
  signinButton: {
    backgroundColor: "#2F4F4F",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  signinButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
  },
  socialButtons: {
    alignItems: "center",
    paddingTop: 30,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.taskify100,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: "100%",
    justifyContent: "center",
  },
  socialButtonText: {
    color: "white",
    marginLeft: 10,
  },
});

export default SignInScreen;