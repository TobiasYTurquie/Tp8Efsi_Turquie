/**
 * Header Component
 * Barra superior del feed, similar a Instagram oficial
 * 
 * Contiene:
 * - Logo de Instagram
 * - Iconos de notificaciones
 * - Icono de mensajes
 */

import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { COLORS, SPACING, FONTS } from '../styles/colors';

export const Header = ({ onNotificationsPress, onMessagesPress }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* LOGO */}
        <Text style={styles.logo}>Instagram</Text>

        {/* ICONOS DERECHOS */}
        <View style={styles.rightActions}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={onNotificationsPress}
          >
            <Text style={styles.icon}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={onMessagesPress}
          >
            <Text style={styles.icon}>💬</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.white,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
  },

  logo: {
    fontSize: FONTS.title,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 2,
  },

  rightActions: {
    flexDirection: 'row',
  },

  iconButton: {
    padding: SPACING.sm,
    marginLeft: SPACING.md,
  },

  icon: {
    fontSize: 24,
  },
});

export default Header;
