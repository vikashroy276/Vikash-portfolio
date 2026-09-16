import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { useThemeCustom } from '../context/ThemeContext';

export default function PrivacyPolicyScreen({ navigation }: any) {
  const { theme } = useThemeCustom();

  const openEmail = () => {
    Linking.openURL('mailto:vikashroy276@gmail.com');
  };

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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text
            style={[
              styles.backText,
              { color: theme.primary },
            ]}
          >
            ← Back
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.headerTitle,
            { color: theme.text },
          ]}
        >
          Privacy Policy
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
            Privacy Policy
          </Text>

          <Text style={[styles.info, { color: theme.subText }]}>
            Website: Vikash Kumar Portfolio
          </Text>

          <Text style={[styles.info, { color: theme.subText }]}>
            Developer: Vikash Kumar
          </Text>

          <Text style={[styles.info, { color: theme.subText }]}>
            Effective date: September 16, 2026
          </Text>

          <Section
            title="1. Introduction"
            theme={theme}
          >
            This Privacy Policy explains how this portfolio website
            handles information when you visit the website or contact
            me through the contact form.
          </Section>

          <Section
            title="2. Information We Collect"
            theme={theme}
          >
            When you voluntarily use the contact form, you may provide
            your name, email address, and message.

            {'\n\n'}

            This information is provided voluntarily by you and is used
            only for the purpose of responding to your inquiry or
            communication.
          </Section>

          <Section
            title="3. Contact Form"
            theme={theme}
          >
            The portfolio website provides a contact form that allows
            visitors to send a message.

            {'\n\n'}

            Information submitted through the contact form may include:

            {'\n'}• Name
            {'\n'}• Email address
            {'\n'}• Message

            {'\n\n'}

            The information is used to communicate with you regarding
            your inquiry, project discussion, job opportunity, or other
            professional communication.
          </Section>

          <Section
            title="4. Email Service"
            theme={theme}
          >
            The contact form may use a third-party email delivery
            service, such as EmailJS, to deliver messages submitted
            through the website.

            {'\n\n'}

            Information submitted through the contact form may therefore
            be processed by the service used to deliver the email.
          </Section>

          <Section
            title="5. How Information Is Used"
            theme={theme}
          >
            Information submitted through this website may be used to:

            {'\n'}• Respond to your messages.
            {'\n'}• Discuss projects or professional opportunities.
            {'\n'}• Respond to job or freelance inquiries.
            {'\n'}• Provide information requested by you.
            {'\n'}• Maintain necessary communication records.
          </Section>

          <Section
            title="6. Information Sharing"
            theme={theme}
          >
            Your personal information is not sold or intentionally
            provided to third parties for their own marketing purposes.

            {'\n\n'}

            Information may be processed by third-party services that are
            necessary to operate the website, such as an email delivery
            provider used by the contact form.
          </Section>

          <Section
            title="7. Data Storage and Retention"
            theme={theme}
          >
            Contact information may be retained for as long as reasonably
            necessary to respond to your inquiry and maintain relevant
            professional communication records.

            {'\n\n'}

            You may contact me if you have questions regarding the
            handling of information submitted through this website.
          </Section>

          <Section
            title="8. Cookies and Analytics"
            theme={theme}
          >
            This portfolio website does not intentionally collect
            personal information through cookies.

            {'\n\n'}

            If analytics, advertising, tracking tools, or other services
            are added to the website in the future, this Privacy Policy
            may be updated accordingly.
          </Section>

          <Section
            title="9. Third-Party Websites"
            theme={theme}
          >
            This portfolio contains links to third-party websites and
            services, which may include GitHub, LinkedIn, WhatsApp,
            Instagram, and other external platforms.

            {'\n\n'}

            When you visit an external website, that website's own
            privacy policy and terms may apply. I am not responsible for
            the privacy practices or content of third-party websites.
          </Section>

          <Section
            title="10. Data Security"
            theme={theme}
          >
            Reasonable measures are taken to protect information
            submitted through this website.

            {'\n\n'}

            However, no internet transmission or electronic storage
            system can be guaranteed to be completely secure.
          </Section>

          <Section
            title="11. Children's Privacy"
            theme={theme}
          >
            This website is intended primarily as a professional
            portfolio and is not specifically directed toward children.

            {'\n\n'}

            I do not knowingly request personal information from
            children through this website.
          </Section>

          <Section
            title="12. Your Choices"
            theme={theme}
          >
            You are not required to submit personal information simply
            to browse this portfolio website.

            {'\n\n'}

            You may choose not to use the contact form if you do not wish
            to provide your name, email address, or message.
          </Section>

          <Section
            title="13. Changes to This Privacy Policy"
            theme={theme}
          >
            This Privacy Policy may be updated from time to time.

            {'\n\n'}

            Any updated version will be published on this page and the
            effective date may be updated accordingly.
          </Section>

          <Section
            title="14. Contact"
            theme={theme}
          >
            If you have any questions regarding this Privacy Policy or
            the handling of information on this website, you can contact
            me at:

            {'\n\n'}

            Email:
          </Section>

          <TouchableOpacity
            onPress={openEmail}
            style={[
              styles.emailButton,
              {
                borderColor: theme.primary,
              },
            ]}
          >
            <Text
              style={[
                styles.emailText,
                { color: theme.primary },
              ]}
            >
              vikashroy276@gmail.com
            </Text>
          </TouchableOpacity>

          <View
            style={[
              styles.note,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.noteText,
                { color: theme.subText },
              ]}
            >
              This Privacy Policy should be reviewed and updated if the
              website's data collection, analytics, advertising,
              communication services, or other functionality changes.
            </Text>
          </View>
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

  backButton: {
    paddingVertical: 10,
    paddingRight: 25,
  },

  backText: {
    fontSize: 16,
    fontWeight: '700',
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

  emailButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 10,
  },

  emailText: {
    fontSize: 16,
    fontWeight: '700',
  },

  note: {
    marginTop: 40,
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
  },

  noteText: {
    fontSize: 14,
    lineHeight: 24,
  },
});