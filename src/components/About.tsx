import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

import { useThemeCustom } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import AppIcon from './common/AppIcon';

export default function About() {
  const { theme } = useThemeCustom();
  const { isMobile, width } = useResponsive();

  /* ANIMATIONS */
  const slideOffset = isMobile ? 30 : 120;
  const textAnim = useRef(new Animated.Value(slideOffset)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const imageAnim = useRef(new Animated.Value(-slideOffset)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(textAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(imageAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const circleSize = isMobile
    ? Math.min(width * 0.62, 230)
    : Math.min(width * 0.28, 380);

  const iconSize = isMobile ? 28 : 35;

  return (
    <View
      nativeID="about"
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          flexDirection: isMobile ? 'column-reverse' : 'row',
          paddingHorizontal: isMobile ? 20 : 50,
          alignItems: 'center',
        },
      ]}
    >
      {/* LEFT CONTENT */}
      <Animated.View
        style={[
          styles.leftSection,
          {
            opacity: textOpacity,
            transform: [{ translateX: textAnim }],
            paddingRight: isMobile ? 0 : 50,
            width: isMobile ? '100%' : '58%',
            alignItems: isMobile ? 'center' : 'flex-start',
          },
        ]}
      >
        <Text
          style={[
            styles.heading,
            {
              color: theme.primary,
              fontSize: isMobile ? 26 : 32,
              textAlign: isMobile ? 'center' : 'left',
            },
          ]}
        >
          About me
        </Text>

        <Text
          style={[
            styles.description,
            {
              color: theme.text,
              fontSize: isMobile ? 15 : 17,
              lineHeight: isMobile ? 25 : 29,
              textAlign: isMobile ? 'center' : 'left',
            },
          ]}
        >
          Hi there! I'm Vikash Kumar, an Android App Developer with 3 years of
          experience building, scaling, and publishing modern, high-performance
          mobile applications on the Google Play Store. I specialize in Android
          development using Kotlin, Java, Jetpack Compose, MVVM, and clean mobile
          architectures. I have hands-on experience taking apps from concept to
          successful production releases on Google Play—managing app bundles,
          Play Console rollouts, and optimized user experiences.
        </Text>

        {/* SKILLS HEADING */}
        <Text
          style={[
            styles.skillsTitle,
            {
              color: theme.primary,
              fontSize: isMobile ? 18 : 22,
              marginTop: isMobile ? 25 : 35,
              textAlign: isMobile ? 'center' : 'left',
            },
          ]}
        >
          Here are my main skills:
        </Text>

        {/* SKILLS BADGES */}
        <View
          style={[
            styles.skillsRow,
            {
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: isMobile ? 18 : 26,
            },
          ]}
        >
          <View style={styles.skillItem}>
            <AppIcon name="android" size={iconSize} color="#3DDC84" />
          </View>
          <View style={styles.skillItem}>
            <AppIcon name="java" size={iconSize} color="#EA2D2E" />
          </View>
          <View style={styles.skillItem}>
            <AppIcon name="kotlin" size={iconSize} color="#A97BFF" />
          </View>
          <View style={styles.skillItem}>
            <AppIcon name="googleplay" size={iconSize} color="#3BCCFF" />
          </View>
          <View style={styles.skillItem}>
            <AppIcon name="sqlite" size={iconSize} color="#0a7611" />
          </View>
          <View style={styles.skillItem}>
            <AppIcon name="javascript" size={iconSize} color="#F7DF1E" />
          </View>
          <View style={styles.skillItem}>
            <AppIcon name="firebase" size={iconSize} color="#FFA611" />
          </View>
        </View>
      </Animated.View>

      {/* RIGHT PHOTO */}
      <Animated.View
        style={[
          styles.rightSection,
          {
            opacity: imageOpacity,
            transform: [{ translateX: imageAnim }],
            marginBottom: isMobile ? 26 : 0,
            width: isMobile ? '100%' : '42%',
          },
        ]}
      >
        <View
          style={[
            styles.circle,
            {
              width: circleSize,
              height: circleSize,
              borderRadius: circleSize / 2,
              backgroundColor: theme.primary,
            },
          ]}
        >
          <Image
            source={require('../../assets/profile.png')}
            style={{
              width: circleSize * 1.3,
              height: circleSize * 1.6,
              borderRadius: circleSize * 0.65,
            }}
            resizeMode="cover"
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: '100%',
  },
  leftSection: {
    justifyContent: 'center',
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '800',
    marginBottom: 16,
  },
  description: {
    maxWidth: 820,
  },
  skillsTitle: {
    fontWeight: '700',
    marginBottom: 16,
  },
  skillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  skillItem: {
    padding: 4,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.12)',
  },
});