/**
 * Profile Screen
 * Pantalla de perfil del usuario
 * 
 * Características:
 * - Información del perfil (avatar, bio, estadísticas)
 * - Cuadrícula de 3 columnas con FlatList y numColumns
 * - Galería de publicaciones del usuario
 * - Botón "Editar perfil"
 * - Estadísticas: posts, followers, following
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import { getPosts } from '../services/api';
import { COLORS, SPACING, FONTS } from '../styles/colors';

const { width } = Dimensions.get('window');
const COLUMN_SIZE = width / 3;

export const ProfileScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const canGoBack = navigation.canGoBack();

  // Datos del perfil (simulados)
  const profileData = {
    username: route.params?.username || 'luna.photography',
    avatar: 'https://i.pravatar.cc/150?img=25',
    biography: '📸 Fotografía de gatos | Viajera | Amante del arte felino',
    posts: 247,
    followers: 15200,
    following: 580,
    isVerified: true,
  };

  /**
   * Carga los posts del perfil
   */
  useEffect(() => {
    loadUserPosts();
  }, []);

  const loadUserPosts = async () => {
    try {
      setLoading(false);
      const data = await getPosts(12);
      setPosts(data);
    } catch (error) {
      console.error('Error loading user posts:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Renderiza cada foto en la galería
   */
  const renderPhotoItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.photoCell}
      onPress={() => navigation.navigate('PostDetail', { post: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.photoImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  /**
   * Renderiza el header del perfil
   */
  const renderProfileHeader = () => (
    <View style={styles.headerContainer}>
      {/* INFO DEL USUARIO */}
      <View style={styles.userHeader}>
        <Image
          source={{ uri: profileData.avatar }}
          style={styles.profileAvatar}
        />
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{(profileData.followers / 1000).toFixed(0)}K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.following}</Text>
            <Text style={styles.statLabel}>Siguiendo</Text>
          </View>
        </View>
      </View>

      {/* NOMBRE Y BIO */}
      <View style={styles.bioSection}>
        <View style={styles.nameContainer}>
          <Text style={styles.profileName}>{profileData.username}</Text>
          {profileData.isVerified && <Text style={styles.verifiedBadge}>✓</Text>}
        </View>
        <Text style={styles.biography}>{profileData.biography}</Text>
      </View>

      {/* BOTONES DE ACCIÓN */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar perfil</Text>
        </TouchableOpacity>
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
      </View>

      {/* GALERÍA HEADER */}
      <View style={styles.galleryHeaderContainer}>
        <Text style={styles.galleryTitle}>Publicaciones</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        {canGoBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Atrás</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.backButtonPlaceholder} />
        )}
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>⋮</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        renderItem={renderPhotoItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={renderProfileHeader}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  // TOP HEADER
  topHeader: {
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

  backButtonPlaceholder: {
    width: 70,
  },

  // PROFILE HEADER
  headerContainer: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },

  // USER HEADER (AVATAR + STATS)
  userHeader: {
    flexDirection: 'row',
    marginBottom: SPACING.lg,
  },

  profileAvatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginRight: SPACING.lg,
  },

  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: SPACING.md,
  },

  statItem: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: FONTS.title,
    fontWeight: '700',
    color: COLORS.primary,
  },

  statLabel: {
    fontSize: FONTS.small,
    color: COLORS.primary,
    marginTop: SPACING.xs,
  },

  // BIO SECTION
  bioSection: {
    marginBottom: SPACING.lg,
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },

  profileName: {
    fontSize: FONTS.large,
    fontWeight: '600',
    color: COLORS.primary,
  },

  verifiedBadge: {
    fontSize: 16,
    marginLeft: SPACING.xs,
  },

  biography: {
    fontSize: FONTS.small,
    color: COLORS.primary,
    lineHeight: 18,
  },

  // ACTION BUTTONS
  actionButtonsContainer: {
    flexDirection: 'row',
    marginBottom: SPACING.lg,
    gap: SPACING.sm,
  },

  editButton: {
    flex: 1,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    alignItems: 'center',
  },

  editButtonText: {
    fontSize: FONTS.small,
    fontWeight: '600',
    color: COLORS.primary,
  },

  followButton: {
    flex: 1,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    alignItems: 'center',
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

  // GALLERY HEADER
  galleryHeaderContainer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
    paddingVertical: SPACING.md,
    marginHorizontal: -SPACING.md,
    paddingHorizontal: SPACING.md,
  },

  galleryTitle: {
    fontSize: FONTS.small,
    fontWeight: '600',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // GALLERY
  columnWrapper: {
    gap: 2,
  },

  photoCell: {
    flex: 1,
    aspectRatio: 1,
    overflow: 'hidden',
  },

  photoImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileScreen;
