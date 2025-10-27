import '../global.css';
import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';

export default function Layout() {
  return <>
  <StatusBar barStyle="light-content" />
  <Stack screenOptions={{ headerShown: false }} /></>;
}
