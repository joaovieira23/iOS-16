import { useEffect, useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import wallpaper from './assets/images/wallpaper.webp';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import NotificationList from './src/components/NotificationsList';

import Animated, { 
      SlideInDown,
      SlideInUp,
      useSharedValue,
      useAnimatedStyle,
      interpolate,
      useDerivedValue
} from 'react-native-reanimated';
import SwipeUpToOpen from './src/components/SwipeUpToOpen';

export default function App() {

  const [date, setDate] = useState(dayjs());
  const footerVisibility = useSharedValue(1);
  const footerHeight = useDerivedValue(() => interpolate(footerVisibility.value, [0, 1], [0, 85]));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  const animatedFooterStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(footerVisibility.value, [0, 1], [-85, 0]),
    opacity: footerVisibility.value
  }));

  const Header = useMemo(() => (
    <Animated.View entering={SlideInUp} style={styles.header}>
          <Ionicons name="ios-lock-closed" size={20} color="white" />
          <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
          <Text style={styles.time}>{date.format("hh:mm")}</Text>
        </Animated.View>
  ), [date])

  return (
    <ImageBackground source={wallpaper} style={styles.container}>

      {/* Notification List */}
      <NotificationList 
        footerVisibility={footerVisibility}
        footerHeight={footerHeight}
        ListHeaderComponent={Header} 
      />

      <Animated.View entering={SlideInDown} style={[styles.footer, animatedFooterStyle]}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>

        <SwipeUpToOpen />

        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="white" />
        </View>
      </Animated.View> 

      <StatusBar style="light" />
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
    marginTop: 32,
  },

  date: {
    color: '#C3FFFE',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },

  time: {
    fontSize: 104,
    fontWeight: 'bold',
    color: '#C3FFFE',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 10,
    height: 75,
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
