import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {
  useThemeCustom,
} from '../context/ThemeContext';

const menuItems = [
  'Home',
  'About',
  'Projects',
  'Resume',
  'Contact',
];

export default function Header() {

  const [activeItem, setActiveItem] =
    useState('Home');

  const {
    theme,
    isDark,
    toggleTheme,
  } = useThemeCustom();

  /* NAVIGATION */

  const handleMenuClick = (
    item: string
  ) => {

    setActiveItem(item);

    /* HOME */

    if (item === 'Home') {

      const section =
        document.getElementById(
          'hero'
        );

      section?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    /* ABOUT */

    if (item === 'About') {

      const section =
        document.getElementById(
          'about'
        );

      section?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    /* PROJECTS */

    if (item === 'Projects') {

      const section =
        document.getElementById(
          'projects'
        );

      section?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    /* CONTACT */

    if (item === 'Contact') {

      const section =
        document.getElementById(
          'contact'
        );

      section?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    /* RESUME */

    if (item === 'Resume') {

      const link =
        document.createElement('a');

      link.href = '/resume.pdf';

      link.download =
        'Vikash_Kumar_Resume.pdf';

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,

          borderBottomColor:
            theme.border,
        },
      ]}
    >

      {/* LOGO */}

      <Text
        style={[
          styles.logo,
          {
            color: theme.primary,
          },
        ]}
      >
        {'<'}
        Vikash{' '}

        <Text
          style={{
            color: theme.text,
          }}
        >
          Kumar
        </Text>

        {' />'}

      </Text>

      {/* RIGHT SIDE */}

      <View style={styles.rightContainer}>

        {/* MENU */}

        <View style={styles.menuContainer}>

          {menuItems.map(item => {

            const isActive =
              activeItem === item;

            return (
              <TouchableOpacity
                key={item}
                onPress={() =>
                  handleMenuClick(
                    item
                  )
                }
                style={styles.menuButton}
              >

                <Text
                  style={[
                    styles.menuText,
                    {
                      color: isActive
                        ? theme.primary
                        : theme.subText,
                    },
                  ]}
                >
                  {item}
                </Text>

                {isActive && (
                  <View
                    style={[
                      styles.activeLine,
                      {
                        backgroundColor:
                          theme.primary,
                      },
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
            {
              borderColor:
                theme.primary,
            },
          ]}
          onPress={toggleTheme}
        >

          <Text
            style={{
              color: theme.primary,
              fontSize: 18,
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

 container: {
  position: 'absolute',

  top: 0,

  zIndex: 999,

  width: '100%',

  flexDirection: 'row',

  justifyContent: 'space-between',
  alignItems: 'center',

  paddingHorizontal: 40,

  height: 80,

  borderBottomWidth: 1,
},

  logo: {
    fontSize: 26,

    fontWeight: '900',
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
    marginHorizontal: 18,

    alignItems: 'center',
  },

  menuText: {
    fontSize: 14,

    fontWeight: '600',

    letterSpacing: 1,
  },

  activeLine: {
    width: '100%',

    height: 2,

    marginTop: 6,

    borderRadius: 10,
  },

  toggleButton: {
    width: 45,
    height: 45,

    borderWidth: 1,

    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 20,
  },

});