import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { useThemeCustom } from '../context/ThemeContext';

export default function TermsScreen({ navigation }: any) {
  const { theme } = useThemeCustom();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.card,
            borderBottomColor: theme.border,
          },
        ]}
      >
        <Text
          onPress={() => navigation.goBack()}
          style={[
            styles.backText,
            { color: theme.primary },
          ]}
        >
          ← Back
        </Text>

        <Text
          style={[
            styles.headerTitle,
            { color: theme.text },
          ]}
        >
          Terms & Conditions
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View
          style={[
            styles.contentCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              { color: theme.primary },
            ]}
          >
            Terms & Conditions
          </Text>

          <Text
            style={[
              styles.info,
              { color: theme.subText },
            ]}
          >
            Website: Vikash Kumar Portfolio
          </Text>

          <Text
            style={[
              styles.info,
              { color: theme.subText },
            ]}
          >
            Developer: Vikash Kumar
          </Text>

          <Text
            style={[
              styles.info,
              { color: theme.subText },
            ]}
          >
            Effective date: September 16, 2026
          </Text>

          <Section title="1. Introduction" theme={theme}>
            These Terms & Conditions govern your use of the Vikash
            Kumar Portfolio website.

            {'\n\n'}

            By accessing and using this website, you agree to use it
            responsibly and in accordance with these terms.
          </Section>

          <Section title="2. Website Purpose" theme={theme}>
            This website is a personal professional portfolio designed
            to provide information about my skills, experience, projects,
            services, and professional background.

            {'\n\n'}

            The website may also provide contact options for professional
            communication, freelance opportunities, employment
            opportunities, and project discussions.
          </Section>

          <Section title="3. Portfolio Content" theme={theme}>
            Information presented on this website is provided for
            professional and informational purposes.

            {'\n\n'}

            Project descriptions, technologies, images, logos, and other
            materials may belong to their respective owners where
            applicable.
          </Section>

          <Section title="4. Intellectual Property" theme={theme}>
            Unless otherwise stated, the original portfolio design,
            written content, code, and personal materials on this website
            belong to the developer.

            {'\n\n'}

            You may not reproduce, redistribute, or commercially exploit
            original website content without appropriate permission.
          </Section>

          <Section title="5. External Links" theme={theme}>
            This website may contain links to third-party websites,
            including GitHub, LinkedIn, WhatsApp, Instagram, and other
            services.

            {'\n\n'}

            These websites are operated independently and may have their
            own terms and privacy policies.
          </Section>

          <Section title="6. Contact and Communication" theme={theme}>
            Visitors may use the contact form or provided contact
            information to communicate regarding professional
            opportunities, projects, employment, freelance work, or other
            legitimate inquiries.

            {'\n\n'}

            Please do not submit confidential, sensitive, or unnecessary
            personal information through the contact form.
          </Section>

          <Section title="7. Accuracy of Information" theme={theme}>
            Reasonable efforts may be made to keep the information on
            this website accurate and current.

            {'\n\n'}

            However, information may change over time, and no guarantee
            is made that every piece of information will always be
            complete or current.
          </Section>

          <Section title="8. Website Availability" theme={theme}>
            The website may occasionally be unavailable due to
            maintenance, hosting issues, technical problems, or other
            circumstances outside the developer's control.
          </Section>

          <Section title="9. Limitation of Liability" theme={theme}>
            This website is provided for informational and professional
            purposes.

            {'\n\n'}

            To the extent permitted by applicable law, the developer is
            not responsible for losses or damages arising solely from
            reliance on information presented on this website or from
            temporary website unavailability.
          </Section>

          <Section title="10. Prohibited Use" theme={theme}>
            You agree not to:

            {'\n'}• Use the website for unlawful purposes.
            {'\n'}• Attempt to disrupt or damage the website.
            {'\n'}• Attempt unauthorized access to website systems.
            {'\n'}• Copy or misuse website content.
            {'\n'}• Submit malicious or harmful content through the contact
            form.
          </Section>

          <Section title="11. Changes to These Terms" theme={theme}>
            These Terms & Conditions may be updated from time to time.

            {'\n\n'}

            Updated terms will be published on this page when changes
            are made.
          </Section>

          <Section title="12. Contact" theme={theme}>
            If you have questions regarding these Terms & Conditions,
            please contact:

            {'\n\n'}

            vikashroy276@gmail.com
          </Section>
        </View>
      </ScrollView>
    </View>
  );
}


/* ---------- Reusable Section ---------- */

function Section({
  title,
  children,
  theme,
}: {
  title: string;
  children: React.ReactNode;
  theme: any;
}) {
  return (
    <View style={styles.section}>
      <Text
        style={[
          styles.sectionTitle,
          { color: theme.primary },
        ]}
      >
        {title}
      </Text>

      <Text
        style={[
          styles.sectionText,
          { color: theme.text },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}


/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderBottomWidth: 1,
  },

  backText: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 25,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
  },

  scrollContent: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  contentCard: {
    width: '100%',
    maxWidth: 1000,
    borderWidth: 1,
    borderRadius: 18,
    padding: 35,
  },

  title: {
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 15,
  },

  info: {
    fontSize: 15,
    marginBottom: 5,
  },

  section: {
    marginTop: 35,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    marginBottom: 12,
  },

  sectionText: {
    fontSize: 16,
    lineHeight: 29,
  },
});