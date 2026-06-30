import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 10000,
});

const users = [
  { username: 'instacat', location: 'Madrid, España' },
  { username: 'luna.paws', location: 'Barcelona, España' },
  { username: 'michi_love', location: 'Valencia, España' },
  { username: 'gatito.cool', location: 'Sevilla, España' },
  { username: 'purrfect', location: 'Bilbao, España' },
  { username: 'catlover', location: 'Malaga, España' },
  { username: 'soloymiau', location: 'Granada, España' },
  { username: 'bigotes', location: 'Zaragoza, España' },
  { username: 'miau.style', location: 'Alicante, España' },
  { username: 'felixfeed', location: 'Santander, España' },
];

const captions = [
  'Tarde de relax con mi mejor amigo felino.',
  '¿Quién dijo que no era fotogénico?',
  'Cazador de rayos de sol.',
  'El gato más elegante de la ciudad.',
  'Aún en pijama, pero listo para el domingo.',
  'Mini aventura en el balcón.',
  'Ese momento cuando escuchas la lata.',
  'Postureo felino en 3, 2, 1...',
  'Un día más en el paraíso de las siestas.',
  'Disfrutando cada ronroneo.',
];

const tags = [
  '#catlover',
  '#instacat',
  '#petstagram',
  '#meow',
  '#cute',
  '#sunny',
  '#cozy',
  '#catsofinstagram',
];

export async function getFeedPosts() {
  const response = await api.get('/images/search', {
    params: { limit: 12, size: 'full' },
  });

  return response.data.map((item, index) => ({
    id: item.id,
    avatar: `https://api.dicebear.com/6.x/initials/svg?seed=${users[index % users.length].username}`,
    username: users[index % users.length].username,
    location: users[index % users.length].location,
    image: item.url,
    likes: 120 + index * 17,
    caption: captions[index % captions.length],
    tags: [tags[index % tags.length], tags[(index + 2) % tags.length]],
    comments: [
      { id: `${item.id}-1`, user: 'amigocat', message: '¡Qué foto tan preciosa!' },
      { id: `${item.id}-2`, user: 'petlover', message: 'Ese pelaje se ve increíble.' },
    ],
  }));
}

export default api;
