import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { COLORS } from '../theme/colors';

export default function Journey() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        JOURNEY
      </Text>

      <View style={styles.timeline}>
        <View style={styles.dot} />

        <View style={styles.content}>
          <Text style={styles.year}>
            2023 - Present
          </Text>

          <Text style={styles.role}>
            Senior Android Developer
          </Text>

          <Text style={styles.company}>
            TechCorp Solutions
          </Text>
        </View>
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

  timeline: {
    flexDirection: 'row',
  },

  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.green,
    marginTop: 5,
  },

  content: {
    marginLeft: 20,
  },

  year: {
    color: COLORS.green,
    marginBottom: 6,
  },

  role: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },

  company: {
    color: COLORS.textDim,
    marginTop: 6,
  },
});