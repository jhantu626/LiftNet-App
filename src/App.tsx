import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Screens';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const AppStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    );
  };

  return (
    // <SafeAreaView style={{ flex: 1 }}>
      // <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
