import React, { useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import styles from '../styles/global';

export default function PostDetail({ route }) {
  const { post } = route.params;
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleToggleLike = () => {
    setLiked((prev) => !prev);
    setLikesCount((current) => current + (liked ? -1 : 1));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={{ uri: post.image }} style={styles.detailImage} />
      <View style={styles.detailBody}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.detailTitle}>{post.username}</Text>
          <Pressable onPress={handleToggleLike} style={{ padding: 8 }}>
            <Text style={{ fontSize: 26 }}>{liked ? '❤️' : '🤍'}</Text>
          </Pressable>
        </View>
        <Text style={styles.detailText}>{post.location}</Text>
        <Text style={styles.detailText}>{likesCount} me gusta</Text>
        <Text style={styles.detailText}>{post.caption}</Text>
        <View style={styles.tagRow}>
          {post.tags.map((tag) => (
            <Text style={styles.tagItem} key={tag}>{tag}</Text>
          ))}
        </View>
        <Text style={[styles.detailTitle, { marginBottom: 10 }]}>Comentarios</Text>
        <FlatList
          data={post.comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.commentRow}>
              <Text style={styles.commentUser}>{item.user}</Text>
              <Text> {item.message}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#f0f0f0', marginVertical: 8 }} />}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
}
