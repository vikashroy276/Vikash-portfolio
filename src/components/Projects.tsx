import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Linking,
  Pressable,
} from 'react-native';

import { useThemeCustom } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { projects } from '../data/projects';
import AppIcon from './common/AppIcon';

/* PROJECT CARD */
function ProjectCard({
  item,
  theme,
  cardWidth,
  isMobile,
}: {
  item: any;
  theme: any;
  cardWidth: any;
  isMobile: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const featured = item.featured;

  const handleOpenLink = (url?: string) => {
    if (url) {
      Linking.openURL(url);
    } else if (item.github) {
      Linking.openURL(item.github);
    }
  };

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={[
        styles.card,
        {
          width: cardWidth,
          minHeight: isMobile ? 260 : 340,
          padding: isMobile ? 18 : 22,
          backgroundColor: hovered
            ? '#0d3b2e'
            : featured
              ? theme.primary
              : theme.card,
          transform: [
            {
              scale: hovered ? 1.03 : featured ? 1.01 : 1,
            },
          ],
        },
      ]}
    >
      {/* TOP ICONS ROW */}
      <View style={styles.topRow}>
        <AppIcon name="folder" size={isMobile ? 28 : 34} color="#00ff88" />

        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => Linking.openURL(item.github)}
          accessibilityLabel={`View ${item.title} on GitHub`}
        >
          <AppIcon
            name="github"
            size={isMobile ? 24 : 28}
            color={hovered ? '#00ff88' : featured ? '#111111' : '#00ff88'}
          />
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={[
            styles.projectTitle,
            {
              fontSize: isMobile ? 19 : 23,
              marginTop: isMobile ? 14 : 20,
              marginBottom: isMobile ? 10 : 14,
              color: hovered
                ? '#ffffff'
                : featured
                  ? '#ffffff'
                  : theme.text,
            },
          ]}
        >
          {item.title}
        </Text>

        <Text
          style={[
            styles.description,
            {
              fontSize: isMobile ? 14 : 15.5,
              lineHeight: isMobile ? 22 : 26,
              color: hovered
                ? '#d6fff1'
                : featured
                  ? '#ffffff'
                  : theme.subText,
            },
          ]}
        >
          {item.description}
        </Text>

        <Text
          style={[
            styles.tech,
            {
              fontSize: isMobile ? 12.5 : 13.5,
              color: hovered ? '#00ff88' : theme.primary,
            },
          ]}
        >
          {item.tech}
        </Text>
      </View>

      {/* LINK BUTTON */}
      <TouchableOpacity
        style={styles.linkRow}
        onPress={() => handleOpenLink(item.url)}
      >
        <Text
          style={[
            styles.viewText,
            {
              fontSize: isMobile ? 14 : 15,
              color: hovered ? '#00ff88' : featured ? '#ffffff' : '#00ff88',
            },
          ]}
        >
          View Project
        </Text>
        <AppIcon
          name="external"
          size={12}
          color={hovered ? '#00ff88' : featured ? '#ffffff' : '#00ff88'}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

export default function Projects() {
  const { theme } = useThemeCustom();
  const { isMobile, isTablet } = useResponsive();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const cardWidth = isMobile ? '100%' : isTablet ? '48%' : '31.5%';

  return (
    <View
      nativeID="projects"
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          paddingHorizontal: isMobile ? 16 : 50,
        },
      ]}
    >
      {/* SECTION HEADING */}
      <Text
        style={[
          styles.heading,
          {
            color: theme.text,
            fontSize: isMobile ? 30 : 46,
            marginBottom: isMobile ? 24 : 44,
          },
        ]}
      >
        Featured Projects
      </Text>

      {/* PROJECT GRID */}
      <Animated.View
        style={[
          styles.projectsRow,
          {
            opacity: fadeAnim,
            gap: isMobile ? 16 : 24,
          },
        ]}
      >
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            item={item}
            theme={theme}
            cardWidth={cardWidth}
            isMobile={isMobile}
          />
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 30,
    width: '100%',
  },
  heading: {
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  projectsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectTitle: {
    fontWeight: '800',
  },
  description: {
    marginBottom: 12,
  },
  tech: {
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 6,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 18,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
  },
  viewText: {
    fontWeight: '700',
  },
});