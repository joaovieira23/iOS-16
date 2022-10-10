import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import wallpaper from './assets/images/wallpaper.webp';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-lock-closed" size={20} color="white" />
        <Text style={styles.date}>Segunda-feira, 10 de outubro</Text>
        <Text style={styles.time}>11:10</Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },

  date: {
    color: '#C3FFFE',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },

  time: {
    fontSize: 82,
    fontWeight: 'bold',
    color: '#C3FFFE',
  }
});