import React, {
  useEffect,
  useRef,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Animated,
} from 'react-native';

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

import {
  useThemeCustom,
} from '../context/ThemeContext';

export default function Hero() {

  const { theme } = useThemeCustom();

  /* LEFT TEXT ANIMATION */

  const leftAnim = useRef(
    new Animated.Value(-300)
  ).current;

  const leftOpacity = useRef(
    new Animated.Value(0)
  ).current;

  /* RIGHT IMAGE ANIMATION */

  const rightAnim = useRef(
    new Animated.Value(300)
  ).current;

  const rightOpacity = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {

    Animated.parallel([

      Animated.timing(leftAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),

      Animated.timing(leftOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),

      Animated.timing(rightAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),

      Animated.timing(rightOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),

    ]).start();

  }, []);

  return (
    <View nativeID="hero"
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >

      {/* LEFT CONTENT */}

      <Animated.View
        style={[
          styles.leftSection,
          {
            opacity: leftOpacity,
            transform: [
              {
                translateX: leftAnim,
              },
            ],
          },
        ]}
      >

        <Text
  style={[
    styles.availableText,
    {
      color: theme.primary,
    },
  ]}
>
  Available for  Opportunities
</Text>

        <Text
          style={[
            styles.status,
            {
              color: theme.primary,
            },
          ]}
        >
          ● Hello, I'm
        </Text>

        <Text
          style={[
            styles.name,
            {
              color: theme.text,
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
            },
          ]}
        >
          Android App Developer
        </Text>

        <Text
          style={[
            styles.exp,
            {
              color: theme.primary,
            },
          ]}
        >
          3.5 Years of Experience
        </Text>

        {/* BUTTON */}

        <View style={styles.buttons}>

          <TouchableOpacity
            style={[
              styles.secondary,
              {
                borderColor: theme.primary,
              },
            ]}
          >
            <Text
              style={[
                styles.secondaryText,
                {
                  color: theme.primary,
                },
              ]}
            >
              Contact Me
            </Text>
          </TouchableOpacity>

        </View>

        {/* SOCIAL ICONS */}

        <View style={styles.socialContainer}>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://linkedin.com/in/vikash-kumar-b9955a220/'
              )
            }
            style={styles.socialButton}
          >
            <FaLinkedin
              size={36}
              color="#0A66C2"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://github.com/vikashroy276'
              )
            }
            style={styles.socialButton}
          >
            <FaGithub
              size={36}
              color={
                theme.text
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://wa.me/919471235283'
              )
            }
            style={styles.socialButton}
          >
            <FaWhatsapp
              size={36}
              color="#25D366"
            />
          </TouchableOpacity>

        </View>

      </Animated.View>

      {/* RIGHT IMAGE */}

      <Animated.View
        style={[
          styles.rightSection,
          {
            opacity: rightOpacity,
            transform: [
              {
                translateX: rightAnim,
              },
            ],
          },
        ]}
      >

        <View
          style={[
            styles.glow,
            {
              backgroundColor:
                theme.primary + '20',
            },
          ]}
        />

        <Image
          source={require('../../assets/iconss.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />

      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 50,

    marginTop: 0,
    paddingTop: 0,
  },

  leftSection: {
    flex: 1,

    paddingRight: 50,
  },

  availableText: {
  fontSize: 16,

  fontWeight: '700',

  marginBottom: 25,

  letterSpacing: 1,
},

  rightSection: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },

  status: {
    fontSize: 20,

    letterSpacing: 2,
  },

  role: {
    fontSize: 22,

    fontWeight: '700',
  },

  exp: {
    fontSize: 22,

    fontWeight: '700',

    marginTop: 10,
  },

  name: {
    fontSize: 46,

    fontWeight: '900',

    lineHeight: 90,
  },

  buttons: {
    flexDirection: 'row',

    marginTop: 50,
  },

  secondary: {
    borderWidth: 1.5,

    paddingHorizontal: 34,
    paddingVertical: 8,

    borderRadius: 14,
  },

  secondaryText: {
    fontSize: 16,

    fontWeight: '700',
  },

  socialContainer: {
    flexDirection: 'row',

    marginTop: 35,

    alignItems: 'center',
  },

  socialButton: {
    marginRight: 24,
  },

  glow: {
    position: 'absolute',

    width: 500,
    height: 500,

    borderRadius: 300,
  },

  heroImage: {
    width: 600,
    height: 600,
  },

});