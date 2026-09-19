import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Animated,
} from 'react-native';

import { useThemeCustom } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { useScroll } from '../context/ScrollContext';
import AppIcon from './common/AppIcon';

export default function Hero() {
  const { theme, isDark } = useThemeCustom();
  const { isMobile, isSmallMobile, width } = useResponsive();
  const { scrollToSection } = useScroll();

  /* ENTRANCE ANIMATIONS */
  const entranceFade = useRef(new Animated.Value(0)).current;
  const entranceSlide = useRef(new Animated.Value(35)).current;

  /* CONTINUOUS FLOATING & PULSE ANIMATIONS */
  const floatAnim = useRef(new Animated.Value(0)).current;
  const badgeFloatAnim = useRef(new Animated.Value(0)).current;
  const glowPulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // 1. Smooth Spring Entrance
    Animated.parallel([
      Animated.timing(entranceFade, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.spring(entranceSlide, {
        toValue: 0,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    // 2. Smooth Floating Animation for Hero Graphic
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -14,
          duration: 2600,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 8,
          duration: 2600,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // 3. Counter-Floating Animation for Badges
    Animated.loop(
      Animated.sequence([
        Animated.timing(badgeFloatAnim, {
          toValue: 10,
          duration: 2200,
          useNativeDriver: true,
        }),
        Animated.timing(badgeFloatAnim, {
          toValue: -10,
          duration: 2200,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // 4. Ambient Glow Pulsing Animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowPulse, {
          toValue: 1.18,
          duration: 2200,
          useNativeDriver: true,
        }),
        Animated.timing(glowPulse, {
          toValue: 0.92,
          duration: 2200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const heroImageSize = isMobile
    ? Math.min(width * 0.82, 320)
    : Math.min(width * 0.44, 520);

  const glowSize = heroImageSize * 0.92;

  return (
    <Animated.View
      nativeID="hero"
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          flexDirection: isMobile ? 'column-reverse' : 'row',
          paddingHorizontal: isMobile ? 20 : 50,
          alignItems: 'center',
          opacity: entranceFade,
          transform: [{ translateY: entranceSlide }],
        },
      ]}
    >
      {/* LEFT CONTENT */}
      <View
        style={[
          styles.leftSection,
          {
            paddingRight: isMobile ? 0 : 40,
            alignItems: isMobile ? 'center' : 'flex-start',
            width: isMobile ? '100%' : '54%',
          },
        ]}
      >
        {/* AVAILABILITY PILL */}
        <View
          style={[
            styles.availablePill,
            {
              backgroundColor: isDark
                ? 'rgba(0, 255, 136, 0.1)'
                : 'rgba(0, 204, 102, 0.1)',
              borderColor: theme.primary,
              marginBottom: isMobile ? 14 : 22,
            },
          ]}
        >
          <View
            style={[
              styles.pulseDot,
              { backgroundColor: theme.primary },
            ]}
          />
          <Text
            style={[
              styles.availableText,
              { color: theme.primary, fontSize: isMobile ? 13 : 15 },
            ]}
          >
            Available for Opportunities
          </Text>
        </View>

        <Text
          style={[
            styles.status,
            {
              color: theme.subText,
              fontSize: isMobile ? 17 : 20,
              textAlign: isMobile ? 'center' : 'left',
            },
          ]}
        >
          Hello, I'm
        </Text>

        <Text
          style={[
            styles.name,
            {
              color: theme.text,
              fontSize: isMobile ? (isSmallMobile ? 32 : 38) : 52,
              lineHeight: isMobile ? (isSmallMobile ? 40 : 48) : 66,
              textAlign: isMobile ? 'center' : 'left',
              marginVertical: isMobile ? 6 : 10,
            },
          ]}
        >
          VIKASH KUMAR
        </Text>

        <Text
          style={[
            styles.role,
            {
              color: theme.primary,
              fontSize: isMobile ? 19 : 24,
              textAlign: isMobile ? 'center' : 'left',
            },
          ]}
        >
          Android App Developer
        </Text>

        <Text
          style={[
            styles.exp,
            {
              color: theme.subText,
              fontSize: isMobile ? 15 : 19,
              textAlign: isMobile ? 'center' : 'left',
            },
          ]}
        >
          3 Years of Experience • Play Store Publisher
        </Text>

        {/* ACTION BUTTON */}
        <View
          style={[
            styles.buttons,
            {
              marginTop: isMobile ? 24 : 34,
              justifyContent: isMobile ? 'center' : 'flex-start',
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.primaryBtn,
              {
                backgroundColor: theme.primary,
                shadowColor: theme.primary,
              },
            ]}
            onPress={() => scrollToSection('contact')}
          >
            <Text style={styles.primaryBtnText}>Get In Touch</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.secondaryBtn,
              {
                borderColor: theme.primary,
              },
            ]}
            onPress={() => scrollToSection('projects')}
          >
            <Text style={[styles.secondaryBtnText, { color: theme.primary }]}>
              View Work
            </Text>
          </TouchableOpacity>
        </View>

        {/* SOCIAL ICONS */}
        <View
          style={[
            styles.socialContainer,
            {
              marginTop: isMobile ? 24 : 32,
              justifyContent: isMobile ? 'center' : 'flex-start',
            },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://linkedin.com/in/vikash-kumar-b9955a220/')
            }
            style={styles.socialButton}
            accessibilityLabel="LinkedIn"
          >
            <AppIcon
              name="linkedin"
              size={isMobile ? 26 : 30}
              color="#0A66C2"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://github.com/vikashroy276')
            }
            style={styles.socialButton}
            accessibilityLabel="GitHub"
          >
            <AppIcon
              name="github"
              size={isMobile ? 26 : 30}
              color={theme.text}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://wa.me/919471235283')
            }
            style={styles.socialButton}
            accessibilityLabel="WhatsApp"
          >
            <AppIcon
              name="whatsapp"
              size={isMobile ? 26 : 30}
              color="#25D366"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* RIGHT HERO IMAGE WITH FLOATING 3D ANIMATION */}
      <View
        style={[
          styles.rightSection,
          {
            marginBottom: isMobile ? 26 : 0,
            width: isMobile ? '100%' : '46%',
          },
        ]}
      >
        {/* PULSING NEON GLOW */}
        <Animated.View
          style={[
            styles.glow,
            {
              width: glowSize,
              height: glowSize,
              borderRadius: glowSize / 2,
              backgroundColor: isDark ? 'rgba(0, 255, 136, 0.22)' : 'rgba(0, 204, 102, 0.18)',
              transform: [{ scale: glowPulse }],
            },
          ]}
        />

        {/* FLOATING IMAGE CONTAINER */}
        <Animated.View
          style={[
            styles.imageWrapper,
            {
              transform: [{ translateY: floatAnim }],
            },
          ]}
        >
          <Image
            source={require('../../assets/iconss.png')}
            style={{
              width: heroImageSize,
              height: heroImageSize,
            }}
            resizeMode="contain"
          />

          {/* FLOATING TECH BADGE 1 (TOP LEFT) */}
          <Animated.View
            style={[
              styles.floatingBadge,
              styles.badgeTopLeft,
              {
                backgroundColor: isDark ? 'rgba(10, 20, 10, 0.92)' : 'rgba(255, 255, 255, 0.94)',
                borderColor: theme.primary,
                transform: [{ translateY: badgeFloatAnim }],
              },
            ]}
          >
            <Text style={{ fontSize: 16 }}>🤖</Text>
            <View>
              <Text style={[styles.badgeTitle, { color: theme.primary }]}>
                Android Specialist
              </Text>
              <Text style={[styles.badgeSub, { color: theme.subText }]}>
                Kotlin & Compose
              </Text>
            </View>
          </Animated.View>

          {/* FLOATING TECH BADGE 2 (BOTTOM RIGHT) */}
          <Animated.View
            style={[
              styles.floatingBadge,
              styles.badgeBottomRight,
              {
                backgroundColor: isDark ? 'rgba(10, 20, 10, 0.92)' : 'rgba(255, 255, 255, 0.94)',
                borderColor: theme.primary,
                transform: [
                  {
                    translateY: badgeFloatAnim.interpolate({
                      inputRange: [-10, 10],
                      outputRange: [10, -10],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={{ fontSize: 16 }}>🚀</Text>
            <View>
              <Text style={[styles.badgeTitle, { color: theme.text }]}>
                Play Store Publisher
              </Text>
              <Text style={[styles.badgeSub, { color: theme.primary }]}>
                3 Years Experience
              </Text>
            </View>
          </Animated.View>
        </Animated.View>
      </View>
    </Animated.View>
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
  availablePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  availableText: {
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  status: {
    letterSpacing: 1.5,
    fontWeight: '600',
  },
  role: {
    fontWeight: '700',
    marginTop: 4,
  },
  exp: {
    fontWeight: '600',
    marginTop: 6,
  },
  name: {
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  buttons: {
    flexDirection: 'row',
    gap: 14,
  },
  primaryBtn: {
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 14,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  primaryBtnText: {
    color: '#050a05',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  secondaryBtn: {
    borderWidth: 1.5,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 14,
  },
  secondaryBtnText: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButton: {
    marginRight: 20,
    padding: 6,
  },
  glow: {
    position: 'absolute',
  },
  imageWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingBadge: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  badgeTopLeft: {
    top: 10,
    left: -10,
  },
  badgeBottomRight: {
    bottom: 10,
    right: -10,
  },
  badgeTitle: {
    fontSize: 12,
    fontWeight: '800',
  },
  badgeSub: {
    fontSize: 10,
    fontWeight: '600',
  },
});