import { Stack } from "expo-router";
import { View } from "react-native"; 

export default function RootLayout() {
  return (
      <View style={{ flex: 1 }}> 
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="explore" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen name="user" options={{ headerShown: false }} />
          <Stack.Screen name="farmer" options={{ headerShown: false }} />
          <Stack.Screen name="cart" options={{ headerShown: false }} />
          <Stack.Screen name="checkout" options={{ headerShown: false }} />
        </Stack>
      </View>
  );
}
