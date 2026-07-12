# Componentes Reutilizables

Documentación de componentes visuales reutilizables de la aplicación.

## PostCard.js

**Responsabilidad**: Renderizar una publicación individual en el feed.

**Props**:
```javascript
{
  post: Object,     // {id, avatar, username, location, image, likes, caption, comments, timestamp}
  onPress: Function // Callback cuando se presiona la tarjeta
}
```

**Estados internos**:
- `isLiked`: Boolean - Controla si está likeado
- `likeCount`: Number - Contador dinámico de likes

**Hooks**:
- `useState`: Para like y likeCount

**Contiene**:
- Header con avatar, username, ubicación
- Imagen principal
- Barra de acciones (like, comentar, compartir, guardar)
- Contador de likes
- Caption con username en negrita
- Comentarios previos
- Timestamp

---

## Header.js

**Responsabilidad**: Barra superior del feed estilo Instagram.

**Props**:
```javascript
{
  onNotificationsPress: Function,
  onMessagesPress: Function
}
```

**Contiene**:
- Logo "Instagram"
- Icono de notificaciones
- Icono de mensajes diremos
- SafeAreaView integrado

---

## Story.js

**Responsabilidad**: Componente individual de una historia.

**Props**:
```javascript
{
  user: Object,     // {id, username, avatar, hasStory}
  onPress: Function,
  isViewed: Boolean
}
```

**Características**:
- Avatar con borde activo/inactivo
- Nombre truncado a 10 caracteres
- Indicador visual de historia nueva
