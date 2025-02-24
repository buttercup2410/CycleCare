// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import EmergencyDeliveryScreen from './screens/EmergencyDeliveryScreen';
import EcoFriendlyScreen from './screens/EcoFriendlyScreen';
import AccountScreen from './screens/AccountScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import ReferralScreen from './screens/ReferralScreen';
import PaymentScreen from './screens/PaymentScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import TermsScreen from './screens/TermsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulates a 2-second splash screen
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Emergency Delivery" component={EmergencyDeliveryScreen} />
        <Stack.Screen name="Eco-Friendly" component={EcoFriendlyScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Referral & Loyalty" component={ReferralScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333' 
  }
});
