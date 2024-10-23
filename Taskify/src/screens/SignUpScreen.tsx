import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";

const SignUpScreen = () => {
  type EmailError = string | null;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<EmailError>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [retypePassword, setRetypePassword] = useState("");
  const [retypePasswordError, setRetypePasswordError] = useState<string | null>(
    null
  );
  const [agreeTerms, setAgreeTerms] = useState(false);

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

  const handleRetypePasswordChange = (text: string) => {
    setRetypePassword(text);
    if (text !== password) {
      setRetypePasswordError("Passwords do not match");
    } else {
      setRetypePasswordError(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign up</Text>
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
        {<Text style={styles.errorText}>{emailError}</Text>}
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
        <Text>Retype-Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="black" />
          <TextInput
            style={styles.input}
            value={retypePassword}
            onChangeText={handleRetypePasswordChange}
            placeholder="Retype-Password"
            secureTextEntry
          />
        </View>
        {retypePasswordError && (
          <Text style={styles.errorText}>{retypePasswordError}</Text>
        )}
        <View style={styles.checkboxContainer}>
          <CheckBox
            containerStyle={{ backgroundColor: "transparent" }}
            uncheckedColor="black"
            checked={agreeTerms}
            onPress={() => setAgreeTerms(!agreeTerms)}
            title="I agree to the terms and conditions"
            style={{ backgroundColor: "transparent" }}
          />
        </View>
        <TouchableOpacity
          style={
            agreeTerms
              ? styles.signupButton
              : [styles.signupButton, styles.disabledButton]
          }
          onPress={() => setAgreeTerms(!agreeTerms)}
          disabled={!agreeTerms}
        >
          <Text style={styles.signupButtonText}>Signup now</Text>
        </TouchableOpacity>
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8F0F2",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  form: {
    backgroundColor: "#B0C4B1",
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
    borderColor: "gray",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  signupButton: {
    backgroundColor: "#2F4F4F",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  disabledButton: {
    backgroundColor: "#ccc",
    opacity: 0.5,
  },
  signupButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
  },
  socialButtons: {
    alignItems: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2F4F4F",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: "80%",
    justifyContent: "center",
  },
  socialButtonText: {
    color: "white",
    marginLeft: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default SignUpScreen;
