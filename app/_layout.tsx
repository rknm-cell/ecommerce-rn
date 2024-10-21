
import {Stack} from 'expo-router';
import { setStatusBarStyle } from 'expo-status-bar';
import { useEffect } from 'react';

export function RootLayout() {

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle('light')
    }, 0);
  }, [])
  return (
    <Stack>
      
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="+not-found" options={{title: 'Not Found'}}/>
    </Stack>
  )
}
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function Index() {
  return (
    <>
    <GestureHandlerRootView style={{flex: 1}}>
      </GestureHandlerRootView>
      <StatusBar style="light" />
    </>
  )
}