import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
} from 'react-native';

import emailjs from '@emailjs/browser';

import { useThemeCustom } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import AppIcon from './common/AppIcon';

export default function Contact() {
  const { theme } = useThemeCustom();
  const { isMobile } = useResponsive();

  /* FORM STATES */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const showAlert = (title: string, msg: string) => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      window.alert(`${title}: ${msg}`);
    } else {
      Alert.alert(title, msg);
    }
  };

  /* SEND EMAIL */
  const sendEmail = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      showAlert('Notice', 'Please fill in all fields.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_68yz15k',
        'template_qdzecwq',
        {
          user_name: name,
          user_email: email,
          message: message,
        },
        '7ye9XWzR-I2km-7qM'
      )
      .then(() => {
        setLoading(false);
        showAlert('Success', 'Message Sent Successfully 🚀');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        showAlert('Error', 'Something went wrong. Please try again or reach out directly!');
      });
  };

  return (
    <View
      nativeID="contact"
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          paddingHorizontal: isMobile ? 16 : 50,
        },
      ]}
    >
      {/* HEADING */}
      <Text
        style={[
          styles.heading,
          {
            color: theme.text,
            fontSize: isMobile ? 32 : 50,
            marginBottom: isMobile ? 12 : 20,
          },
        ]}
      >
        Contact Me
      </Text>

      {/* SUBTEXT */}
      <Text
        style={[
          styles.subText,
          {
            color: theme.subText,
            fontSize: isMobile ? 15 : 20,
            lineHeight: isMobile ? 24 : 36,
            marginBottom: isMobile ? 24 : 40,
          },
        ]}
      >
        Ready to get started on your project?{'\n'}
        Contact me now for a free consultation.
      </Text>

      {/* CONTACT BUTTONS */}
      <View
        style={[
          styles.contactRow,
          {
            flexDirection: isMobile ? 'column' : 'row',
            width: isMobile ? '100%' : 'auto',
            gap: isMobile ? 12 : 22,
            marginBottom: isMobile ? 32 : 45,
          },
        ]}
      >
        {/* EMAIL */}
        <TouchableOpacity
          style={[
            styles.contactButton,
            {
              borderColor: theme.primary,
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'center' : 'flex-start',
            },
          ]}
          onPress={() => Linking.openURL('mailto:vikashroy276@gmail.com')}
        >
          <AppIcon name="envelope" size={18} color={theme.primary} />
          <Text
            style={[
              styles.contactButtonText,
              { color: theme.text, fontSize: isMobile ? 14 : 16 },
            ]}
          >
            vikashroy276@gmail.com
          </Text>
        </TouchableOpacity>

        {/* PHONE */}
        <TouchableOpacity
          style={[
            styles.contactButton,
            {
              borderColor: theme.primary,
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'center' : 'flex-start',
            },
          ]}
          onPress={() => Linking.openURL('tel:+919471235283')}
        >
          <AppIcon name="phone" size={18} color={theme.primary} />
          <Text
            style={[
              styles.contactButtonText,
              { color: theme.text, fontSize: isMobile ? 14 : 16 },
            ]}
          >
            +91 9471235283
          </Text>
        </TouchableOpacity>
      </View>

      {/* FORM TITLE */}
      <Text
        style={[
          styles.formTitle,
          {
            color: theme.text,
            fontSize: isMobile ? 21 : 28,
            marginBottom: isMobile ? 20 : 30,
          },
        ]}
      >
        Get in touch using the form
      </Text>

      {/* FORM */}
      <View
        style={[
          styles.formContainer,
          {
            width: isMobile ? '100%' : '65%',
          },
        ]}
      >
        {/* NAME */}
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
          style={[
            styles.input,
            {
              backgroundColor: theme.card,
              color: theme.text,
              height: isMobile ? 52 : 62,
            },
          ]}
        />

        {/* EMAIL */}
        <TextInput
          placeholder="Your Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={[
            styles.input,
            {
              backgroundColor: theme.card,
              color: theme.text,
              height: isMobile ? 52 : 62,
            },
          ]}
        />

        {/* MESSAGE */}
        <TextInput
          placeholder="Write your message..."
          placeholderTextColor="#888"
          multiline
          textAlignVertical="top"
          value={message}
          onChangeText={setMessage}
          style={[
            styles.messageInput,
            {
              backgroundColor: theme.card,
              color: theme.text,
              height: isMobile ? 150 : 200,
            },
          ]}
        />

        {/* SUBMIT BUTTON */}
        <TouchableOpacity
          style={[
            styles.submitButton,
            {
              backgroundColor: theme.primary,
              width: isMobile ? '100%' : 220,
              opacity: loading ? 0.7 : 1,
            },
          ]}
          onPress={sendEmail}
          disabled={loading}
        >
          <Text style={styles.submitText}>
            {loading ? 'Sending...' : 'Submit Message'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subText: {
    textAlign: 'center',
    maxWidth: 800,
  },
  contactRow: {
    alignItems: 'center',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1.5,
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
  },
  contactButtonText: {
    fontWeight: '700',
  },
  formTitle: {
    fontWeight: '800',
    textAlign: 'center',
  },
  formContainer: {
    maxWidth: 750,
  },
  input: {
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  messageInput: {
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingTop: 16,
    fontSize: 15,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  submitButton: {
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  submitText: {
    color: '#050a05',
    fontSize: 16,
    fontWeight: '800',
  },
});