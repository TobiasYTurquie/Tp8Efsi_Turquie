/**
 * App Navigator
 * Configuración centralizada de la navegación
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PostDetailScreen } from '../screens/PostDetail';
import BottomTabs from './BottomTabs';

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
        <Stack.Screen
          name="MainTabs"
          component={BottomTabs}
        />

        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;