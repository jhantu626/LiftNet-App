import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Screens';
import { NavigationContainer } from '@react-navigation/native';
//Icons
import { FontAwesome } from '@react-native-vector-icons/fontawesome';

import { colors } from './utils/colors';
import { fonts } from './utils/fonts';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const AuthStack=()=>{
    return <Stack.Navigator>
      <Stack.Screen name='Login' component={Home}/>
    </Stack.Navigator>
  }

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
            fontFamily: fonts.medium
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
