import React, { useRef, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingIcons from '../context/FloatingIcons';

import { useThemeCustom } from '../context/ThemeContext';
import { ScrollProvider, useScroll } from '../context/ScrollContext';
import { useResponsive } from '../hooks/useResponsive';

function HomeScreenContent() {
  const { theme } = useThemeCustom();
  const { isMobile } = useResponsive();
  const { setScrollViewRef, registerSection } = useScroll();
  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    setScrollViewRef(scrollViewRef);
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      {/* FLOATING ICONS BACKGROUND */}
      <FloatingIcons />

      {/* FIXED HEADER */}
      <Header />

      {/* MAIN SCROLLABLE CONTENT */}
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          paddingTop: isMobile ? 80 : 100,
        }}
        scrollEventThrottle={16}
      >
        {/* HERO SECTION */}
        <View
          nativeID="hero"
          onLayout={(e) => registerSection('hero', e.nativeEvent.layout.y)}
          style={{ marginBottom: isMobile ? 50 : 80 }}
        >
          <Hero />
        </View>

        {/* ABOUT SECTION */}
        <View
          nativeID="about"
          onLayout={(e) => registerSection('about', e.nativeEvent.layout.y)}
          style={{ marginBottom: isMobile ? 50 : 80 }}
        >
          <About />
        </View>

        {/* PROJECTS SECTION */}
        <View
          nativeID="projects"
          onLayout={(e) => registerSection('projects', e.nativeEvent.layout.y)}
          style={{ marginBottom: isMobile ? 50 : 80 }}
        >
          <Projects />
        </View>

        {/* CONTACT SECTION */}
        <View
          nativeID="contact"
          onLayout={(e) => registerSection('contact', e.nativeEvent.layout.y)}
          style={{ marginBottom: isMobile ? 40 : 80 }}
        >
          <Contact />
        </View>

        {/* FOOTER */}
        <Footer />
      </ScrollView>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ScrollProvider>
      <HomeScreenContent />
    </ScrollProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});