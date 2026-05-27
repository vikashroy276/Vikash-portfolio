import React, {
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

import emailjs from '@emailjs/browser';

import {
  useThemeCustom,
} from '../context/ThemeContext';

export default function Contact() {

  const { theme } = useThemeCustom();

  /* FORM STATES */

  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [message, setMessage] =
    useState('');

  /* SEND EMAIL */

  const sendEmail = () => {

    if (
      !name ||
      !email ||
      !message
    ) {

      alert(
        'Please fill all fields'
      );

      return;
    }

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

        alert(
          'Message Sent Successfully 🚀'
        );

        /* CLEAR FORM */

        setName('');
        setEmail('');
        setMessage('');

      })

      .catch((error) => {

        console.log(error);

        alert(
          'Something went wrong!'
        );

      });
  };

  return (
    <View
      nativeID="contact"

      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}
    >

      {/* HEADING */}

      <Text
        style={[
          styles.heading,
          {
            color: theme.text,
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
          },
        ]}
      >
        Ready to get started on your project?

        {'\n'}

        Contact me now for a Free consultation.
      </Text>

      {/* CONTACT BUTTONS */}

      <View style={styles.contactRow}>

        {/* EMAIL */}

        <TouchableOpacity
          style={[
            styles.contactButton,
            {
              borderColor:
                theme.primary,
            },
          ]}

          onPress={() =>
            Linking.openURL(
              'mailto:vikashroy276@gmail.com'
            )
          }
        >

          <FaEnvelope
            size={18}
            color={theme.primary}
          />

          <Text
            style={[
              styles.contactButtonText,
              {
                color: theme.text,
              },
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
              borderColor:
                theme.primary,
            },
          ]}

          onPress={() =>
            Linking.openURL(
              'tel:+919471235283'
            )
          }
        >

          <FaPhoneAlt
            size={18}
            color={theme.primary}
          />

          <Text
            style={[
              styles.contactButtonText,
              {
                color: theme.text,
              },
            ]}
          >
            +91 94712352283
          </Text>

        </TouchableOpacity>

      </View>

      {/* FORM TITLE */}

      <Text
        style={[
          styles.formTitle,
          {
            color: theme.text,
          },
        ]}
      >
        Get in touch using the form
      </Text>

      {/* FORM */}

      <View style={styles.formContainer}>

        {/* NAME */}

        <TextInput
          placeholder="Your Name"

          placeholderTextColor="#888"

          value={name}

          onChangeText={setName}

          style={[
            styles.input,
            {
              backgroundColor:
                theme.card,

              color: theme.text,
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

          style={[
            styles.input,
            {
              backgroundColor:
                theme.card,

              color: theme.text,
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
              backgroundColor:
                theme.card,

              color: theme.text,
            },
          ]}
        />

        {/* SUBMIT BUTTON */}

        <TouchableOpacity
          style={[
            styles.submitButton,
            {
              backgroundColor:
                theme.primary,
            },
          ]}

          onPress={sendEmail}
        >

          <Text style={styles.submitText}>
            Submit Message
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 60,

    paddingTop: 40,
    paddingBottom: 20,

    alignItems: 'center',
  },

  heading: {
    fontSize: 54,

    fontWeight: '900',

    marginBottom: 25,
  },

  subText: {
    fontSize: 22,

    textAlign: 'center',

    lineHeight: 40,

    maxWidth: 900,

    marginBottom: 40,
  },

  contactRow: {
    flexDirection: 'row',

    gap: 25,

    marginBottom: 50,

    flexWrap: 'wrap',

    justifyContent: 'center',
  },

  contactButton: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 14,

    borderWidth: 1.5,

    paddingHorizontal: 28,
    paddingVertical: 18,

    borderRadius: 16,
  },

  contactButtonText: {
    fontSize: 16,

    fontWeight: '700',
  },

  formTitle: {
    fontSize: 28,

    fontWeight: '800',

    marginBottom: 35,
  },

  formContainer: {
    width: '70%',
  },

  input: {
    height: 65,

    borderRadius: 16,

    paddingHorizontal: 22,

    fontSize: 16,

    marginBottom: 22,
  },

  messageInput: {
    height: 220,

    borderRadius: 16,

    paddingHorizontal: 22,
    paddingTop: 20,

    fontSize: 16,

    marginBottom: 30,
  },

  submitButton: {
    height: 52,

    width: 220,

    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',
  },

  submitText: {
    color: '#ffffff',

    fontSize: 16,

    fontWeight: '800',
  },

});