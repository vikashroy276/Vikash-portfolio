import React from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Journey from '../components/Journey';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingIcons from '../context/FloatingIcons';

import {
  useThemeCustom,
} from '../context/ThemeContext';

export default function HomeScreen() {

  const { theme } = useThemeCustom();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >

      {/* HEADER */}

      <Header />

      {/* FLOATING ICONS */}

      <FloatingIcons />

      {/* CONTENT */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
      >

        <View style={{ marginBottom: 80 }}>
          <Hero />
        </View>

        <View style={{ marginBottom: 80 }}>
          <About />
        </View>

        <View style={{ marginBottom: 80 }}>
          <Projects />
        </View>

        {/* <Journey /> */}

        {/* <Resume /> */}

        <View style={{ marginBottom: 80 }}>
          <Contact />
        </View>

        <Footer />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

});