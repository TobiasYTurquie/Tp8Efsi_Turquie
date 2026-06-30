import React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import styles from '../styles/global';

const gallery = Array.from({ length: 12 }).map((_, index) => ({
  id: String(index),
  image: `https://placekitten.com/${200 + (index % 3) * 10}/${200 + ((index + 1) % 3) * 10}`,
}));

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.profileHeader}>
        <View style={styles.profileTop}>
          <Image
            source={{ uri: 'https://api.dicebear.com/6.x/initials/svg?seed=profileUser' }}
            style={styles.profileAvatar}
          />
          <View style={styles.profileMeta}>
            <Text style={styles.profileName}>Carlos Turquie</Text>
            <Text style={styles.profileBio}>Apasionado por el diseño móvil y los gatos. Arquitectura limpia en cada pantalla.</Text>
            <View style={styles.profileNumbers}>
              <View style={styles.profileNumber}>
                <Text style={styles.profileNumberValue}>112</Text>
                <Text style={styles.profileNumberLabel}>Publicaciones</Text>
              </View>
              <View style={styles.profileNumber}>
                <Text style={styles.profileNumberValue}>4.2k</Text>
                <Text style={styles.profileNumberLabel}>Seguidores</Text>
              </View>
              <View style={styles.profileNumber}>
                <Text style={styles.profileNumberValue}>385</Text>
                <Text style={styles.profileNumberLabel}>Seguidos</Text>
              </View>
            </View>
            <Pressable style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Editar perfil</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <FlatList
        data={gallery}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.galleryItem}>
            <Image source={{ uri: item.image }} style={styles.galleryImage} />
          </View>
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
