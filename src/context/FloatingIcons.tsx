import React, {
  useEffect,
  useRef,
} from 'react';

import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';

import {
  FaReact,
  FaAndroid,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';

import {
  SiKotlin,
  SiTypescript,
  SiFirebase,
  SiJavascript,
} from 'react-icons/si';

export default function FloatingIcons() {

  const float1 = useRef(
    new Animated.Value(0)
  ).current;

  const float2 = useRef(
    new Animated.Value(0)
  ).current;

  const float3 = useRef(
    new Animated.Value(0)
  ).current;

  const float4 = useRef(
    new Animated.Value(0)
  ).current;

  const float5 = useRef(
    new Animated.Value(0)
  ).current;

  const float6 = useRef(
    new Animated.Value(0)
  ).current;

  const float7 = useRef(
    new Animated.Value(0)
  ).current;

  const float8 = useRef(
    new Animated.Value(0)
  ).current;

  const startAnimation = (
    value: Animated.Value,
    moveY: number,
    duration: number,
  ) => {

    Animated.loop(
      Animated.sequence([

        Animated.timing(value, {
          toValue: moveY,
          duration,
          useNativeDriver: true,
        }),

        Animated.timing(value, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),

      ])
    ).start();
  };

  useEffect(() => {

    startAnimation(float1, -45, 900);

    startAnimation(float2, 40, 1100);

    startAnimation(float3, -50, 1200);

    startAnimation(float4, 45, 1000);

    startAnimation(float5, -55, 1400);

    startAnimation(float6, 38, 1300);

    startAnimation(float7, -42, 1150);

    startAnimation(float8, 50, 1000);

  }, []);

  return (
    <View style={styles.container}>

      {/* REACT */}

      <Animated.View
        style={[
          styles.iconBox,
          styles.react,
          {
            transform: [
              { translateY: float1 },
            ],
          },
        ]}
      >
        <FaReact
          size={42}
          color="#61DBFB"
        />
      </Animated.View>

      {/* ANDROID */}

      <Animated.View
        style={[
          styles.iconBox,
          styles.android,
          {
            transform: [
              { translateY: float2 },
            ],
          },
        ]}
      >
        <FaAndroid
          size={42}
          color="#3DDC84"
        />
      </Animated.View>

      {/* KOTLIN */}

      <Animated.View
        style={[
          styles.iconBox,
          styles.kotlin,
          {
            transform: [
              { translateY: float3 },
            ],
          },
        ]}
      >
        <SiKotlin
          size={38}
          color="#A97BFF"
        />
      </Animated.View>

      {/* TYPESCRIPT */}

      <Animated.View
        style={[
          styles.iconBox,
          styles.ts,
          {
            transform: [
              { translateY: float4 },
            ],
          },
        ]}
      >
        <SiTypescript
          size={38}
          color="#3178C6"
        />
      </Animated.View>

      {/* FIREBASE */}

      <Animated.View
        style={[
          styles.iconBox,
          styles.firebase,
          {
            transform: [
              { translateY: float5 },
            ],
          },
        ]}
      >
        <SiFirebase
          size={38}
          color="#FFA611"
        />
      </Animated.View>

      {/* JAVASCRIPT */}

      <Animated.View
        style={[
          styles.iconBox,
          styles.js,
          {
            transform: [
              { translateY: float6 },
            ],
          },
        ]}
      >
        <SiJavascript
          size={38}
          color="#F7DF1E"
        />
      </Animated.View>

      {/* NODE */}

      <Animated.View
        style={[
          styles.iconBox,
          styles.node,
          {
            transform: [
              { translateY: float7 },
            ],
          },
        ]}
      >
        <FaNodeJs
          size={40}
          color="#68A063"
        />
      </Animated.View>

      {/* GITHUB */}

      <Animated.View
        style={[
          styles.iconBox,
          styles.github,
          {
            transform: [
              { translateY: float8 },
            ],
          },
        ]}
      >
        <FaGithub
          size={40}
          color="#ffffff"
        />
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({

 container: {
  position: 'absolute',

  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 9999,

  pointerEvents: 'none',
},
  iconBox: {
  position: 'absolute',

  width: 90,
  height: 90,

  borderRadius: 50,

  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'rgba(255,255,255,0.08)',

  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',

  shadowColor: '#ffffff',
  shadowOpacity: 0.2,
  shadowRadius: 20,

},

  react: {
    top: 160,
    left: 70,
  },

  android: {
    top: 420,
    right: 80,
  },

  kotlin: {
    bottom: 220,
    left: 220,
  },

  ts: {
    top: 240,
    right: 350,
  },

  firebase: {
    bottom: 120,
    right: 180,
  },

  js: {
    top: 650,
    left: 500,
  },

  node: {
    top: 130,
    right: 520,
  },

  github: {
    bottom: 350,
    right: 550,
  },

});