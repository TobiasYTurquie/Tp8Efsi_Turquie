/**
 * Servicio centralizado de API
 * Todas las llamadas HTTP con Axios se gestionan desde aquí
 * API: Cataas (The Cat API alternativa con mejor disponibilidad)
 */

import axios from 'axios';

// Configuración de Axios
const API_CLIENT = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 10000,
});

// Headers por defecto
API_CLIENT.defaults.headers.common['Content-Type'] = 'application/json';

/**
 * Obtener lista de posts/imágenes de gatos
 * @param {number} limit - Cantidad de imágenes
 * @param {number} page - Página para paginación
 * @returns {Promise<Array>}
 */
export const getPosts = async (limit = 20, page = 0) => {
  try {
    const response = await API_CLIENT.get('/images/search', {
      params: {
        limit,
        page,
        order: 'RANDOM',
      },
    });

    // Transformar respuesta de The Cat API a formato compatible con Instagram
    return response.data.map((image, index) => ({
      id: image.id || `post-${index}`,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      username: generateUsername(),
      location: generateLocation(),
      image: image.url,
      likes: Math.floor(Math.random() * 50000) + 1000,
      caption: generateCaption(),
      comments: generateComments(),
      timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Obtener detalle de un post específico
 * @param {string} postId - ID del post
 * @returns {Promise<Object>}
 */
export const getPostDetail = async (postId) => {
  try {
    // En este caso, retornamos el post del caché o hacemos una llamada específica
    const response = await API_CLIENT.get(`/images/${postId}`);
    
    return {
      id: response.data.id,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      username: generateUsername(),
      location: generateLocation(),
      image: response.data.url,
      likes: Math.floor(Math.random() * 50000) + 1000,
      caption: generateCaption(),
      comments: generateComments(),
      timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
      tags: ['#FelinesOfInstagram', '#CatsOfTheWorld', '#KittyLove'],
    };
  } catch (error) {
    console.error('Error fetching post detail:', error);
    throw error;
  }
};

// ==================== UTILIDADES ====================

/**
 * Genera un nombre de usuario aleatorio
 */
function generateUsername() {
  const names = [
    'luna.photography',
    'feliz.mundo',
    'cat_lover_22',
    'whiskers_adventures',
    'miau_miau',
    'paws_and_love',
    'kitty.chronicles',
    'feline_wanderer',
    'gatos.del.mundo',
    'purr_fect_moments',
    'cat_enthusiast',
    'meow_life',
    'wild_felinas',
    'pet_paradise',
    'smokey.days',
  ];
  return names[Math.floor(Math.random() * names.length)];
}

/**
 * Genera una ubicación simulada
 */
function generateLocation() {
  const locations = [
    'Buenos Aires, Argentina',
    'Barcelona, España',
    'Ciudad de México, México',
    'Lima, Perú',
    'Bogotá, Colombia',
    'Madrid, España',
    'São Paulo, Brasil',
    'Santiago, Chile',
    'Cartagena, Colombia',
    'Valencia, España',
  ];
  return locations[Math.floor(Math.random() * locations.length)];
}

/**
 * Genera un caption para el post
 */
function generateCaption() {
  const captions = [
    'Mi gatito favorito en su mejor ángulo 📸✨',
    'Momentos felinos que no puedo dejar de compartir 🐱💛',
    'A veces la vida te sorprende con la mejores vistas 😻',
    'Cuando dices "cheese" pero tu gato dice "meow" 📷😹',
    'Puro amor y peluches en este rincón 🐾❤️',
    'Bellas criaturas, bellas historias que contar',
    'El mirador favorito de mi mejor amigo felino 🏠✨',
    'Capturas del día: felicidad en forma de gato 😸',
  ];
  return captions[Math.floor(Math.random() * captions.length)];
}

/**
 * Genera comentarios simulados
 */
function generateComments() {
  return [
    { user: 'sara.lover', text: '¡Qué hermoso! 😍' },
    { user: 'marco.travel', text: 'Increíble fotografía 📸' },
    { user: 'diana.art', text: 'Me encanta tu contenido 💕' },
    { user: 'carlos.cat', text: '¡Adorable! 🐱' },
  ];
}

export default API_CLIENT;
