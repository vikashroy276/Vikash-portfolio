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
  FaJava,

  FaHtml5,
} from 'react-icons/fa';

import {
  SiKotlin,
  SiTypescript,
  SiFirebase,
  SiJavascript,
  SiSqlite,
} from 'react-icons/si';

export default function FloatingIcons() {

const reactX = useRef(new Animated.Value(0)).current;
const reactY = useRef(new Animated.Value(0)).current;

const javaX = useRef(new Animated.Value(0)).current;
const javaY = useRef(new Animated.Value(0)).current;

const postmanX = useRef(new Animated.Value(0)).current;
const postmanY = useRef(new Animated.Value(0)).current;

const androidX = useRef(new Animated.Value(0)).current;
const androidY = useRef(new Animated.Value(0)).current;

const kotlinX = useRef(new Animated.Value(0)).current;
const kotlinY = useRef(new Animated.Value(0)).current;

const tsX = useRef(new Animated.Value(0)).current;
const tsY = useRef(new Animated.Value(0)).current;

const firebaseX = useRef(new Animated.Value(0)).current;
const firebaseY = useRef(new Animated.Value(0)).current;

const jsX = useRef(new Animated.Value(0)).current;
const jsY = useRef(new Animated.Value(0)).current;

const nodeX = useRef(new Animated.Value(0)).current;
const nodeY = useRef(new Animated.Value(0)).current;

const githubX = useRef(new Animated.Value(0)).current;
const githubY = useRef(new Animated.Value(0)).current;

const htmlX = useRef(new Animated.Value(0)).current;
const htmlY = useRef(new Animated.Value(0)).current;

const sqlX = useRef(new Animated.Value(0)).current;
const sqlY = useRef(new Animated.Value(0)).current;

const iotX = useRef(new Animated.Value(0)).current;
const iotY = useRef(new Animated.Value(0)).current;

 const createFloatingAnimation = (
  x: Animated.Value,
  y: Animated.Value,
) => {

  Animated.loop(
    Animated.sequence([

      Animated.parallel([
        Animated.timing(x, {
          toValue: 250,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(y, {
          toValue: -180,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(x, {
          toValue: -300,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(y, {
          toValue: 220,
          duration: 5000,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(x, {
          toValue: 180,
          duration: 4500,
          useNativeDriver: true,
        }),
        Animated.timing(y, {
          toValue: 300,
          duration: 4500,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(x, {
          toValue: 0,
          duration: 3500,
          useNativeDriver: true,
        }),
        Animated.timing(y, {
          toValue: 0,
          duration: 3500,
          useNativeDriver: true,
        }),
      ]),

    ])
  ).start();
};

 useEffect(() => {

  createFloatingAnimation(reactX, reactY);
  createFloatingAnimation(androidX, androidY);
  createFloatingAnimation(kotlinX, kotlinY);
  createFloatingAnimation(tsX, tsY);
  createFloatingAnimation(firebaseX, firebaseY);
  createFloatingAnimation(jsX, jsY);
  createFloatingAnimation(nodeX, nodeY);
  createFloatingAnimation(githubX, githubY);
  createFloatingAnimation(javaX, javaY);
  createFloatingAnimation(postmanX, postmanY);
  createFloatingAnimation(htmlX, htmlY);
  createFloatingAnimation(sqlX, sqlY);
  createFloatingAnimation(iotX, iotY);


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
          { translateX: reactX },
          { translateY: reactY },
        ],
      },
    ]}
  >
    <FaReact size={24} color="#61DBFB" />
  </Animated.View>

  {/* ANDROID */}
  <Animated.View
    style={[
      styles.iconBox,
      styles.android,
      {
        transform: [
          { translateX: androidX },
          { translateY: androidY },
        ],
      },
    ]}
  >
    <FaAndroid size={24} color="#3DDC84" />
  </Animated.View>

  {/* JAVA */}
  <Animated.View
    style={[
      styles.iconBox,
      styles.java,
      {
        transform: [
          { translateX: javaX },
          { translateY: javaY },
        ],
      },
    ]}
  >
    <SiKotlin size={22} color="#A97BFF" />
  </Animated.View>

  {/* KOTLIN */}
  <Animated.View
    style={[
      styles.iconBox,
      styles.kotlin,
      {
        transform: [
          { translateX: kotlinX },
          { translateY: kotlinY },
        ],
      },
    ]}
  >
    <SiKotlin size={22} color="#A97BFF" />
  </Animated.View>

  {/* TYPESCRIPT */}
  <Animated.View
    style={[
      styles.iconBox,
      styles.ts,
      {
        transform: [
          { translateX: tsX },
          { translateY: tsY },
        ],
      },
    ]}
  >
    <SiTypescript size={22} color="#3178C6" />
  </Animated.View>

  {/* FIREBASE */}
  <Animated.View
    style={[
      styles.iconBox,
      styles.firebase,
      {
        transform: [
          { translateX: firebaseX },
          { translateY: firebaseY },
        ],
      },
    ]}
  >
    <SiFirebase size={22} color="#FFA611" />
  </Animated.View>

  {/* POSTMAN */}
   <Animated.View
    style={[
      styles.iconBox,
      styles.java,
      {
        transform: [
          { translateX: postmanX },
          { translateY: postmanY },
        ],
      },
    ]}
  >
    <FaJava size={22} color="#FFA611" />
  </Animated.View>

  {/* JAVASCRIPT */}
  <Animated.View
    style={[
      styles.iconBox,
      styles.js,
      {
        transform: [
          { translateX: jsX },
          { translateY: jsY },
        ],
      },
    ]}
  >
    <SiJavascript size={22} color="#F7DF1E" />
  </Animated.View>

  {/* NODE */}
  <Animated.View
    style={[
      styles.iconBox,
      styles.node,
      {
        transform: [
          { translateX: nodeX },
          { translateY: nodeY },
        ],
      },
    ]}
  >
    <FaNodeJs size={24} color="#68A063" />
  </Animated.View>

  {/* GITHUB */}
  <Animated.View
    style={[
      styles.iconBox,
      styles.github,
      {
        transform: [
          { translateX: githubX },
          { translateY: githubY },
        ],
      },
    ]}
  >
    <FaGithub size={24} color="#ffffff" />
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
  zIndex: 99999,
  pointerEvents: 'none',
  overflow: 'hidden',
},
iconBox: {
  position: 'absolute',
  width: 55,
  height: 55,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.06)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.12)',
  shadowColor: '#ffffff',
  shadowOpacity: 0.15,
  shadowRadius: 12,
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

  java: {
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