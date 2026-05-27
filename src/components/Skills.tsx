import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { COLORS } from '../theme/colors';

const skills = [
  'React Native',
  'Kotlin',
  'Jetpack Compose',
  'MVVM',
  'Firebase',
  'Redux',
  'TypeScript',
  'REST APIs',
];

export default function Skills() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        SKILLS
      </Text>

      <View style={styles.wrap}>
        {skills.map(skill => (
          <View key={skill} style={styles.pill}>
            <Text style={styles.pillText}>
              {skill}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 60,
  },

  heading: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 24,
  },

  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  pill: {
    backgroundColor: COLORS.bg3,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  pillText: {
    color: COLORS.green,
  },
});