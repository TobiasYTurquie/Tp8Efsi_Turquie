import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { getFeedPosts } from '../services/api';
import PostCard from '../components/PostCard';
import Story from '../components/Story';
import styles from '../styles/global';

const storyUsers = [
  { username: 'Tu historia', avatar: 'https://api.dicebear.com/6.x/initials/svg?seed=story1' },
  { username: 'instacat', avatar: 'https://api.dicebear.com/6.x/initials/svg?seed=story2' },
  { username: 'purrfect', avatar: 'https://api.dicebear.com/6.x/initials/svg?seed=story3' },
  { username: 'michi_love', avatar: 'https://api.dicebear.com/6.x/initials/svg?seed=story4' },
  { username: 'catlover', avatar: 'https://api.dicebear.com/6.x/initials/svg?seed=story5' },
];

export default function Home({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const feed = await getFeedPosts();
        setPosts(feed);
      } catch (error) {
        console.warn('Error cargando el feed', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.headerIconItem}>➕</Text>
          <Text style={styles.headerIconItem}>♥️</Text>
          <Text style={styles.headerIconItem}>✉️</Text>
        </View>
      </View>

      <View style={styles.storySection}>
        <FlatList
          data={storyUsers}
          keyExtractor={(item) => item.username}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storyList}
          renderItem={({ item }) => <Story avatar={item.avatar} username={item.username} />}
        />
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => navigation.navigate('PostDetail', { post: item })}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListEmptyComponent={
          loading ? <Text style={{ padding: 16 }}>Cargando publicaciones...</Text> : <Text style={{ padding: 16 }}>No hay publicaciones disponibles.</Text>
        }
      />
    </SafeAreaView>
  );
}
