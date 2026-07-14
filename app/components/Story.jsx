/**
 * Story Component
 * Componente para mostrar las historias en el feed
 * Representa un usuario con una historia disponible
 * 
 * Props:
 * - user: Object con datos del usuario { id, username, avatar, hasStory }
 * - onPress: Callback cuando se presiona la historia
 */

import React from 'react';
import { 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Text,
} from 'react-native';
import { COLORS, SPACING, FONTS } from '../styles/colors';

export const Story = ({ user, onPress, isViewed = false }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      {/* AVATAR CON BORDE DE HISTORIA */}
      <View style={[
        styles.avatarContainer,
        user.hasStory && !isViewed && styles.avatarBorderActive,
      ]}>
        <Image
          source={{ uri: user.avatar }}
          style={styles.avatar}
        />
      </View>

      {/* NOMBRE */}
      <Text style={styles.username} numberOfLines={1}>
        {user.username.length > 10 
          ? user.username.substring(0, 10) + '...'
          : user.username
        }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: SPACING.xs,
  },

  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 2,
    marginBottom: SPACING.xs,
    borderWidth: 2,
    borderColor: COLORS.borderGray,
  },

  avatarBorderActive: {
    borderColor: COLORS.links,
    borderWidth: 2.5,
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 33,
  },

  username: {
    fontSize: FONTS.small,
    color: COLORS.primary,
    width: 70,
    textAlign: 'center',
  },
});

export default Story;
