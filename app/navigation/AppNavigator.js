/**
 * App Navigator
 * Configuración centralizada de la navegación
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/Home';
import { PostDetailScreen } from '../screens/PostDetail';
import { ProfileScreen } from '../screens/Profile';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {/* Feed */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            gestureEnabled: false,
          }}
        />

        {/* Detalle del post */}
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
        />

        {/* Perfil */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;