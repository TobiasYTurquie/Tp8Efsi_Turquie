/**
 * PostDetail Screen
 * Pantalla de detalle de una publicación individual
 * 
 * Props desde navegación:
 * - post: Object con datos completos del post
 * 
 * Características:
 * - Imagen en alta resolución
 * - Información completa del usuario
 * - Comentarios
 * - Interacciones funcionales
 * - Like con animación y contador dinámico
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import { COLORS, SPACING, FONTS } from '../styles/colors';

export const PostDetailScreen = ({ route, navigation }) => {
  const { post } = route.params;

  // Estados
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isFollowing, setIsFollowing] = useState(false);

  /**
   * Maneja el toggle de like con feedback visual
   */
  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  /**
   * Navega al perfil del usuario
   */
  const handleProfilePress = () => {
    navigation.navigate('Profile', { username: post.username });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Atrás</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Publicación</Text>
          <TouchableOpacity>
            <Text style={styles.moreButton}>⋮</Text>
          </TouchableOpacity>
        </View>

        {/* USUARIO */}
        <Pressable 
          style={styles.userSection}
          onPress={handleProfilePress}
        >
          <Image
            source={{ uri: post.avatar }}
            style={styles.userAvatar}
          />
          <View style={styles.userInfoDetail}>
            <Text style={styles.usernameLarge}>{post.username}</Text>
            <Text style={styles.locationDetail}>{post.location}</Text>
          </View>
          <TouchableOpacity 
            style={[
              styles.followButton,
              isFollowing && styles.followButtonActive,
            ]}
            onPress={() => setIsFollowing(!isFollowing)}
          >
            <Text style={[
              styles.followButtonText,
              isFollowing && styles.followButtonTextActive,
            ]}>
              {isFollowing ? 'Siguiendo' : 'Seguir'}
            </Text>
          </TouchableOpacity>
        </Pressable>

        {/* IMAGEN PRINCIPAL */}
        <Image
          source={{ uri: post.image }}
          style={styles.mainImage}
          resizeMode="cover"
        />

        {/* ACCIONES */}
        <View style={styles.actionBar}>
          <TouchableOpacity 
            onPress={handleLikePress}
            style={styles.actionButton}
          >
            <Text style={styles.actionIconLarge}>
              {isLiked ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIconLarge}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIconLarge}>📤</Text>
          </TouchableOpacity>
          <View style={styles.spacer} />
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIconLarge}>🔖</Text>
          </TouchableOpacity>
        </View>

        {/* LIKES */}
        <View style={styles.likesSection}>
          <Text style={styles.likesCountText}>
            <Text style={styles.likesBold}>{likeCount.toLocaleString()}</Text> Me gusta
          </Text>
        </View>

        {/* CAPTION */}
        <View style={styles.captionSection}>
          <Text style={styles.captionContent}>
            <Text style={styles.usernameBold}>{post.username}</Text>
            {'\n'}
            {post.caption}
          </Text>
        </View>

        {/* ETIQUETAS */}
        {post.tags && post.tags.length > 0 && (
          <View style={styles.tagsSection}>
            <Text style={styles.tagsText}>
              {post.tags.join(' ')}
            </Text>
          </View>
        )}

        {/* COMENTARIOS */}
        <View style={styles.commentsSection}>
          <Text style={styles.commentsSectionTitle}>Comentarios</Text>
          {post.comments && post.comments.map((comment, index) => (
            <View key={index} style={styles.commentItem}>
              <Text style={styles.commentUser}>{comment.user}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))}
        </View>

        {/* TIMESTAMP */}
        <View style={styles.timestampSection}>
          <Text style={styles.timestampText}>
            {new Date(post.timestamp).toLocaleString('es-ES')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
  },

  backButton: {
    fontSize: FONTS.medium,
    color: COLORS.primary,
    fontWeight: '500',
  },

  headerTitle: {
    fontSize: FONTS.large,
    fontWeight: '600',
    color: COLORS.primary,
  },

  moreButton: {
    fontSize: 20,
    color: COLORS.primary,
  },

  // USUARIO
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },

  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: SPACING.md,
  },

  userInfoDetail: {
    flex: 1,
  },

  usernameLarge: {
    fontSize: FONTS.medium,
    fontWeight: '600',
    color: COLORS.primary,
  },

  locationDetail: {
    fontSize: FONTS.small,
    color: COLORS.textGray,
    marginTop: 2,
  },

  followButton: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },

  followButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  followButtonText: {
    fontSize: FONTS.small,
    fontWeight: '600',
    color: COLORS.primary,
  },

  followButtonTextActive: {
    color: COLORS.white,
  },

  // IMAGEN
  mainImage: {
    width: '100%',
    aspectRatio: 1,
  },

  // ACCIONES
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },

  actionButton: {
    padding: SPACING.sm,
  },

  actionIconLarge: {
    fontSize: 28,
  },

  spacer: {
    flex: 1,
  },

  // LIKES
  likesSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
  },

  likesCountText: {
    fontSize: FONTS.small,
    color: COLORS.primary,
  },

  likesBold: {
    fontWeight: '600',
  },

  // CAPTION
  captionSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },

  captionContent: {
    fontSize: FONTS.small,
    color: COLORS.primary,
    lineHeight: 20,
  },

  usernameBold: {
    fontWeight: '600',
  },

  // TAGS
  tagsSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },

  tagsText: {
    fontSize: FONTS.small,
    color: COLORS.links,
  },

  // COMENTARIOS
  commentsSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },

  commentsSectionTitle: {
    fontSize: FONTS.medium,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: SPACING.md,
  },

  commentItem: {
    marginBottom: SPACING.md,
  },

  commentUser: {
    fontSize: FONTS.small,
    fontWeight: '600',
    color: COLORS.primary,
  },

  commentText: {
    fontSize: FONTS.small,
    color: COLORS.primary,
    marginTop: 4,
  },

  // TIMESTAMP
  timestampSection: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.lg,
  },

  timestampText: {
    fontSize: FONTS.small,
    color: COLORS.textGray,
  },
});

export default PostDetailScreen;
