import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';
import AppIcon from '../components/common/AppIcon';

export default function FloatingIcons() {
  const { isMobile } = useResponsive();

  const reactX = useRef(new Animated.Value(0)).current;
  const reactY = useRef(new Animated.Value(0)).current;

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

  const createFloatingAnimation = (
    x: Animated.Value,
    y: Animated.Value,
    scale: number
  ) => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(x, {
            toValue: 35 * scale,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(y, {
            toValue: -25 * scale,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(x, {
            toValue: -40 * scale,
            duration: 5000,
            useNativeDriver: true,
          }),
          Animated.timing(y, {
            toValue: 30 * scale,
            duration: 5000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(x, {
            toValue: 25 * scale,
            duration: 4500,
            useNativeDriver: true,
          }),
          Animated.timing(y, {
            toValue: 40 * scale,
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
    const scale = isMobile ? 0.7 : 2.5;
    createFloatingAnimation(reactX, reactY, scale);
    createFloatingAnimation(androidX, androidY, scale);
    createFloatingAnimation(kotlinX, kotlinY, scale);
    createFloatingAnimation(firebaseX, firebaseY, scale);

    if (!isMobile) {
      createFloatingAnimation(tsX, tsY, scale);
      createFloatingAnimation(jsX, jsY, scale);
      createFloatingAnimation(nodeX, nodeY, scale);
      createFloatingAnimation(githubX, githubY, scale);
    }
  }, [isMobile]);

  const boxSize = isMobile ? 42 : 55;
  const iconSize = isMobile ? 18 : 22;

  return (
    <View style={styles.container} pointerEvents="none">
      {/* REACT */}
      <Animated.View
        style={[
          styles.iconBox,
          {
            width: boxSize,
            height: boxSize,
            borderRadius: boxSize / 2,
            top: isMobile ? 90 : 160,
            left: isMobile ? 16 : 70,
            transform: [{ translateX: reactX }, { translateY: reactY }],
          },
        ]}
      >
        <AppIcon name="react" size={iconSize} color="#61DBFB" />
      </Animated.View>

      {/* ANDROID */}
      <Animated.View
        style={[
          styles.iconBox,
          {
            width: boxSize,
            height: boxSize,
            borderRadius: boxSize / 2,
            top: isMobile ? 260 : 420,
            right: isMobile ? 16 : 80,
            transform: [{ translateX: androidX }, { translateY: androidY }],
          },
        ]}
      >
        <AppIcon name="android" size={iconSize} color="#3DDC84" />
      </Animated.View>

      {/* KOTLIN */}
      <Animated.View
        style={[
          styles.iconBox,
          {
            width: boxSize,
            height: boxSize,
            borderRadius: boxSize / 2,
            bottom: isMobile ? 120 : 220,
            left: isMobile ? 20 : 180,
            transform: [{ translateX: kotlinX }, { translateY: kotlinY }],
          },
        ]}
      >
        <AppIcon name="kotlin" size={iconSize} color="#A97BFF" />
      </Animated.View>

      {/* FIREBASE */}
      <Animated.View
        style={[
          styles.iconBox,
          {
            width: boxSize,
            height: boxSize,
            borderRadius: boxSize / 2,
            bottom: isMobile ? 80 : 120,
            right: isMobile ? 20 : 180,
            transform: [{ translateX: firebaseX }, { translateY: firebaseY }],
          },
        ]}
      >
        <AppIcon name="firebase" size={iconSize} color="#FFA611" />
      </Animated.View>

      {/* DESKTOP-ONLY EXTRA BADGES */}
      {!isMobile && (
        <>
          <Animated.View
            style={[
              styles.iconBox,
              {
                width: boxSize,
                height: boxSize,
                borderRadius: boxSize / 2,
                top: 240,
                right: 320,
                transform: [{ translateX: tsX }, { translateY: tsY }],
              },
            ]}
          >
            <AppIcon name="typescript" size={iconSize} color="#3178C6" />
          </Animated.View>

          <Animated.View
            style={[
              styles.iconBox,
              {
                width: boxSize,
                height: boxSize,
                borderRadius: boxSize / 2,
                top: 600,
                left: 360,
                transform: [{ translateX: jsX }, { translateY: jsY }],
              },
            ]}
          >
            <AppIcon name="javascript" size={iconSize} color="#F7DF1E" />
          </Animated.View>

          <Animated.View
            style={[
              styles.iconBox,
              {
                width: boxSize,
                height: boxSize,
                borderRadius: boxSize / 2,
                top: 130,
                right: 480,
                transform: [{ translateX: nodeX }, { translateY: nodeY }],
              },
            ]}
          >
            <AppIcon name="nodejs" size={iconSize} color="#68A063" />
          </Animated.View>

          <Animated.View
            style={[
              styles.iconBox,
              {
                width: boxSize,
                height: boxSize,
                borderRadius: boxSize / 2,
                bottom: 350,
                right: 460,
                transform: [{ translateX: githubX }, { translateY: githubY }],
              },
            ]}
          >
            <AppIcon name="github" size={iconSize} color="#ffffff" />
          </Animated.View>
        </>
      )}
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
    zIndex: 1,
    overflow: 'hidden',
  },
  iconBox: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#ffffff',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
});