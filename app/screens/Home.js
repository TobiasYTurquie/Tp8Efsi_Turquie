/**
 * Home Screen
 * Pantalla principal - Feed de Instagram
 * 
 * Características:
 * - FlatList para renderizar publicaciones
 * - Carga asincrónica desde la API
 * - Header personalizado
 * - Historia (Stories) en la parte superior
 * - Estados con useEffect para obtener datos
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { getPosts } from '../services/api';
import { Header } from '../components/Header';
import { Story } from '../components/Story';
import { PostCard } from '../components/PostCard';
import { COLORS, SPACING } from '../styles/colors';

export const HomeScreen = ({ navigation }) => {
  // Estados
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Usuarios para las historias simuladas
  const storyUsers = [
    { id: 1, username: 'tu_historia', avatar: 'https://i.pravatar.cc/150?img=1', hasStory: true },
    { id: 2, username: 'luna.photo', avatar: 'https://i.pravatar.cc/150?img=2', hasStory: true },
    { id: 3, username: 'cat_lover', avatar: 'https://i.pravatar.cc/150?img=3', hasStory: true },
    { id: 4, username: 'whiskers', avatar: 'https://i.pravatar.cc/150?img=4', hasStory: true },
    { id: 5, username: 'meow.life', avatar: 'https://i.pravatar.cc/150?img=5', hasStory: true },
  ];

  /**
   * Carga las publicaciones al montar el componente
   */
  useEffect(() => {
    loadPosts();
  }, []);

  /**
   * Obtiene los posts de la API
   */
  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await getPosts(15);
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts:', error);
      // Mostrar feedback al usuario (en producción usarías un Toast)
    } finally {
      setLoading(false);
    }
  };

  /**
   * Recarga los posts manualmente
   */
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      const data = await getPosts(15);
      setPosts(data);
    } catch (error) {
      console.error('Error refreshing posts:', error);
    } finally {
      setRefreshing(false);
    }
  };

  /**
   * Navega al detalle del post
   */
  const handlePostPress = (post) => {
    navigation.navigate('PostDetail', { post });
  };

  /**
   * Renderiza el header con historias
   */
  const renderStories = () => (
    <View style={styles.storiesContainer}>
      <FlatList
        data={storyUsers}
        renderItem={({ item }) => (
          <Story user={item} onPress={() => console.log('Story pressed')} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesList}
        scrollEnabled
      />
    </View>
  );

  /**
   * Renderiza cada post individual
   */
  const renderPost = ({ item }) => (
    <PostCard 
      post={item} 
      onPress={() => handlePostPress(item)}
    />
  );

  if (loading && posts.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onNotificationsPress={() => console.log('Notifications')}
        onMessagesPress={() => console.log('Messages')}
      />
      
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderStories}
        onRefresh={onRefresh}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  storiesContainer: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
    paddingVertical: SPACING.md,
  },

  storiesList: {
    paddingHorizontal: SPACING.sm,
  },
});

export default HomeScreen;
