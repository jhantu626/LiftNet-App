import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Jobs, Login, Otp, Profile, SaveJobs } from './Screens';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './contexts';

//Icons
import { FontAwesome } from '@react-native-vector-icons/fontawesome';

import { colors } from './utils/colors';
import { fonts } from './utils/fonts';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import Lucide from '@react-native-vector-icons/lucide';
import Search from './Screens/Home/Search';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    );
  };

  // HOME STACK
  const HomeStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_left'
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} options={{
          animation: 'slide_from_bottom',
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 300,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 300,
              },
            },
          }
        }} />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: fonts.medium,
          },
          animation: 'shift',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialDesignIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Apply"
          component={Jobs}
          options={{
            tabBarIcon: ({ color }) => (
              <Lucide name="send" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="My Jobs"
          component={SaveJobs}
          options={{
            tabBarIcon: ({ color }) => (
              <Lucide name="bookmark" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const AppNav = () => {
    const { authenticated } = useAuth();
    return (
      <NavigationContainer>
        {authenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
