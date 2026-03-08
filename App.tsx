import React from "react";
import {
   StyleSheet,
   Text,
   View,
} from "react-native";
import "./global.css"
import LoginScreen from "./screens/LoginScreen";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
   const [fontsLoaded, fontError] = useFonts({
      'Inter-Regular': require('./assets/fonts/Inter_18pt-Regular.ttf'),
      'Inter-Medium': require('./assets/fonts/Inter_18pt-Medium.ttf'),
      'Inter-SemiBold': require('./assets/fonts/Inter_18pt-SemiBold.ttf'),
      'Inter-Bold': require('./assets/fonts/Inter_18pt-Bold.ttf'),
   });

   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded, fontError]);

   if (!fontsLoaded && !fontError) {
      return null;
   }

   return (
      <View style={styles.container} onLayout={onLayoutRootView}>
         <LoginScreen />
         <Text className="text-xl font-bold text-blue-500 font-inter-bold">
            Welcome to Nativewind!
         </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   }
});
