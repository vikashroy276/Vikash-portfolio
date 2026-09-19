import React from 'react';
import { Platform, View } from 'react-native';

// Web icons
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaReact,
  FaAndroid,
  FaJava,
  FaNodeJs,
  FaEnvelope,
  FaPhoneAlt,
  FaFolderOpen,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import {
  SiKotlin,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiGoogleplay,
  SiSqlite,
} from 'react-icons/si';

// Native icons (Expo vector icons)
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from '@expo/vector-icons';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'whatsapp'
  | 'instagram'
  | 'react'
  | 'android'
  | 'java'
  | 'kotlin'
  | 'javascript'
  | 'typescript'
  | 'firebase'
  | 'googleplay'
  | 'sqlite'
  | 'nodejs'
  | 'envelope'
  | 'phone'
  | 'folder'
  | 'external'
  | 'menu'
  | 'close';

interface AppIconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default function AppIcon({
  name,
  size = 24,
  color = '#ffffff',
}: AppIconProps) {
  if (Platform.OS === 'web') {
    switch (name) {
      case 'github':
        return <FaGithub size={size} color={color} />;
      case 'linkedin':
        return <FaLinkedin size={size} color={color} />;
      case 'whatsapp':
        return <FaWhatsapp size={size} color={color} />;
      case 'instagram':
        return <FaInstagram size={size} color={color} />;
      case 'react':
        return <FaReact size={size} color={color} />;
      case 'android':
        return <FaAndroid size={size} color={color} />;
      case 'java':
        return <FaJava size={size} color={color} />;
      case 'kotlin':
        return <SiKotlin size={size} color={color} />;
      case 'javascript':
        return <SiJavascript size={size} color={color} />;
      case 'typescript':
        return <SiTypescript size={size} color={color} />;
      case 'firebase':
        return <SiFirebase size={size} color={color} />;
      case 'googleplay':
        return <SiGoogleplay size={size} color={color} />;
      case 'sqlite':
        return <SiSqlite size={size} color={color} />;
      case 'nodejs':
        return <FaNodeJs size={size} color={color} />;
      case 'envelope':
        return <FaEnvelope size={size} color={color} />;
      case 'phone':
        return <FaPhoneAlt size={size} color={color} />;
      case 'folder':
        return <FaFolderOpen size={size} color={color} />;
      case 'external':
        return <FaExternalLinkAlt size={size} color={color} />;
      case 'menu':
        return <FaBars size={size} color={color} />;
      case 'close':
        return <FaTimes size={size} color={color} />;
      default:
        return null;
    }
  }

  // Native (Android / iOS)
  switch (name) {
    case 'github':
      return <FontAwesome name="github" size={size} color={color} />;
    case 'linkedin':
      return <FontAwesome name="linkedin-square" size={size} color={color} />;
    case 'whatsapp':
      return <FontAwesome name="whatsapp" size={size} color={color} />;
    case 'instagram':
      return <FontAwesome name="instagram" size={size} color={color} />;
    case 'react':
      return <MaterialCommunityIcons name="react" size={size} color={color} />;
    case 'android':
      return <MaterialCommunityIcons name="android" size={size} color={color} />;
    case 'java':
      return <MaterialCommunityIcons name="language-java" size={size} color={color} />;
    case 'kotlin':
      return <MaterialCommunityIcons name="language-kotlin" size={size} color={color} />;
    case 'javascript':
      return <MaterialCommunityIcons name="language-javascript" size={size} color={color} />;
    case 'typescript':
      return <MaterialCommunityIcons name="language-typescript" size={size} color={color} />;
    case 'firebase':
      return <MaterialCommunityIcons name="firebase" size={size} color={color} />;
    case 'googleplay':
      return <MaterialCommunityIcons name="google-play" size={size} color={color} />;
    case 'sqlite':
      return <MaterialCommunityIcons name="database" size={size} color={color} />;
    case 'nodejs':
      return <MaterialCommunityIcons name="nodejs" size={size} color={color} />;
    case 'envelope':
      return <MaterialCommunityIcons name="email-outline" size={size} color={color} />;
    case 'phone':
      return <MaterialCommunityIcons name="phone" size={size} color={color} />;
    case 'folder':
      return <MaterialCommunityIcons name="folder-open-outline" size={size} color={color} />;
    case 'external':
      return <MaterialCommunityIcons name="open-in-new" size={size} color={color} />;
    case 'menu':
      return <Feather name="menu" size={size} color={color} />;
    case 'close':
      return <Feather name="x" size={size} color={color} />;
    default:
      return null;
  }
}
