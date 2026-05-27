import React, {
  useEffect,
  useRef,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

import {
  FaAndroid,
  FaJava,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiKotlin,
  SiJavascript,
  SiFirebase,
  SiJetpackcompose,
  SiGoogleplay,
} from 'react-icons/si';

import { SiSqlite } from 'react-icons/si';



import {
  useThemeCustom,
} from '../context/ThemeContext';

export default function About() {

  const { theme } = useThemeCustom();

  /* TEXT ANIMATION */

  const textAnim = useRef(
    new Animated.Value(300)
  ).current;

  const textOpacity = useRef(
    new Animated.Value(0)
  ).current;

  /* IMAGE ANIMATION */

  const imageAnim = useRef(
    new Animated.Value(-300)
  ).current;

  const imageOpacity = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {

    Animated.parallel([

      /* TEXT */

      Animated.timing(textAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),

      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),

      /* IMAGE */

      Animated.timing(imageAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),

      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),

    ]).start();

  }, []);

  return (
    <View nativeID="about"
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}
    >

      {/* LEFT SECTION */}

      <Animated.View
        style={[
          styles.leftSection,
          {
            opacity: textOpacity,
            transform: [
              {
                translateX: textAnim,
              },
            ],
          },
        ]}
      >

        <Text
          style={[
            styles.heading,
            {
              color: theme.primary,
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
            },
          ]}
        >

          Hi there! I'm Vikash Kumar,an Android App Developer with 3.5 years of experience building
          modern, scalable and high-performance mobile applications.
          I specialize in Android development using Kotlin,Java, Jetpack compose ,MVVM and modern mobile architectures.
          I love creating beautiful user experiences with optimized performance and clean code structure.
          My passion is transforming ideas into premium digital experiences with smooth animations and
          scalable backend integrations.
        </Text>

        {/* SKILLS */}

        <Text
          style={[
            styles.skillsTitle,
            {
              color: theme.primary,
            },
          ]}
        >
          Here are my main skills:
        </Text>

       <View style={styles.skillsRow}>

  {/* ANDROID */}

  <FaAndroid
    size={35}
    color="#3DDC84"
  />

  {/* JAVA */}

  <FaJava
    size={35}
    color="#EA2D2E"
  />

  {/* KOTLIN */}

  <SiKotlin
    size={35}
    color="#A97BFF"
  />

  {/* PLAY STORE */}

  <SiGoogleplay
    size={35}
    color="#3BCCFF"
  />

  {/* SQLITE / ROOM */}

  <SiSqlite
    size={35}
    color="#0a7611"
  />

  {/* JAVASCRIPT */}

  <SiJavascript
    size={35}
    color="#F7DF1E"
  />

  <SiFirebase
  size={35}
  color='#b8a410' />

</View>

      </Animated.View>

      {/* RIGHT SECTION */}

      <Animated.View
        style={[
          styles.rightSection,
          {
            opacity: imageOpacity,
            transform: [
              {
                translateX: imageAnim,
              },
            ],
          },
        ]}
      >

        <View
          style={[
            styles.circle,
            {
              backgroundColor:
                theme.primary,
            },
          ]}
        >

          <Image
            source={require('../../assets/profile.png')}
            style={styles.profileImage}
            resizeMode="cover"
          />

        </View>

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
    paddingBottom: 0,
  },

  leftSection: {
    flex: 1,

    paddingRight: 60,
  },

  rightSection: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 20,
  },

  description: {
    fontSize: 18,
    lineHeight: 30,
    maxWidth: 850,
  },

  skillsTitle: {
    fontSize: 24,

    fontWeight: '700',

    marginTop: 40,
    marginBottom: 30,
  },

 skillsRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 28,
  flexWrap: 'wrap',
  marginTop: 20,
},

  circle: {
    width: 400,
    height: 400,

    borderRadius: 220,

    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',

    borderWidth: 6,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  profileImage: {
    width: 520,
    height: 700,

    borderRadius: 260,
  },

});