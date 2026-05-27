import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';

import {
  useThemeCustom,
} from '../context/ThemeContext';

export default function Footer() {

  const { theme } = useThemeCustom();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,

          borderTopColor:
            theme.border,
        },
      ]}
    >

      {/* LEFT SIDE */}

      <View style={styles.leftSection}>

        <FaReact
          size={26}
          color="#61DBFB"
        />

        <Text
          style={[
            styles.footerText,
            {
              color: theme.text,
            },
          ]}
        >
          Built in React Native
        </Text>

      </View>

      {/* RIGHT SIDE */}

      <View style={styles.socialContainer}>

        {/* WHATSAPP */}

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            Linking.openURL(
              'https://wa.me/919471235283'
            )
          }
        >

          <FaWhatsapp
            size={26}
            color="#25D366"
          />

        </TouchableOpacity>

        {/* GITHUB */}

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            Linking.openURL(
              'https://github.com/vikashroy276'
            )
          }
        >

          <FaGithub
            size={26}
            color={theme.text}
          />

        </TouchableOpacity>

        {/* LINKEDIN */}

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            Linking.openURL(
              'https://linkedin.com/in/vikash-kumar-b9955a220/'
            )
          }
        >

          <FaLinkedin
            size={26}
            color="#0A66C2"
          />

        </TouchableOpacity>

        {/* INSTAGRAM */}

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            Linking.openURL(
              'https://instagram.com/'
            )
          }
        >

          <FaInstagram
            size={26}
            color="#E1306C"
          />

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 50,
    paddingTop: 20,
    paddingBottom: 20,

    borderTopWidth: 1,
  },

  leftSection: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 14,
  },

  footerText: {
    fontSize: 16,

    fontWeight: '700',
  },

  socialContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  socialButton: {
    marginLeft: 24,
  },

});