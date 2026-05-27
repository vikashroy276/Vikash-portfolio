import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Linking,
  Pressable,
} from 'react-native';

import {
  FaGithub,
  FaFolderOpen,
  FaExternalLinkAlt,
} from 'react-icons/fa';

import {
  useThemeCustom,
} from '../context/ThemeContext';

import { projects } from '../data/projects';

/* PROJECT CARD */

function ProjectCard({
  item,
  theme,
}: any) {

  const [hovered, setHovered] =
    useState(false);

  const featured =
    item.featured;

  return (
    <Pressable

      onHoverIn={() =>
        setHovered(true)
      }

      onHoverOut={() =>
        setHovered(false)
      }

      style={[
        styles.card,
        {
          backgroundColor:
            hovered
              ? '#0d3b2e'
              : featured
                ? theme.primary
                : theme.card,

          transform: [
            {
              scale:
                hovered
                  ? 1.04
                  : featured
                    ? 1.02
                    : 1,
            },
          ],
        },
      ]}
    >

      {/* TOP */}

      <View style={styles.topRow}>

        <FaFolderOpen
          size={34}
          color="#00ff88"
        />

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              item.github
            )
          }
        >

          <FaGithub
            size={30}
            color={
              hovered
                ? '#00ff88'
                : featured
                  ? '#111'
                  : '#00ff88'
            }
          />

        </TouchableOpacity>

      </View>

      {/* TITLE */}

      <Text
        style={[
          styles.projectTitle,
          {
            color:
              hovered
                ? '#ffffff'
                : featured
                  ? '#ffffff'
                  : theme.text,
          },
        ]}
      >
        {item.title}
      </Text>

      {/* DESCRIPTION */}

      <Text
        style={[
          styles.description,
          {
            color:
              hovered
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
            color:
              hovered
                ? '#00ff88'
                : theme.primary,
          },
        ]}
      >
        {item.tech}
      </Text>

      {/* LINK */}

      <TouchableOpacity
        style={styles.linkRow}
      >

        <Text
          style={[
            styles.viewText,
            {
              color:
                hovered
                  ? '#00ff88'
                  : featured
                    ? '#ffffff'
                    : '#00ff88',
            },
          ]}
        >
          View Project
        </Text>

        <FaExternalLinkAlt
          size={13}
          color={
            hovered
              ? '#00ff88'
              : featured
                ? '#ffffff'
                : '#00ff88'
          }
        />

      </TouchableOpacity>

    </Pressable>
  );
}

export default function Projects() {

  const { theme } = useThemeCustom();

  const fadeAnim = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

  }, []);

  return (
    <View nativeID="projects"
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}
    >

      {/* TITLE */}

      <Text
        style={[
          styles.heading,
          {
            color: theme.text,
          },
        ]}
      >
        My Projects
      </Text>

      {/* PROJECT ROW */}

      <Animated.View
        style={[
          styles.projectsRow,
          {
            opacity: fadeAnim,
          },
        ]}
      >

        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            item={item}
            theme={theme}
          />
        ))}

      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 50,
    paddingTop: 20,
    paddingBottom: 50,
  },

  heading: {
    fontSize: 48,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 50,
  },

  tech: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 20,
    lineHeight: 24,
  },

  projectsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: 25,
  },

  card: {
    width: '30%',
    minHeight: 360,
    borderRadius: 22,
    padding: 22,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  projectTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 24,
    marginBottom: 18,
  },

  description: {
    fontSize: 16,
    lineHeight: 30,
  },

  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
  },

  viewText: {
    fontSize: 15,
    fontWeight: '700',
  },

});