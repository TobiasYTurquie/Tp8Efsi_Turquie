import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from '../styles/global';

export default function PostCard({ post, onPress }) {
  return (
    <Pressable style={styles.postCard} onPress={onPress}>
      <View style={styles.postHeader}>
        <View style={styles.postProfile}> 
          <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
          <View style={styles.postProfileText}>
            <Text style={styles.postUsername}>{post.username}</Text>
            <Text style={styles.postLocation}>{post.location}</Text>
          </View>
        </View>
        <Text style={styles.postOptions}>•••</Text>
      </View>

      <Image source={{ uri: post.image }} style={styles.postImage} />

      <View style={styles.postActions}>
        <Text style={styles.postActionButton}>❤️</Text>
        <Text style={styles.postActionButton}>💬</Text>
        <Text style={styles.postActionButton}>✈️</Text>
      </View>

      <Text style={styles.postLikes}>{post.likes} me gusta</Text>
      <Text style={styles.postCaption} numberOfLines={2}>
        <Text style={styles.postUsername}>{post.username} </Text>
        {post.caption}
      </Text>
    </Pressable>
  );
}
