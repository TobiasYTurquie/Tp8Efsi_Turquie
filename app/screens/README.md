# Pantallas de la Aplicación

Documentación de las tres pantallas principales del flujo de navegación.

## Home.js

**Responsabilidad**: Pantalla principal - Feed de Instagram.

**Estados**:
- `posts`: Array - Lista de publicaciones
- `loading`: Boolean - Estado de carga inicial
- `refreshing`: Boolean - Estado de pull-to-refresh

**Hooks**:
- `useEffect`: Cargar posts al montar el componente
- `useState`: Manejo de posts, loading, refreshing

**Características**:
- FlatList con 15+ publicaciones
- Historias en la parte superior
- Pull-to-refresh funcional
- Loading spinner
- Header integrado
- Navegación a PostDetail

---

## PostDetail.js

**Responsabilidad**: Mostrar el detalle completo de un post.

**Parámetros**:
```javascript
route.params = {
  post: Object // Objeto completo del post
}
```

**Estados**:
- `isLiked`: Boolean - Like del usuario
- `likeCount`: Number - Contador actualizado
- `isFollowing`: Boolean - Estado de seguimiento

**Hooks**:
- `useState`: Para like, counter, following

**Características**:
- Imagen en alta resolución
- Info completa del usuario
- Acciones funcionales
- Botón seguir/siguiendo
- Comentarios listados
- Etiquetas
- Timestamp detallado
- Navegación a Profile desde avatar

---

## Profile.js

**Responsabilidad**: Perfil del usuario con galería de 3 columnas.

**Parámetros**:
```javascript
route.params = {
  username: string // Nombre del usuario (opcional)
}
```

**Características**:
- Avatar grande (88x88)
- Estadísticas (posts, followers, following)
- Biografía
- Botón editar perfil
- Botón seguir/siguiendo
- Galería con **numColumns={3}**
- Navegación a PostDetail desde fotos

---

## Flujo de Datos

```
Home → getPosts() → [FlatList Posts] → onPress → PostDetail
                         ↓
                      Story → onPress
                         ↓
                   (Navega a navegador)

PostDetail → Avatar pressed → Profile
          → Photo pressed → PostDetail

Profile → Photo pressed → PostDetail
       → Back → Anterior pantalla
```
