import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { HomeScreen } from '../screens/Home';
import { ProfileScreen } from '../screens/Profile';
import { COLORS, SPACING, FONTS, SHADOW } from '../styles/colors';

const Tab = createBottomTabNavigator();
const USER_AVATAR = 'https://i.pravatar.cc/150?img=25';

const tabItems = [
  { name: 'Home', icon: '🏠' },
  { name: 'Search', icon: '🔍' },
  { name: 'Create', icon: '＋' },
  { name: 'Activity', icon: '❤️' },
  { name: 'Profile', icon: 'profile' },
];

const PlaceholderScreen = ({ title }) => (
  <SafeAreaView style={styles.placeholderWrapper}>
    <Text style={styles.placeholderText}>{title}</Text>
  </SafeAreaView>
);

const InstagramTabBar = ({ state, descriptors, navigation }) => (
  <SafeAreaView style={styles.tabBarSafeArea}>
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const routeName = route.name;
        const tab = tabItems.find(item => item.name === routeName);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = tab?.icon || '◻️';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tabButton}
          >
            {routeName === 'Profile' ? (
              <Image
                source={{ uri: USER_AVATAR }}
                style={[
                  styles.profileAvatar,
                  isFocused && styles.profileAvatarActive,
                ]}
              />
            ) : (
              <Text
                style={[
                  styles.tabIcon,
                  isFocused && styles.tabIconActive,
                  routeName === 'Create' && styles.createIcon,
                ]}
              >
                {icon}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  </SafeAreaView>
);

export const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.hiddenTabBar,
    }}
    tabBar={props => <InstagramTabBar {...props} />}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search">
      {() => <PlaceholderScreen title="Buscar" />}
    </Tab.Screen>
    <Tab.Screen name="Create">
      {() => <PlaceholderScreen title="Nueva publicación" />}
    </Tab.Screen>
    <Tab.Screen name="Activity">
      {() => <PlaceholderScreen title="Actividad" />}
    </Tab.Screen>
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  hiddenTabBar: {
    display: 'none',
  },
  tabBarSafeArea: {
    backgroundColor: COLORS.white,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
    backgroundColor: COLORS.white,
    ...SHADOW.small,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  tabIcon: {
    fontSize: 24,
    color: COLORS.textGray,
  },
  tabIconActive: {
    color: COLORS.primary,
  },
  createIcon: {
    fontSize: 28,
  },
  profileAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  profileAvatarActive: {
    borderColor: COLORS.primary,
  },
  placeholderWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: FONTS.large,
    color: COLORS.darkGray,
    fontWeight: '600',
  },
});

export default BottomTabs;
