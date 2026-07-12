# Servicio de API

Documentación del servicio centralizado de API con Axios.

## api.js

**Responsabilidad**: Centralizar todas las llamadas HTTP y transformar datos.

**Base URL**: `https://api.thecatapi.com/v1`

**Axios Client**:
```javascript
const API_CLIENT = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 10000
});
```

### Funciones Exportadas

#### `getPosts(limit = 20, page = 0)`

**Parámetros**:
- `limit`: Number - Cantidad de imágenes a traer (default: 20)
- `page`: Number - Página para paginación (default: 0)

**Retorna**: Promise<Array>

**Ejemplo**:
```javascript
const posts = await getPosts(15);
```

**Lo que hace**:
1. Llama a `/images/search` de The Cat API
2. Transforma la respuesta a formato compatible con Instagram
3. Genera datos simulados (avatar, username, location, etc.)
4. Retorna array de posts con estructura estándar

### Datos Retornados

```javascript
{
  id: string,
  avatar: string,              // Avatar del usuario
  username: string,            // Username generado
  location: string,            // Ubicación simulada
  image: string,              // URL de imagen del gato
  likes: number,              // Likes aleatorios
  caption: string,            // Caption generado
  comments: Array<{user, text}>,
  timestamp: ISO8601
}
```

### Utilidades Internas

- `generateUsername()`: Crea nombres realistas
- `generateLocation()`: Ubicaciones en Latinoamérica y España
- `generateCaption()`: Descripciones temáticas
- `generateComments()`: Comentarios simulados

### Manejo de Errores

```javascript
try {
  const posts = await getPosts();
  setPosts(posts);
} catch (error) {
  console.error('Error fetching posts:', error);
  // Mostrar feedback al usuario
}
```

### Notas

- Todos los datos excepto la imagen son simulados
- La API de gatos es pública y no requiere autenticación
- Los requests tienen timeout de 10 segundos
- Los comentarios son simulados para cada post
