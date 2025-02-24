import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  SplashScreen: undefined;
  Index: undefined;
};

export default function SplashScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.replace('Index');
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Text style={styles.logo}>CycleCare</Text>
        <Text style={styles.tagline}>Care for your cycle</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF4081',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#666',
    fontStyle: 'italic',
  },
});
