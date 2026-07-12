/**
 * PostCard Component
 * Componente reutilizable que representa una publicación individual en el feed
 * 
 * Props recibidas:
 * - post: Object con datos del post (id, avatar, username, location, image, likes, caption)
 * - onPress: Callback cuando se presiona la tarjeta
 * 
 * Estados:
 * - isLiked: Booleano para controlar si el post está likeado
 * - likeCount: Contador dinámico de likes
 */

import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Text,
  Pressable,
} from 'react-native';
import { COLORS, SPACING, FONTS, SHADOW } from '../styles/colors';

export const PostCard = ({ post, onPress }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  /**
   * Maneja el toggle de like
   * Actualiza el estado visual y el contador
   */
  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Pressable 
      style={styles.container}
      onPress={onPress}
    >
      {/* HEADER: Avatar, nombre y ubicación */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: post.avatar }}
            style={styles.avatar}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.location}>{post.location}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreText}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* IMAGEN PRINCIPAL */}
      <Image
        source={{ uri: post.image }}
        style={styles.postImage}
        resizeMode="cover"
      />

      {/* ACCIONES: Like, Comentar, Compartir */}
      <View style={styles.actionBar}>
        <TouchableOpacity 
          onPress={handleLikePress}
          style={styles.actionButton}
        >
          <Text style={styles.actionIcon}>
            {isLiked ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📤</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>🔖</Text>
        </TouchableOpacity>
      </View>

      {/* CONTADOR DE LIKES */}
      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>
          <Text style={styles.likesBold}>{likeCount.toLocaleString()}</Text> Me gusta
        </Text>
      </View>

      {/* CAPTION / DESCRIPCIÓN */}
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}>
          <Text style={styles.usernameBold}>{post.username}</Text> {post.caption}
        </Text>
      </View>

      {/* COMENTARIOS */}
      {post.comments && post.comments.length > 0 && (
        <View style={styles.commentsContainer}>
          <Text style={styles.commentPreview}>
            Ver los {post.comments.length} comentarios
          </Text>
        </View>
      )}

      {/* TIMESTAMP */}
      <Text style={styles.timestamp}>
        {formatTime(post.timestamp)}
      </Text>
    </Pressable>
  );
};

/**
 * Formatea el timestamp a un formato legible
 */
function formatTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Ahora';
  if (diffMins < 60) return `Hace ${diffMins}m`;
  if (diffHours < 24) return `Hace ${diffHours}h`;
  if (diffDays < 7) return `Hace ${diffDays}d`;
  
  return date.toLocaleDateString('es-ES');
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.lg,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.borderGray,
  },

  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: SPACING.md,
  },

  userTextContainer: {
    flex: 1,
  },

  username: {
    fontSize: FONTS.medium,
    fontWeight: '600',
    color: COLORS.primary,
  },

  location: {
    fontSize: FONTS.small,
    color: COLORS.textGray,
    marginTop: 2,
  },

  moreButton: {
    padding: SPACING.sm,
  },

  moreText: {
    fontSize: 18,
    color: COLORS.primary,
  },

  // IMAGEN
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },

  // ACCIONES
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },

  actionButton: {
    padding: SPACING.sm,
  },

  actionIcon: {
    fontSize: 24,
  },

  spacer: {
    flex: 1,
  },

  // LIKES
  likesContainer: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.xs,
  },

  likesText: {
    fontSize: FONTS.small,
    color: COLORS.primary,
  },

  likesBold: {
    fontWeight: '600',
  },

  // CAPTION
  captionContainer: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
  },

  captionText: {
    fontSize: FONTS.small,
    color: COLORS.primary,
    lineHeight: 18,
  },

  usernameBold: {
    fontWeight: '600',
  },

  // COMENTARIOS
  commentsContainer: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
  },

  commentPreview: {
    fontSize: FONTS.small,
    color: COLORS.textGray,
  },

  // TIMESTAMP
  timestamp: {
    fontSize: FONTS.small,
    color: COLORS.textGray,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
  },
});

export default PostCard;
