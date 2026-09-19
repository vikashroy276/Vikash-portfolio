import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useThemeCustom } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import AppIcon from './common/AppIcon';

export default function Footer() {
  const { theme } = useThemeCustom();
  const { isMobile } = useResponsive();
  const navigation = useNavigation<any>();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
          flexDirection: isMobile ? 'column' : 'row',
          paddingHorizontal: isMobile ? 16 : 50,
          paddingVertical: isMobile ? 24 : 22,
          gap: isMobile ? 16 : 10,
        },
      ]}
    >
      {/* LEFT SIDE */}
      <View style={styles.leftSection}>
        <AppIcon name="react" size={24} color="#61DBFB" />
        <Text
          style={[
            styles.footerText,
            { color: theme.text, fontSize: isMobile ? 14 : 15 },
          ]}
        >
          Built with React Native
        </Text>
      </View>

      {/* POLICY LINKS */}
      <View style={styles.policyContainer}>
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <Text
            style={[
              styles.policyText,
              { color: theme.subText, fontSize: isMobile ? 13 : 14 },
            ]}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>

        <Text style={[styles.separator, { color: theme.border }]}>|</Text>

        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() => navigation.navigate('Terms')}
        >
          <Text
            style={[
              styles.policyText,
              { color: theme.subText, fontSize: isMobile ? 13 : 14 },
            ]}
          >
            Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>

      {/* RIGHT SIDE - SOCIAL ICONS */}
      <View
        style={[
          styles.socialContainer,
          {
            gap: isMobile ? 18 : 16,
          },
        ]}
      >
        {/* WHATSAPP */}
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() => Linking.openURL('https://wa.me/919471235283')}
          accessibilityLabel="WhatsApp"
        >
          <AppIcon name="whatsapp" size={24} color="#25D366" />
        </TouchableOpacity>

        {/* GITHUB */}
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() => Linking.openURL('https://github.com/vikashroy276')}
          accessibilityLabel="GitHub"
        >
          <AppIcon name="github" size={24} color={theme.text} />
        </TouchableOpacity>

        {/* LINKEDIN */}
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() =>
            Linking.openURL('https://linkedin.com/in/vikash-kumar-b9955a220/')
          }
          accessibilityLabel="LinkedIn"
        >
          <AppIcon name="linkedin" size={24} color="#0A66C2" />
        </TouchableOpacity>

        {/* INSTAGRAM */}
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() => Linking.openURL('https://instagram.com/')}
          accessibilityLabel="Instagram"
        >
          <AppIcon name="instagram" size={24} color="#E1306C" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    width: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footerText: {
    fontWeight: '700',
  },
  policyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  policyText: {
    fontWeight: '600',
  },
  separator: {
    fontSize: 14,
    marginHorizontal: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});