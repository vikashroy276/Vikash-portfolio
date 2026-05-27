import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { COLORS } from '../theme/colors';

export default function Resume() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        RESUME
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>
          Senior Android Developer
        </Text>

        <Text style={styles.company}>
          TechCorp Solutions
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Download CV
        </Text>
      </TouchableOpacity>
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

  card: {
    backgroundColor: COLORS.bg3,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
    marginBottom: 24,
  },

  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },

  company: {
    color: COLORS.textDim,
    marginTop: 8,
  },

  button: {
    backgroundColor: COLORS.green,
    padding: 16,
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.black,
    fontWeight: '700',
  },
});