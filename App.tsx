import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import wallpaper from './assets/images/wallpaper.webp';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-lock-closed" size={20} color="white" />
        <Text style={styles.date}>Segunda-feira, 10 de outubro</Text>
        <Text style={styles.time}>11:10</Text>
      </View>

      {/* Notification List */}
      <View style={styles.footer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>

        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="white" />
        </View>
      </View> 

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
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
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 75
  },

  icon: {
    backgroundColor: '#00000050',
    width: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }
});
