
import {Stack} from 'expo-router';
import {Text} from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Text>Root</Text>
      <Stack.Screen name="index" options={{title: 'Hme'}}/>
      <Stack.Screen name="about" options={{title: 'About'}}/>
    </Stack>
  )
}