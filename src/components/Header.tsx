import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
  Modal,
  Pressable,
} from 'react-native';

import { useThemeCustom } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { useScroll } from '../context/ScrollContext';
import AppIcon from './common/AppIcon';

const menuItems = [
  'Home',
  'About',
  'Projects',
  'Resume',
  'Contact',
];

export default function Header() {
  const [activeItem, setActiveItem] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme, isDark, toggleTheme } = useThemeCustom();
  const { isMobile } = useResponsive();
  const { scrollToSection } = useScroll();

  /* NAVIGATION */
  const handleMenuClick = (item: string) => {
    setActiveItem(item);
    if (isMobile) {
      setMobileMenuOpen(false);
    }

    if (item === 'Resume') {
      if (Platform.OS === 'web' && typeof document !== 'undefined') {
        const link = document.createElement('a');
        link.href = '/Vikash_Kumar_Resume.pdf';
        link.download = 'Vikash_Kumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        Linking.openURL('/Vikash_Kumar_Resume.pdf').catch(() => {
          // fallback
        });
      }
      return;
    }

    const sectionId = item.toLowerCase();
    scrollToSection(sectionId);
  };

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark ? 'rgba(5, 10, 5, 0.92)' : 'rgba(255, 255, 255, 0.94)',
            borderBottomColor: theme.border,
            paddingHorizontal: isMobile ? 16 : 40,
            height: isMobile ? 70 : 80,
          },
        ]}
      >
        {/* LOGO */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleMenuClick('Home')}
        >
          <Text
            style={[
              styles.logo,
              {
                color: theme.primary,
                fontSize: isMobile ? 21 : 26,
              },
            ]}
          >
            {'<'}
            Vikash{' '}
            <Text style={{ color: theme.text }}>
              Kumar
            </Text>
            {' />'}
          </Text>
        </TouchableOpacity>

        {/* DESKTOP NAVIGATION */}
        {!isMobile ? (
          <View style={styles.rightContainer}>
            <View style={styles.menuContainer}>
              {menuItems.map((item) => {
                const isActive = activeItem === item;
                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => handleMenuClick(item)}
                    style={styles.menuButton}
                  >
                    <Text
                      style={[
                        styles.menuText,
                        {
                          color: isActive ? theme.primary : theme.subText,
                        },
                      ]}
                    >
                      {item}
                    </Text>

                    {isActive && (
                      <View
                        style={[
                          styles.activeLine,
                          { backgroundColor: theme.primary },
                        ]}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* THEME BUTTON */}
            <TouchableOpacity
              style={[
                styles.toggleButton,
                { borderColor: theme.primary },
              ]}
              onPress={toggleTheme}
              accessibilityLabel="Toggle Theme"
            >
              <Text style={{ color: theme.primary, fontSize: 18 }}>
                {isDark ? '☀️' : '🌙'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* MOBILE CONTROLS */
          <View style={styles.mobileRightContainer}>
            {/* THEME TOGGLE */}
            <TouchableOpacity
              style={[
                styles.mobileToggleButton,
                { borderColor: theme.primary },
              ]}
              onPress={toggleTheme}
              accessibilityLabel="Toggle Theme"
            >
              <Text style={{ fontSize: 16 }}>
                {isDark ? '☀️' : '🌙'}
              </Text>
            </TouchableOpacity>

            {/* HAMBURGER BUTTON */}
            <TouchableOpacity
              style={[
                styles.hamburgerButton,
                {
                  backgroundColor: isDark
                    ? 'rgba(0, 255, 136, 0.12)'
                    : 'rgba(0, 204, 102, 0.12)',
                  borderColor: theme.border,
                },
              ]}
              onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
              accessibilityLabel="Menu"
            >
              <AppIcon
                name={mobileMenuOpen ? 'close' : 'menu'}
                size={20}
                color={theme.primary}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* MOBILE MENU DROPDOWN / DRAWER */}
      {isMobile && mobileMenuOpen && (
        <View
          style={[
            styles.mobileMenuDropdown,
            {
              backgroundColor: isDark
                ? 'rgba(8, 16, 8, 0.98)'
                : 'rgba(255, 255, 255, 0.98)',
              borderBottomColor: theme.border,
              top: 70,
            },
          ]}
        >
          {menuItems.map((item) => {
            const isActive = activeItem === item;
            return (
              <TouchableOpacity
                key={item}
                style={[
                  styles.mobileMenuItem,
                  isActive && {
                    backgroundColor: isDark
                      ? 'rgba(0, 255, 136, 0.12)'
                      : 'rgba(0, 204, 102, 0.1)',
                  },
                ]}
                onPress={() => handleMenuClick(item)}
              >
                <Text
                  style={[
                    styles.mobileMenuText,
                    {
                      color: isActive ? theme.primary : theme.text,
                      fontWeight: isActive ? '800' : '600',
                    },
                  ]}
                >
                  {item}
                </Text>
                {isActive && (
                  <View
                    style={[
                      styles.mobileActiveDot,
                      { backgroundColor: theme.primary },
                    ]}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  logo: {
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 6,
  },
  menuText: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  activeLine: {
    width: '100%',
    height: 2.5,
    marginTop: 6,
    borderRadius: 10,
  },
  toggleButton: {
    width: 42,
    height: 42,
    borderWidth: 1.5,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
  },
  mobileRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mobileToggleButton: {
    width: 38,
    height: 38,
    borderWidth: 1.5,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburgerButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileMenuDropdown: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 9998,
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },
  mobileMenuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 3,
  },
  mobileMenuText: {
    fontSize: 16,
    letterSpacing: 0.5,
  },
  mobileActiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});