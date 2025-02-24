// explore.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ExploreScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Resources</Text>
      {/* <Button title="Go to Resources" onPress={() => navigation.navigate('Resources')} />
      <Button title="Referral & Loyalty" onPress={() => navigation.navigate('Referral & Loyalty')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});