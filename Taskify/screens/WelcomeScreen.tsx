import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { colors } from '../styles/styles';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.image} />
      <Text style={styles.title}>TASKIFY</Text>
      <Text style={styles.subtitle}>Task Management & To-Do List</Text>
      <Text style={styles.description}>
        This productive tool is designed to help you better manage your task project-wise conveniently
      </Text>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.taskify25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: colors.taskify100,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: colors.taskify100,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: colors.taskify75,
    textAlign: 'center',
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: colors.taskify100,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
  },
  signinButton: {
    borderColor: colors.taskify100,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
  },
  signinText: {
    color: colors.taskify100,
    fontSize: 16,
  },
  guestText: {
    color: colors.taskify75,
    fontSize: 14,
    marginTop: 10,
  },
});

export default WelcomeScreen;