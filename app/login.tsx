import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp } from '@react-navigation/native';

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Dummy authentication logic
    if (email === 'test@example.com' && password === 'password123') {
      Alert.alert('Login Successful', `Welcome, ${email}!`);
      navigation.navigate('Index'); // Navigate to home screen
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  button: {
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  signupText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#555',
  },
});

export default LoginScreen;
