import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/global';

export default function Story({ avatar, username }) {
  return (
    <View style={styles.storyContainer}>
      <Image source={{ uri: avatar }} style={styles.storyAvatar} />
      <Text style={styles.storyText} numberOfLines={1}>{username}</Text>
    </View>
  );
}
